<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\Seller;


class AdminController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        $hasImg = array_key_exists("image", $data);
        if ($hasImg) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }
        $seller = Seller::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'image' =>  $hasImg ? $data['image'] : null,
        ]);
        $token = $seller->createToken('main')->plainTextToken;
        return response([
            'seller' => $seller,
            'token' => $token
        ]);
    }
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::guard('seller')->attempt($credentials)) {
            return response([
                'error' => 'The Provided credentials are not correct'
            ], 422);
        }
        $seller = Auth::guard('seller')->user();

        if ($seller instanceof Seller) {
            $token =  $seller->createToken('main')->plainTextToken;
        }
        return response([
            'user' => $seller,
            'token' =>  $token
        ]);
    }

    public function logout(Request $request)
    {
        $seller = Auth::guard('seller')->user();
        if ($seller instanceof Seller) {
            $request->$seller->currentAccessToken()->delete();
        }
        return response(
            [
                'sucess' => true,
            ]
        );
    }
    public function admin(Request $request)
    {

        return $request->user();
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
