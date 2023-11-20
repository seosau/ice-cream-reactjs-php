<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
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
            'phone_number' => 'required|string|regex:/(0)[0-9]{9}/',
            'payment_method' => 'string|required',
            'address' => 'required|string',
            'products' => 'array',
            'user_id' => 'integer',
            'user_name' => 'string|required',
            'email' => 'string|email|required',
            'stock' => 'integer',
            'status' => 'string|nullable',
            'payment_status' => 'string|nullable'
        ];
    }
    public function messages(): array
    {
        return [
            'user_name.required' => 'The user name field is required.',
            'phone_number.required' => 'The phone number field is required.',
            'phone_number.regex' => 'Please enter a valid phone number.',
            'address.required' => 'The address field is required.',
            'email.required' => 'The email field is required.',
            'email.email' => 'Please enter a valid email address.',
        ];
    }
}
