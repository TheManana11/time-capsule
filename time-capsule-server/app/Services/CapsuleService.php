<?php

namespace App\Services;

use App\Models\Capsule;
use Illuminate\Http\Request;

class CapsuleService
{


    static function getPublicCapsules(Request $req) {

        $page_number = $req->page;
        $skip = ($page_number - 1) * 6;

        $capsules = Capsule::with("user:id,name", "tags:id,name")
                            ->where("type", "public")
                            ->where("reveal_date", "<", now())
                            ->skip($skip)
                            ->limit(6)
                            ->get();

        if(!$capsules) return null;

        $total_capsules = Capsule::where("type", "public")
                            ->where("reveal_date", "<", now())
                            ->count();
        $capsules["total"] = $total_capsules;                    
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
