<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\WishListResource;
use App\Models\WishList;
use Illuminate\Http\Request;

class WishListController extends Controller
{
    public function index(Request $request)
    {
        $user  = $request->user();
        $wishlists = WishList::join("products", "wish_lists.product_id", "=", "products.id")
            ->where('wish_lists.user_id', $user->id)
            ->getModels(['products.*','wish_lists.id as wishlist_id']);

        return  [
            'wishlists' =>  WishListResource::collection($wishlists),
        ];
    }
    public  function store(Request $request)
    {
        $request->validate([
            'id' => 'unique:wish_lists,product_id',
        ], [
            'id.unique' => 'This product is already in your wish list ',
        ]);
        $user = $request->user();
        $data = $request->all();
        if ($user) {
            WishList::create([
                'user_id' => $user->id,
                'product_id' =>  $data['id'],
            ]);
        }
        $quantity = WishList::query()->select('product_id')
            ->where("user_id", $user->id)
            ->get();
        return [
            "wishListIds" => $quantity
        ];
    }
    public function destroy(Request $request, $product_id)
    {

        $user = $request->user();
        $user_id = (string)$user->id;
        WishList::query()
            ->where("user_id",  $user_id)
            ->where("product_id", $product_id)
            ->delete();
        $quantity = WishList::query()->select('product_id')
            ->where("user_id", $user->id)
            ->get();
        return [
            "wishListIds" => $quantity
        ];
    }
    public function getQuantity(Request $request)
    {
        $user  = $request->user();
        $quantity = WishList::query()->select('product_id')
            ->where("user_id", $user->id)
            ->get();
        return [
            "wishListIds" => $quantity
        ];
    }
}
