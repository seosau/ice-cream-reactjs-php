<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Seller;
use App\Models\Product;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $totalProducts = Product::query()->where("seller_id", $user->id)->count();
        $totalActiveProducts = Product::query()->where("seller_id", $user->id)->where("status", "=", "active")->count();
        $totalIactiveProducts = Product::query()->where("seller_id", $user->id)->where("status", "=", "inactive")->count();
        $totalUserAccounts = User::query()->count();
        $totalSellerAccounts = Seller::query()->count();
        return [
            'totalProducts' => $totalProducts,
            'totalActiveProducts' => $totalActiveProducts,
            'totalIactiveProducts' => $totalIactiveProducts,
            'totalUserAccounts' =>  $totalUserAccounts,
            'totalSellerAccounts' => $totalSellerAccounts,
        ];
    }
}
