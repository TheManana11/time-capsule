<?php

namespace App\Services;

class ResponseService
{
    static function response($data, $message = "Success", $code = 200){
        return response()->json([
            "message" => $message,
            "payload" => $data
        ], $code);
    }
}
