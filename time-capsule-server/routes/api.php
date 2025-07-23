<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CapsuleController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ContactController;



Route::group(["prefix" => "guest"], function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

    Route::get('/capsules', [CapsuleController::class, 'getPublicCapsules']);
    Route::get('/capsules/{id}', [CapsuleController::class, 'getSingleCapsules']);

    Route::post('/contact', [ContactController::class, 'contactUs']);
});


Route::group(["prefix" => "user"], function () {
    Route::group(["middleware" => "auth:api"], function () {
        Route::get('/users/{id}', [UserController::class, 'getUser']);
        Route::post('/update-user/{id}', [UserController::class, 'updateUser']);
        
        Route::get('/logout', [AuthController::class, 'logout']);
        
        Route::post('/capsules', [CapsuleController::class, 'addCapsules']);
        Route::get('/user-capsules/{id}', [CapsuleController::class, 'getUserCapsules']);
    });
});
