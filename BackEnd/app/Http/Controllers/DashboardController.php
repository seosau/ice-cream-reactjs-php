<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Message;
use App\Models\User;
use App\Models\Seller;
use App\Models\Product;
use App\Models\Order;


class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        if ($user->user_type === 'seller') {
            $totalProducts = Product::where("seller_id", $user->id)->count();
            $totalActiveProducts = Product::where("seller_id", $user->id)->where("status", "=", "active")->count();
            $totalIactiveProducts = Product::where("seller_id", $user->id)->where("status", "=", "inactive")->count();
            $totalUserAccounts = null;
            $totalSellerAccounts = null;
            $totalMessage = Message::count();
            $totalOrderPlaced = Order::where('seller_id', $user->id)->where('status', '!=', 'canceled')->count();
            $totalOrderCanceld = Order::where('seller_id', $user->id)->where('status', '=', 'canceled')->count();
            $totalOrderConfirmed = Order::where('seller_id', $user->id)->where('status', '=', 'delivered')->count();
        } else if ($user->user_type === 'admin') {
            $totalProducts = Product::count();
            $totalActiveProducts = Product::where("status", "=", "active")->count();
            $totalIactiveProducts = Product::where("status", "=", "inactive")->count();
            $totalUserAccounts = User::count();
            $totalSellerAccounts = Seller::count();
            $totalMessage = Message::count();
            $totalOrderPlaced = Order::where('status', '!=', 'canceled')->count();
            $totalOrderCanceld = Order::where('status', '=', 'canceled')->count();
            $totalOrderConfirmed = Order::where('status', '=', 'delivered')->count();
        }
        return [
            'totalProducts' => $totalProducts,
            'totalActiveProducts' => $totalActiveProducts,
            'totalIactiveProducts' => $totalIactiveProducts,
            'totalUserAccounts' =>  $totalUserAccounts,
            'totalSellerAccounts' => $totalSellerAccounts,
            'totalMessage' =>  $totalMessage,
            'totalOrderPlaced' => $totalOrderPlaced,
            'totalOrderCanceld' => $totalOrderCanceld,
            'totalOrderConfirmed' => $totalOrderConfirmed,
        ];
    }
}
