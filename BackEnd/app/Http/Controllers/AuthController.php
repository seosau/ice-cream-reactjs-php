<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],  
            'password' => bcrypt($data['password']),
            'userImg' => $data['image']
        ]);
        $token = $user->createToken('main')->plainTextToken;
        return response([

            'user' => $user,
            'token' => $token
        ]);
    }
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'error' => 'The Provided credentials are not correct'
            ], 422);
        }
        $user = Auth::user();
        if ($user instanceof User) {
            $token = $user->createToken('main')->plainTextToken;
        }
        return response([

            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout(Request $request)
    {
        $user = Auth::user();
        if ($user instanceof User) {
            $request->$user->currentAccessToken()->delete();
        }
        return response(
            [
                'sucess' => true,
            ]);
    }
    public function me(Request $request){
        return $request->user();
    }
}
