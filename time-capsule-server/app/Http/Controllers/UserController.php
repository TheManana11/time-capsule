<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\UserService;
use App\Services\ResponseService;

class UserController extends Controller
{
    static function getUser(string $id)
    {
        $user = UserService::getUser($id);
        if (!$user) return ResponseService::response([], "User not found", 404);
        return ResponseService::response($user);
    }


    static function updateUser(Request $req, string $id)
    {
        $updated_user = UserService::updateUser($req, $id);
        if ($updated_user === 1) return ResponseService::response([], "Old password is wrong", 400);
        if ($updated_user === 2) return ResponseService::response([], "Please confirm your password right", 400);

        return ResponseService::response($updated_user, "User updated successfully");
    }
}
