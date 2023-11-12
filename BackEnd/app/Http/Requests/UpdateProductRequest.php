<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'seller_id' => 'exists:sellers,id',
            'name' => 'required|string',
            'price' => 'required|integer',
            'image' => 'required|string',
            'stock' => 'required|integer',
            'product_detail' => 'required|string',
            'status' => 'required|string'
        ];
    }
    public function messages(): array
    {
        return [
            'price.required' => 'price is required',
            'image.required' => 'image is required',
            'stock.required' => 'stock is required',
            'product_detail.required' => 'product_detail is required',
            'status.required' => 'status is required',
        ];
    }
}
