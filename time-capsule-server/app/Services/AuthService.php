<?php

namespace App\Services;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use PhpParser\Node\Stmt\TryCatch;

class AuthService
{
    static function login(Request $request)
    {
        try {
            $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) return null;

        $user = Auth::user();
        $user->token = $token;

        return $user;

        } catch (\Throwable $th) {
            return null;
        }
    }


    static function register(Request $request)
    {
        try {
            $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'country' => 'required|string',
            'password' => 'required|string|min:6',
        ]);


        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->country = $request->country;
        $user->password = Hash::make($request->password);
        $user->save();

        $token = Auth::login($user);
        if (!$token) return null;

        $user->token = $token;
        return $user;

        } catch (\Throwable $th) {
            return null;
        }
    }

    static function logout()
    {
        try {
            Auth::logout();
            return true;
            
        } catch (\Throwable $th) {
            return null;
        }
    }
}
