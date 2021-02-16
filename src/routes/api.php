<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GameController;
use App\Http\Controllers\HiscoreController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:sanctum')->get('/users/{user}', function (Request $request) {
    return $request->user();
});

// add the api game & hiscores routes into the group below once testing has finished
Route::middleware('auth:sanctum')->group( function() { 

    Route::post('/game', [GameController::class, 'playGame'] );

    Route::get('/hiscores', [HiscoreController::class, 'TopTenHiscores', ]);

    Route::get("/hiscores/{id}", [HiscoreController::class, 'myBank']);


});

