<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MessageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
    protected function prepareForValidation()
    {
        $this->merge(
            ['user_id' => $this->user()->id]
        );
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'integer',
            'user_name' => 'string|required',
            'email' => 'string|email|required',
            'subject' => 'string|required',
            'message' => 'string|required',
        ];
    }
    public function messages(): array
    {
        return [
            'user_name.required' => 'The user name field is required.',
            'email.required' => 'The email field is required.',
            'subject.required' => 'The subject field is required.',
            'message.required' => 'The message field is required.',
            'email.email' => 'Please enter a valid email address.',
        ];
    }
}
