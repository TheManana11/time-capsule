<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactServices
{
    static function contactUs(Request $req)
    {
        try {
            $req->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255',
                'message' => 'required|string'
            ]);

            Mail::raw($req->message, function ($message) use ($req) {
                $message->to("manana.ahmad.17@gmail.com")
                    ->subject("Contact us form message from " . $req->name);
                $message->from("manana.ahmad.17@gmail.com", "Time Capsule Website");
                $message->replyTo($req->email, $req->name);
            });
            return true;
        } catch (\Throwable $th) {
            return null;
        }
    }
}
