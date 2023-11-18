<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderRequest;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
    }
    public function store(OrderRequest $orderRequest)
    {
        $data = $orderRequest->validated();

        foreach ($data['products'] as $product) {
          print_r($product);
        }
    }
    public function update()
    {
    }
    public function show()
    {
    }
}
