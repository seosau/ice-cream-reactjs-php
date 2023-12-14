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
                "id" => $this->id,
                "seller_id" => $this->seller_id,
                'seller_name' => $this->seller_name,
                "product_id" => $this->product_id,
                'user_name' => $this->name,
                'product_name' => $this->product_name,
                'price' => $this->price,
                'image_url' => $this->image ? URL::to($this->image) : null,
                'status' => $this->status,
                'quantity' => $this->quantity,
                'stock' => $this->stock,
                'address' => $this->address,
                'phone_number' => $this->phone_number,
                'email' => $this->email,
                'payment_method' => $this->payment_method,
                'payment_status' => $this->payment_status,
                'date' => $this->updated_at->format('d-m-Y H:i:s'),
            ];
    }
}
