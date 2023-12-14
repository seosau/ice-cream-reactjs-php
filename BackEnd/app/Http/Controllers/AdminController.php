<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\UpdateProfileRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use App\Models\Admin;
use App\Models\Seller;
use App\Models\User;
use App\Models\Cart;
use App\Models\Order;
use App\Models\WishList;

class AdminController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::guard('admin')->attempt($credentials)) {
            return response([
                'error' => 'The Provided credentials are not correct',
            ], 422);
        }
        $admin = Auth::guard('admin')->user();

        if ($admin instanceof Admin) {
            $token = $admin->createToken('main')->plainTextToken;
        }
        return response([
            'user' =>  $admin,
            'token' =>  $token
        ]);
    }
    public function update(UpdateProfileRequest $request)
    {
        $credentials = $request->validated();
        $user = $request->user();
        if (!Hash::check($credentials['old_password'], $user->password)) {
            return response([
                'error' => 'The Provided old password are not correct'
            ], 422);
        }
        if (isset($credentials['image'])) {
            $relativePath = $this->saveImage($credentials['image']);
            $credentials['image'] = $relativePath;
            if ($user->image) {
                $absolutePath = public_path($user->image);
                File::delete($absolutePath);
            }
        }
        $user->update([
            ...$credentials,
            'password' => bcrypt($credentials['password'])
        ]);
        return response(
            [
                'id' =>  $user->id,
                'name' =>  $user->name,
                'email' =>  $user->email,
                'image_url' =>  $user->image ? URL::to($user->image) : null,
                'user_type' =>  $user->user_type,
            ]
        );
    }
    public function logout(Request $request)
    {
        $admin = Auth::guard('admin')->user();
        if ($admin instanceof Admin) {
            $request->$admin->currentAccessToken()->delete();
        }
        return response(
            [
                'sucess' => true,
            ]
        );
    }
    public function admin(Request $request)
    {
        $user = $request->user();
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'image_url' => $user->image ? URL::to($user->image) : null,
            'user_type' => $user->user_type,
        ];
    }
    public function addseller(RegisterRequest $request)
    {
        $data = $request->validated();

        if ($data['image']) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }
        $seller = Seller::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'image' =>  $data['image'] ? $data['image'] : null,
        ]);
        $token = $seller->createToken('main')->plainTextToken;
        return response([
            'seller' => $seller,
            'token' => $token
        ]);
    }
    public function getAllUsers(Request $request)
    {
        $user = $request->user();
        if ($user->user_type === 'client') {
            return abort(403, 'Unauthorized action');
        }
        $allUsersInfo = User::leftJoin('orders', 'users.id', '=', 'orders.user_id')
            ->groupBy('users.id', 'users.name', 'users.email', 'users.image')
            ->get([
                'users.id',
                'users.name',
                'users.email',
                'users.image',
                DB::raw('COALESCE(count(orders.product_id), 0) as orderQuantity')
            ]);
        return $allUsersInfo;
    }
    public function getAllSellers(Request $request)
    {
        $user = $request->user();
        if ($user->user_type === 'client') {
            return abort(403, 'Unauthorized action');
        }
        $allSellersInfo = Seller::leftJoin('orders', 'sellers.id', '=', 'orders.user_id')
            ->groupBy('sellers.id', 'sellers.name', 'sellers.email', 'sellers.image')
            ->get([
                'sellers.id',
                'sellers.name',
                'sellers.email',
                'sellers.image',
                DB::raw('COALESCE(SUM(CASE WHEN orders.status = "delivered" THEN 1 ELSE 0 END), 0) as orderQuantity')
            ]);
        return   $allSellersInfo;
    }
    public function deleteUser(Request $request, $user_id)
    {
        $user =  $request->user();
        if ($user->user_type === 'admin') {
            User::where('id', $user_id)->delete();
            WishList::where('user_id', $user_id)->delete();
            Cart::where('user_id', $user_id)->delete();
            Order::where('user_id', $user_id)->delete();
            return [200, 'delete user success'];
        }
        return abort(403, 'Unathorized action');
    }
    private function saveImage($image)
    {
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            $image = substr($image, strpos($image, ',') + 1);
            $type = strtolower($type[1]);

            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('invalid image type');
            }

            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);
            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }
        $dir = 'images/';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;
        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }

        file_put_contents($relativePath, $image);
        return $relativePath;
    }
}
