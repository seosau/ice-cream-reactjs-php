<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;
class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=> $this->id,
            "seller_id" => $this->seller_id,
            'name' => $this->name,
            'price' => $this->price,
            'image_url' => $this->image ? URL::to($this->image) : null,
            'product_detail' => $this->product_detail,
            'stock' => $this->stock,
            'status' => $this->status,
        ];
    }
}
