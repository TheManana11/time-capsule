<?php

namespace App\Services;

use App\Models\Capsule;
use App\Models\Tag;
use Directory;
use Illuminate\Http\Request;
use Stevebauman\Location\Facades\Location;
use ZipArchive;

class CapsuleService
{

    static function addCapsules(Request $req)
    {
        try {
            $req->validate([
                'user_id' => 'required|integer',
                'title' => 'required|string',
                'message' => 'required|string',
                'type' => 'required|integer',
                'emoji' => 'required|string',
                'color' => 'required|string',
                'tag1' => 'required|string',
                'tag2' => 'required|string',
                'tag3' => 'required|string',
                'is_surprise' => 'required|boolean',
                'reveal_date' => 'required|date',
            ]);
            $ip = $req->ip();
            $position = Location::get("8.8.8.8");


            function base64_to_jpeg($base64_string)
            {

                $folder = public_path("images");
                $data = explode(',', $base64_string);

                $image = base64_decode($data[1]);

                $file_name = now()->format("Ymd_His") . ".png";
                $file_path = $folder . "/" . $file_name;

                file_put_contents($file_path, $image);

                return "images/" . $file_name;
            }

            $image = base64_to_jpeg($req->image_url);

            function base64_to_audio($base64_string, $extension = 'mp3')
            {

                $folder = public_path("audio");
                $data = explode(',', $base64_string);

                $audio = base64_decode($data[1]);

                $file_name = now()->format("Ymd_His") . ".mp3";
                $file_path = $folder . "/" . $file_name;

                file_put_contents($file_path, $audio);

                return "audio/" . $file_name;
            }

            $audio = base64_to_audio($req->audio_url);


            $capsule = new Capsule();

            $capsule->user_id = $req->user_id;
            $capsule->title = $req->title;
            $capsule->message = $req->message;
            $capsule->image_url = $image;
            $capsule->audio_url = $audio;
            $capsule->type = $req->type;
            $capsule->emoji = $req->emoji;
            $capsule->color = $req->color;
            $capsule->is_surprise = $req->is_surprise;
            $capsule->reveal_date = $req->reveal_date;

            $capsule->ip_address = $ip;
            $capsule->country = $position->countryName;
            $capsule->city = $position->cityName;
            $capsule->latitude = $position->latitude;
            $capsule->longitude = $position->longitude;

            $capsule->save();

            $tag_1 = Tag::where("name", $req->tag1)->first();
            $tag_2 = Tag::where("name", $req->tag2)->first();
            $tag_3 = Tag::where("name", $req->tag3)->first();

            if ($tag_1) $capsule->tags()->attach($tag_1->id);
            if ($tag_2) $capsule->tags()->attach($tag_2->id);
            if ($tag_3) $capsule->tags()->attach($tag_3->id);

            return $capsule;
        } catch (\Throwable $th) {
            return null;
        }
    }


    static function getPublicCapsules(Request $req)
    {
        $capsules = Capsule::with("user:id,name", "tags:id,name")
            ->where("type", "public")
            ->where("reveal_date", "<", now())
            ->get();

        if (!$capsules) return null;
        return $capsules;
    }

    static function getSingleCapsules(string $id)
    {
        $capsule = Capsule::with('user:id,name', "tags:id,name")
            ->find($id);

        if (!$capsule) return null;
        return $capsule;
    }

    static function getUserCapsules(string $id)
    {
        $capsules = Capsule::with('user:id,name', "tags:id,name")
            ->where("user_id", $id)
            ->where(function ($query) {
                $query->where("is_surprise", 0)
                    ->orWhere(function ($query_2) {
                        $query_2->where("is_surprise", 1)->where("reveal_date", "<=", now());
                    });
            })->get();



        if (!$capsules || count($capsules) === 0) return null;
        return $capsules;
    }


    static function zipCapsule(string $id)
    {
        // try {
        $capsule = Capsule::find($id);

        $file_name = "capsule" . $capsule->id . ".zip";
        $zip_file_path = storage_path('app/public/' . $file_name);

        $zip = new ZipArchive();
        $result = $zip->open($zip_file_path, ZipArchive::CREATE);

        if ($result !== true) {
            return $result;
        }

        $content = "Title: " . $capsule->title . "\r\n" .  "Message: " . $capsule->message . "\r\n" .
            "set date: " . $capsule->created_at . "\r\n" .
            "reveal_date: " . $capsule->reveal_date . "\r\n";

        $zip->addFromString("content.txt", $content);

        if ($capsule->image_url) {
            $image_path = storage_path("app/public/images/" . $capsule->image_url);
            if (file_exists($image_path)) {
                $zip->addFile($image_path, "image/" . basename($image_path));
            }
        }

        if ($capsule->audio_url) {
            $audio_path = storage_path("app/public/audios/" . $capsule->audio_url);
            if (file_exists($audio_path)) {
                $zip->addFile($audio_path, "audio/" . basename($audio_path));
            }
        }

        $zip->close();

        return $zip_file_path;
        // } catch (\Throwable $th) {
        //    return 2;
        // }
    }
}
