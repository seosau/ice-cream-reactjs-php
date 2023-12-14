<?php

use App\Http\Controllers\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\SellerController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\WishListController;

// header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length');
// header('Access-Control-Allow-Origin: *');
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// *********** Route for user *******************
Route::middleware(['auth:sanctum', 'role:client'])->prefix('/')->group(function () {
    Route::get('/me', [ClientController::class, 'me']);
    Route::post('/updateprofile', [ClientController::class, 'update']);
    Route::get('/quantitywishlists', [WishListController::class, 'getQuantity']);
    Route::apiResource('/wishlists', WishListController::class);
    Route::get('/quantityCartItems', [CartController::class, 'getQuantity']);
    Route::apiResource('/cart', CartController::class);
    Route::apiResource('/order', OrderController::class)->names([
        'index' => 'client.order.index',
        'store' => 'client.order.store',
        'show' => 'client.order.show',
        'update' => 'client.order.update',
        'destroy' => 'client.order.destroy',
    ]);
    Route::post('/message', [MessageController::class,'store']);
});
Route::prefix('/')->group(function () {
    Route::post('/register', [ClientController::class, 'register']);
    Route::post('/login', [ClientController::class, 'login']);
    Route::post('/logout', [ClientController::class, 'logout']);
    Route::get('/menu', [ProductController::class, 'index']);
    Route::get('/menu/{productId}', [ProductController::class, 'getProductById']);
    Route::get('/viewproduct', [ProductController::class, 'sortProduct']);
    Route::get('/searchproduct/{keyword}', [ClientController::class, 'searchProduct']);
});
// *********** Route for seller *******************
Route::prefix('/seller')->group(function () {
    Route::post('/login', [SellerController::class, 'login']);
    Route::post('/logout', [SellerController::class, 'logout']);
});

Route::middleware(['auth:sanctum', 'role:seller'])->prefix('/seller')->group(function () {
    Route::get('/', [SellerController::class, 'seller']);
    Route::post('/updateprofile', [SellerController::class, 'update']);
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::get('/viewproduct', [ProductController::class, 'sortProduct']);
    Route::get('/useraccount', [SellerController::class, 'getAllUsers']);
    Route::apiResource('/product', ProductController::class)->names([
        'index' => 'seller.product.index',
        'store' => 'seller.product.store',
        'show' => 'seller.product.show',
        'update' => 'seller.product.update',
        'destroy' => 'seller.product.destroy',
    ]);
    Route::apiResource('/order', OrderController::class)->names([
        'index' => 'seller.order.index',
        'update' => 'seller.order.update',
        'store' => 'seller.order.store',
        'show' => 'seller.order.show',
        'destroy' => 'seller.order.destroy'
    ]);
    Route::apiResource('/message',MessageController::class)->names([
        'index' => 'seller.message.index',
        'update' => 'seller.message.update',
        'store' => 'seller.message.store',
        'show' => 'seller.message.show',
        'destroy' => 'seller.message.destroy'
    ]);
});
// *********** Route for admin *******************
Route::prefix('/admin')->group(function () {
    Route::post('/login', [AdminController::class, 'login']);
    Route::post('/logout', [AdminController::class, 'logout']);
});

Route::middleware(['auth:sanctum', 'role:admin'])->prefix('/admin')->group(function () {
    Route::get('/', [AdminController::class, 'admin']);
    Route::post('/updateprofile', [AdminController::class, 'update']);
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::get('/viewproduct', [ProductController::class, 'sortProduct']);
    Route::get('/useraccount', [AdminController::class, 'getAllUsers']);
    Route::get('/staffaccount', [AdminController::class, 'getAllSellers']);

    Route::apiResource('/product', ProductController::class)->names([
        'index' => 'admin.product.index',
        'show' => 'admin.product.show',
        'destroy' => 'admin.product.destroy',
    ]);
    Route::apiResource('/order', OrderController::class)->names([
        'index' => 'admin.order.index',
        'update' => 'admin.order.update',
        'store' => 'admin.order.store',
        'show' => 'admin.order.show',
        'destroy' => 'admin.order.destroy'
    ]);
    Route::apiResource('/message',MessageController::class)->names([
        'index' => 'admin.message.index',
        'update' => 'admin.message.update',
        'store' => 'admin.message.store',
        'show' => 'admin.message.show',
        'destroy' => 'admin.message.destroy'
    ]);
    Route::delete('/deleteuser/{user_id}', [AdminController::class, 'deleteUser']);
    Route::post('/addstaff', [AdminController::class, 'addseller']);
});
