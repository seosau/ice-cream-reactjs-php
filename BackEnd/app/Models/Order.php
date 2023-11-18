<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $fillable = [
        'user_id',
        'seller_id',
        'product_id',
        'name',
        'phone_number',
        'email',
        'address',
        'payment_method',
        'price',
        'quantity',
        'status',
        'payment_status',
    ];
}
