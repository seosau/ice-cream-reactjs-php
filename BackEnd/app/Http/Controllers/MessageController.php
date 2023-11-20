<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\MessageRequest;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index()
    {
    }
    public function store(MessageRequest $messageRequest)
    {
        $data = $messageRequest->validated();
        Message::create($data);
    }
}
