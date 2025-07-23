<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ResponseService;
use App\Services\AuthService;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = AuthService::login($request);
        if (!$user) return ResponseService::response([], "Invalid email or password", 401);

        return ResponseService::response($user, "User Logged in Successfully");
    }


    public function register(Request $request)
    {
        $user = AuthService::register($request);
        if (!$user) return ResponseService::response([], "Invalid Entries: Missing values or Email already exists or email format is wrong or password is less than 6 characters", 400);
        return ResponseService::response($user, "User registered Successfully", 201);
    }

    public function logout()
    {
        $response = AuthService::logout();
        if (!$response) return ResponseService::response([], "Failed to logout user", 500);
        return ResponseService::response([], "Logged out successfully");
    }
}
