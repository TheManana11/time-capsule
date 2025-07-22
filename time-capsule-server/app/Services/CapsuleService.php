<?php

namespace App\Services;

use App\Models\Capsule;
use App\Models\Tag;
use Directory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Stevebauman\Location\Facades\Location;

class CapsuleService
{

    static function addCapsules(Request $req)
    {
        // try {
            $req->validate([
                'user_id' => 'required|integer',
                'title' => 'required|string',
                'message' => 'required|string',
                'type' => 'required|string',
                'emoji' => 'required|string',
                'color' => 'required|string',
                'tag1' => 'required|string',
                'tag2' => 'required|string',
                'tag3' => 'required|string',
                'reveal_date' => 'required|date',
            ]);
            $ip = $req->ip();
            $position = Location::get("8.8.8.8");


            function base64_to_image($base64_string)
            {
                $data = explode(',', $base64_string);

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

            $image = base64_to_image($req->image_url);


            function base64_to_audio($base64_string)
            {
                $data = explode(',', $base64_string);


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
    //     } catch (\Throwable $th) {
    //         return null;
    //     }
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
}
