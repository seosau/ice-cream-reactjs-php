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
            'price' => 'required|integer',
            'image' => 'required|string',
            'stock' => 'required|integer',
            'product_detail' => 'required|string',
            'status' => 'required|string'
        ];
    }
}
