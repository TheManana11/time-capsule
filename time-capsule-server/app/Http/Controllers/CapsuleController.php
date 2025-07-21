<?php

namespace App\Http\Controllers;

use App\Models\Capsule;
use Illuminate\Http\Request;
use App\Services\CapsuleService;
use App\Services\ResponseService;

class CapsuleController extends Controller
{

    static function addCapsules(Request $req){
        $capsule = CapsuleService::addCapsules($req);
        if(!$capsule) return ResponseService::response([], "Failed to add capsule", 500);
        return ResponseService::response($capsule, "Capsule added successfully", 201);
    }


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


     static function zipCapsule(string $id){
        $zip_file = CapsuleService::zipCapsule($id);
        if(!$zip_file) return ResponseService::response([], "Could not create zip file", 500);
        return response()->download($zip_file)->deleteFileAfterSend(true);
    }
}
