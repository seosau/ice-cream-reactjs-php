<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\MessageRequest;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        if ($user->user_type === 'client') {
            return abort(403, 'Unauthorized action');
        }
        return Message::query()->get();
    }
    public function store(MessageRequest $messageRequest)
    {
        $data = $messageRequest->validated();
        Message::create($data);
    }

    public function destroy(Message $message, Request $request)
    {
        $user = $request->user();
        if ($user->user_type === 'client') {
            return abort(403, 'Unauthorized action');
        }
        $message->delete();
        return response('delete successfully', 204);
    }
}
