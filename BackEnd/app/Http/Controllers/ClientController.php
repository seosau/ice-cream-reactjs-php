<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\UpdateProfileRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\User;

class ClientController extends Controller
{

    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        $hasImg = array_key_exists("image", $data);
        if ($hasImg) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'image' =>  $hasImg ? $data['image'] : null,
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
        $user = Auth::user();
        if (!Auth::attempt($credentials)) {
            return response([
                'error' => 'The provided credentials are not correct'
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

        return response([
            'success' => true
        ]);
    }
    public function me(Request $request)
    {
        $user = $request->user();
        $data = User::leftJoin('orders', 'users.id', '=', 'orders.user_id')
            ->leftJoin('messages', 'users.id', '=', 'messages.user_id')
            ->where('users.id', $user->id)
            ->groupBy('users.id', 'users.name', 'users.email', 'users.image')
            ->select(
                DB::raw('COALESCE(count(orders.product_id), 0) as orderQuantity'),
                DB::raw('COALESCE(count(DISTINCT messages.id), 0) as messageQuantity')
            )
            ->first();
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'image_url' => $user->image ? URL::to($user->image) : null,
            'user_type' => $user->user_type,
            'totalOrders' =>  $data['orderQuantity'],
            'totalMessages' => $data['messageQuantity']
        ];
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
    public function searchProduct(Request $request, $keyword)
    {
        $sortBy = $request->input('sortBy');
        $order = $request->input('order');
        $data = Product::where('status', '=', 'active');
        // if ($sortBy === 'price') {
        //     $data->orderBy($sortBy, $order);
        // } elseif ($sortBy === 'status') {
        //     $data->where($sortBy, '=', $order);
        // }

        if ($sortBy === 'category') {
            $data->where('category', $order);
        } elseif ($sortBy === 'price') {
            $data->orderBy($sortBy, $order);
        } elseif ($sortBy === 'newest') {
            $data->orderBy('updated_at', 'desc');
        } elseif ($sortBy === 'bestsale') {
            $data->where('stock', '<', 10);
        }
        return ProductResource::collection(
            $data->where('name', 'like', "%{$keyword}%")
                ->paginate(12)
        );
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
