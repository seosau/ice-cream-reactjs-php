<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
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
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users,email',
            'password' => [
                'required',
                'confirmed',
                Password::min(8)->mixedCase()->numbers()->symbols(),   
            ],
        ];
    }
    public function messages(): array
{
    return [
        'name.required' => 'name is required',
        'email.required' => 'email is required',
        'email.email' => 'email must be a valid email address',
        'password.required' => 'password is required',
        'password.confirmed' => 'password field confirmation does not match',
        'password' => 'password must be at least 8 characters, one uppercase and one lowercase letter, one symbol, one number',
    ];
}
}
