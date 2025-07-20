<?php

namespace App\Services;

use App\Models\Capsule;
use Illuminate\Http\Request;

class CapsuleService
{


    static function getPublicCapsules(Request $req) {

        $page_number = $req->page;
        $start_date = $req->start_date;
        $end_date = $req->end_date;
        $country = $req->country;
        $tags = $req->tags;


        $skip = ($page_number - 1) * 9;

        $capsules = Capsule::with("user:id,name", "tags:id,name")
                            ->where("type", "public")
                            ->where("reveal_date", "<", now())
                            // ->where("reveal_date", ">", $start_date)
                            // ->where("reveal_date", "<", $end_date)
                            // ->where("country", $country)
                            // ->skip($skip)
                            // ->limit(9)
                            ->get();

        if(!$capsules) return null;

        $total_capsules = Capsule::where("type", "public")
                            ->where("reveal_date", "<", now())
                            ->count();
        $total_pages = $total_capsules / 9;  
        
        $capsules[] = ceil($total_pages);
        return $capsules;
    }

    static function getSingleCapsules(string $id) {
        $capsule = Capsule::with('user:id,name', "tags:id,name")
                            ->find($id);                            

        if(!$capsule) return null;
        return $capsule;
    }

    static function getUserCapsules(string $id){
        $capsules = Capsule::with('user:id,name', "tags:id,name")
                    ->where("user_id", $id)->where("is_surprise", 0)->get();
       
        if(!$capsules|| count($capsules) === 0) return null;
        return $capsules;
    }
}
