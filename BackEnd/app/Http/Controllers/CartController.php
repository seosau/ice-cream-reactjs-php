<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $user  = $request->user();
        $cartList = Cart::query()
            ->join("products", "carts.product_id", "products.id")
            ->where('carts.user_id', $user->id)
            ->get(['products.*', 'carts.quantity']);

        return  [
            'cartList' =>  CartResource::collection($cartList),
        ];
    }
    public function store(Request $request)
    {
        $request->validate([
            'id' => 'unique:carts,product_id',
        ], [
            'id.unique' => 'This product is already in your cart ',
        ]);
        $user = $request->user();
        $data = $request->all();
        if ($user) {
            Cart::create([
                'user_id' => $user->id,
                'product_id' =>  $data['id'],
                'price' =>  $data['price'],
                'quantity' =>  $data['quantity'],
            ]);
        }
        $cartListIds = Cart::query()->select('product_id')
            ->where("user_id", $user->id)
            ->get();
        $quantity = Cart::query()->where("user_id", $user->id)->sum("quantity");
        return [
            "cartListIds" => $cartListIds,
            "quantity" =>  $quantity,
        ];
    }
    public function update(Request $request)
    {
        $user = $request->user();
        $data = $request->all();
        Cart::query()
            ->where("user_id", $user->id)
            ->where("product_id", $data['product_id'])
            ->update(["quantity" => $data['quantity']]);
        $cartList = Cart::query()
            ->join("products", "carts.product_id", "=", "products.id")
            ->where('carts.user_id', $user->id)
            ->get(['products.*', 'carts.quantity']);
            $quantity = Cart::query()->where("user_id", $user->id)->sum("quantity");
        return  [
            'cartList' =>  CartResource::collection($cartList),
            "quantity" =>  $quantity,
        ];
    }
    public function destroy(Request $request, $product_id)
    {
        $user = $request->user();
        $user_id = (string)$user->id;
        Cart::query()
            ->where("user_id",  $user_id)
            ->where("product_id", $product_id)
            ->delete();
        $cartListIds = Cart::query()->select('product_id')
            ->where("user_id", $user->id)
            ->get();
        return [
            "cartListIds" => $cartListIds
        ];
    }
    public function getQuantity(Request $request)
    {
        $user  = $request->user();
        $cartIds = Cart::query()->select('product_id')
            ->where("user_id", $user->id)
            ->get();
        $quantity = Cart::query()->where("user_id", $user->id)->sum("quantity");
        return [
            "cartIds" =>  $cartIds,
            "quantity" =>  $quantity,
        ];
    }
}
