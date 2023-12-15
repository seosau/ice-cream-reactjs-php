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
            ->get(['products.*', 'carts.quantity', 'carts.id as cartId']);

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
    public function update(Request $request, $cartItemId)
    {
        $user = $request->user();
        $data = $request->all();
        Cart::where("user_id", $user->id)
            ->where("id", $cartItemId)
            ->update(["quantity" => $data['quantity']]);
        $cartList = Cart::join("products", "carts.product_id", "=", "products.id")
            ->where('carts.user_id', $user->id)
            ->get(['products.*', 'carts.quantity', 'carts.id as cartId']);
        $quantity = Cart::where("user_id", $user->id)->sum("quantity");
        return  [
            'cartList' =>  CartResource::collection($cartList),
            "quantity" =>  $quantity,
        ];
    }
    public function destroy(Request $request, $cartItemId)
    {
        $user = $request->user();

        $cartitem = Cart::find($cartItemId);
        if (!$cartitem) {
            return abort(404, 'Cart item not found');
        }

        if ($user->id !== $cartitem->user_id) {
            return abort(403, 'Unauthorized action');
        }

        $cartitem->delete();

        $cartListIds = Cart::where("user_id", $user->id)->pluck('product_id');

        return [
            "cartListIds" => $cartListIds,
            "message" => "Cart item deleted successfully",
        ];
    }
    public function getQuantity(Request $request)
    {
        $user  = $request->user();
        $cartIds = Cart::query()->select('product_id')
            ->where("user_id", $user->id)
            ->get();
        return [
            "cartIds" =>  $cartIds,
        ];
    }
}
