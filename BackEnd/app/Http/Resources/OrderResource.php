<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;
class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return 
        [
            "id"=> $this->id,
            "seller_id" => $this->seller_id,
            "product_id" => $this->product_id,
            'name' => $this->name,
            'price' => $this->price,
            'image_url' => $this->image ? URL::to($this->image) : null,
            'status' => $this->status,
            'updated_at' => $this->updated_at,
        ];
    }
}
