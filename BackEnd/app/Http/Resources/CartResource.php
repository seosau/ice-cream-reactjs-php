<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;
class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "cart_id" => $this->cartId,
            "product_id"=> $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'stock' => $this->stock,
            'image_url' => $this->image ? URL::to($this->image) : null,
            'quantity' => $this->quantity,
            'seller_id' => $this->seller_id,
        ];
    }
}
