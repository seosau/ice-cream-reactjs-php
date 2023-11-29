<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\AdminController;
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

Route::middleware('auth:sanctum')->prefix('/')->group(function () {
    Route::get('/me', [ClientController::class, 'me']);
    Route::post('/updateprofile', [ClientController::class, 'update']);
    Route::get('/quantitywishlists', [WishListController::class, 'getQuantity']);
    Route::apiResource('/wishlists', WishListController::class);
    Route::get('/quantityCartItems', [CartController::class, 'getQuantity']);
    Route::apiResource('/cart', CartController::class);
    Route::apiResource('/order', OrderController::class);
    Route::apiResource('/message', MessageController::class);
});
Route::prefix('/')->group(function () {
    Route::post('/register', [ClientController::class, 'register']);
    Route::post('/login', [ClientController::class, 'login']);
    Route::post('/logout', [ClientController::class, 'logout']);
    Route::get('/menu', [ProductController::class, 'index']);
    Route::get('/menu/{productId}', [ProductController::class, 'getProductById']);
    Route::get('/viewproduct', [ProductController::class, 'sortProduct']);
});

Route::prefix('/admin')->group(function () {
    Route::post('/register', [AdminController::class, 'register']);
    Route::post('/login', [AdminController::class, 'login']);
    Route::post('/logout', [AdminController::class, 'logout']);
});

Route::middleware('auth:sanctum')->prefix('/admin')->group(function () {
    Route::get('/', [AdminController::class, 'admin']);
    Route::post('/updateprofile', [AdminController::class, 'update']);
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::get('/viewproduct', [ProductController::class, 'sortProduct']);
    Route::get('/useraccount', [AdminController::class, 'getAllUsers']);
    Route::apiResource('/product', ProductController::class);
});
