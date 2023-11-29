<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class UpdateProfileRequest extends FormRequest
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
            'email' => 'required|string|email',
            'password' => [
                'required',
                'confirmed',
                Password::min(8)->mixedCase()->numbers()->symbols(),
            ],
            'old_password' => 'required',
            'image' => 'nullable|string'
        ];
    }
    public function messages(): array
    {
        return [
            'name.required' => 'name field is required',
            'email.required' => 'email field is required',
            'email.email' => 'email must be a valid email address',
            'password.required' => 'password field is required',
            'password.confirmed' => 'password field confirmation does not match',
            'password' => 'password must be at least 8 characters, one uppercase and one lowercase letter, one symbol, one number',
            'old_password.required' => 'old password is required'
        ];
    }
}
