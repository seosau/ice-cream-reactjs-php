<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderRequest;
use App\Http\Resources\OrderResource;
use App\Models\Cart;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $status = $request->input('status');
        $payment_status = $request->input('payment_status');
        $query = Order::join('products', 'products.id', 'orders.product_id')
            ->join('sellers', 'sellers.id', 'orders.seller_id');
        if ($user->user_type === 'client') {
            $orderListQuery = $query
                ->where('orders.user_id', $user->id); 
        } else {
            if ($user->user_type === 'seller') {
                $orderListQuery = $query->where('orders.seller_id', $user->id);
            }
            $orderListQuery = $query->where('orders.status', '=',   $status ? $status : 'in progress')
                ->where('orders.payment_status', '=', $payment_status ? $payment_status : 'pending');
        }

        $orderList =  $orderListQuery
            ->orderBy('updated_at', 'desc')
            ->get(['orders.*', 'products.name as product_name', 'products.image' ,'sellers.name as seller_name']);

        return [
            'orderList' => OrderResource::collection($orderList)
        ];
    }
    public function store(OrderRequest $orderRequest)
    {
        $data = $orderRequest->validated();
        foreach ($data['products'] as $product) {
            Order::create(
                [
                    'user_id' => $data['user_id'],
                    'seller_id' => $product['seller_id'],
                    'product_id' => $product['product_id'],
                    'name' => $data['user_name'],
                    'phone_number' => $data['phone_number'],
                    'email' => $data['email'],
                    'address' => $data['address'],
                    'payment_method' => $data['payment_method'],
                    'price' => $product['price'],
                    'quantity' => $product['quantity'],
                ]
            );
            Cart::query()->where('user_id', $data['user_id'])
                ->where('product_id', $product['product_id'])
                ->delete();
            // Product::query()->where('seller_id',  $product['seller_id'])
            //     ->where('id', $product['product_id'])
            //     ->update(['stock' =>  $product['stock'] - $product['quantity']]);
        }
        $quantity = Cart::query()->where("user_id", $data['user_id'])->sum("quantity");
        return [
            'quantity' =>  $quantity ? $quantity : 0,
        ];
    }
    public function update(OrderRequest $orderRequest, Order $order)
    {
        $data = $orderRequest->validated();
        $order->update($data);
        Product::where('seller_id',  $order['seller_id'])
            ->where('id', $order['product_id'])
            ->update([
                'stock' => DB::raw('stock - ' . $order['quantity'])
            ]);

        return [
            'success' => true
        ];
    }
    public function show($id)
    {
        return OrderResource::collection(Order::join('products', 'products.id', 'orders.product_id')
            ->where('orders.id', $id)
            ->get(['orders.*', 'products.name as product_name', 'products.image', 'products.stock']));
    }
    public function destroy(Order $order, Request $request)
    {
        $user = $request->user();
        if ($user->user_type === 'client') {
            return abort(403, 'Unauthorized action');
        }
        $order->delete();
        return response('delete successfully', 204);
    }
}
