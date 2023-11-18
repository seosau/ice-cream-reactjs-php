<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\User::class,'user_id');
            $table->foreignIdFor(\App\Models\Seller::class,'seller_id');
            $table->foreignIdFor(\App\Models\Product::class,'product_id');
            $table->string('name', 50);
            $table->string('phone_number', 10);
            $table->string('email', 50);
            $table->string('address',50);
            $table->string('payment_method',50);
            $table->integer('price')->unsigned();
            $table->integer('quantity');
            $table->string('status',50)->default('in progress');
            $table->string('payment_status', 100)->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
