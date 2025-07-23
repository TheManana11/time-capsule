<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ContactServices;
use App\Services\ResponseService;

class ContactController extends Controller
{
    static function contactUs(Request $req){
        $res = ContactServices::contactUs($req);
        if(!$res) return ResponseService::response([], "Failed to send email", 400);
        return ResponseService::response([], "Email sent successfully", 200);
    }
}
