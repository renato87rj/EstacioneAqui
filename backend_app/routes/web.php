<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('usuario', 'UsuarioController@index')->name('usuario');
Route::post('usuario', 'UsuarioController@store')->name('usuario');
Route::put('usuario/{id}', 'UsuarioController@store')->name('usuario');
Route::delete('usuario/{id}', 'UsuarioController@destroy')->name('usuario');