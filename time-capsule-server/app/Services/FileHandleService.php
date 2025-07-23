<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;


class FileHandleService
{


    static function base64_to_image($base64_string){
        $data = explode(",", $base64_string);
        
        if (!preg_match('/^data:(.*);base64,/', $base64_string, $matches)) {
            throw new \Exception('Invalid MIME type: ' . $base64_string);
        }
        $extension = explode('/', $matches[1])[1] ?? 'bin';

        $image = base64_decode($data[1]);

        
        $file_name = "image_" . now()->format("Ymd_His") . "." . $extension;
        $file_path = "images/" . $file_name;

        Storage::disk("public")->put($file_path, $image);

        return $file_path;

    }

      static function base64_to_audio($base64_string){
        $data = explode(",", $base64_string);

        if (!preg_match('/^data:(.*);base64,/', $base64_string, $matches)) {
            throw new \Exception('Invalid MIME type: ' . $base64_string);
        }
        $extension = explode('/', $matches[1])[1] ?? 'bin';

        $audio = base64_decode($data[1]);

        
        $file_name = "audio_" . now()->format("Ymd_His") . "." . $extension;
        $file_path = "audios/" . $file_name;

        Storage::disk("public")->put($file_path, $audio);

        return $file_path;

    }
}
