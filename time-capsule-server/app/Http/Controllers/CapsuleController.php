<?php

namespace App\Http\Controllers;

use App\Models\Capsule;
use Illuminate\Http\Request;
use App\Services\CapsuleService;
use App\Services\ResponseService;

class CapsuleController extends Controller
{
    static function getPublicCapsules(Request $req){
        $capsules = CapsuleService::getPublicCapsules($req);
        if(!$capsules) return ResponseService::response([], "No Capsules for this user", 404);
        return ResponseService::response($capsules, "Capsules Fetched successfully");
    }

    static function getSingleCapsules(string $id){
        $capsule = CapsuleService::getSingleCapsules($id);
        if(!$capsule) return ResponseService::response([], "Capsule not found", 404);
        return ResponseService::response($capsule);
    }


      static function getUserCapsules(string $id){
        $capsules = CapsuleService::getUserCapsules($id);
        if(!$capsules) return ResponseService::response([], "NO capsules for this user", 404);
        return ResponseService::response($capsules);
    }
}
