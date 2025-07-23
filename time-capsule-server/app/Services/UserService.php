<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class UserService
{
    static function getUser(string $id)
    {
        $user = User::find($id);
        return $user;
    }


    static function updateUser(Request $req, string $id)
    {
        $user = User::find($id);

        if ($req->filled(["old_password", "new_password", "confirm_password"])) {

            if (!Hash::check($req->old_password, $user->password)) return 1;
            if ($req->new_password !== $req->confirm_password) return 2;
            $user->password = Hash::make($req->new_password);
        }

        $user->name = $req->name ? $req->name : $user->name;
        $user->email = $req->email ? $req->email : $user->email;
        $user->country = $req->country ? $req->country : $user->country;
        $user->save();

        return $user;
    }
}
