<?php

namespace App\Services;

use Directory;
use ZipArchive;
use App\Models\Tag;
use Ramsey\Uuid\Uuid;
use App\Models\Capsule;
use Illuminate\Http\Request;
use App\Services\MailService;
use App\Services\AddZipService;
use App\Services\FileHandleService;
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
            
            $position = Location::get("185.33.111.200");           

            $image = FileHandleService::base64_to_image($req->image_url);
            $audio = FileHandleService::base64_to_audio($req->audio_url);

            $token = null;
            if($req->type === "unlisted") $token = uuid::uuid4()->toString();

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
            $capsule->unique_token = $token;
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

            AddZipService::getZippedFile($capsule->id);

            // $res = MailService::sendAutoMail($req->user_id, $req->reveal_date);
            return $capsule;
        // } catch (\Throwable $th) {
        //     return null;
        // }
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

        $capsule->views += 1; 
        $capsule->save();
        return $capsule;
    }

    static function getUserCapsules(string $id)
    {
        $capsules = Capsule::with('user:id,name', "tags:id,name")
            ->where("user_id", $id)->get();

        if (!$capsules || count($capsules) === 0) return null;
        return $capsules;
    }
}
