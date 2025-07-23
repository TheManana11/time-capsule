<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Mail;

class MailService
{
   static function sendAutoMail(string $id, $reveal_date)
    {
        try {

            $user = User::find($id);
            if(!$user) return null;

            $message_text = "Hey " . $user->name . ", your capsule is now open!!!";

            Mail::later(
                $reveal_date,
                function ($message) use ($user, $message_text){
                    $message->to($user->email)
                        ->subject("Reveal Date Reminder from Time Capsule Website")
                        ->from("manana.ahmad.17@gmail.com", "Time Capsule Website")
                        ->replyTo($user->email, $user->name)
                        ->setBody($message_text, "text/plain");   
                }
            );


            // Mail::raw($message, function ($message) use ($user) {
            //         $message->to($user->email)
            //             ->subject("Reveal Date Reminder from Time Capsule Website");
            //         $message->from("manana.ahmad.17@gmail.com", "Time Capsule Website");
            //         $message->replyTo($user->email, $user->name);
            //     });
                return true;
        } catch (\Throwable $th) {
            return null;
        }
    }
}
