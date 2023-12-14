<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
    protected $fillable = [
        'seller_id',
        'name',
        'price',
        'category',
        'image',
        'stock',
        'product_detail',
        'status',
    ];
}
