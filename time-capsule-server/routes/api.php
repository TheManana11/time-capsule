<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::group(["middleware" => "auth:api"], function () {
    Route::get('/users/{id}', [UserController::class, 'getUser']);
    Route::post('/update-user/{id}', [UserController::class, 'updateUser']);
    Route::get('/logout', [AuthController::class, 'logout']);
});





Route::get('/capsules/{public}', ['UserController', 'getPublicCapsules']);
Route::get('/capsules/{user_id}', ['UserController', 'getUserCapsules']);
Route::post('/capsule', ['UserController', 'addCapsule']);
