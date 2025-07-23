<?php

namespace App\Services;

use App\Models\Capsule;
use ZipArchive;

class AddZipService
{
    static function getZippedFile(string $id){
        $fileName = "capsule_" . $id . ".zip";
        $path = storage_path("app/public/" . $fileName);

        $zip = new \ZipArchive();

        if($zip->open($path, \ZipArchive::CREATE | \ZipArchive::OVERWRITE) !== true) return null;

        $capsule = Capsule::find($id);

        if(!$capsule) return null;

        $text = "Title: " .  $capsule->title . "\n Message: " . $capsule->message;
        $zip->addFromString("capsule.txt", $text);

        $image = storage_path("app/public/{$capsule->image_url}");
        $zip->addFile($image, "images/" . basename($capsule->image_url));

        $audio = storage_path("app/public/{$capsule->audio_url}");
        $zip->addFile($audio, "audios/" . basename($capsule->audio_url));

        $zip->close();
    }
}
