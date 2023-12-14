<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */

    public function authorize(): bool
    {
        return true;
    }
    // protected function prepareForValidation()
    // {
    //     $seller = Auth::guard('seller')->user();
    //     $this->merge(
    //         ['seller_id' =>  $seller->id]
    //     );
    // }
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
            'price' => 'required|numeric ',
            'category' => 'string',
            'image' => 'required|string',
            'stock' => 'required|integer',
            'product_detail' => 'required|string',
            'status' => 'required|string'
        ];
    }
    public function messages(): array
    {
        return [
            'name.required' => 'name is required',
            'price.required' => 'price is required',
            'image.required' => 'image is required',
            'stock.required' => 'stock is required',
            'product_detail.required' => 'product_detail is required',
            'status.required' => 'status is required',
        ];
    }
}
