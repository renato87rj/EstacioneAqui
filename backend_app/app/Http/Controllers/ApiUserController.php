<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use Auth;

class ApiUserController extends Controller
{
    public $successStatus = 200;

    public function login(Request $request)
    {
        // dd($request->all());
        if(Auth::attempt(['email' => request('email'), 'senha' => request('senha')]))
        {
            $user = Auth::user();
            $token = $user->createToken('myApp')->accessToken();
            //Passport::tokensExpireIn(now()->addDays(15));
            //Passport::refreshTokensExpireIn(now()->addDays(30));
            Passport::tokensExpireIn(Carbon::now()->addDays(15));

            return response()->json(['status' => 'ok', 'token' => $token], $this->successStatus);
        }
        else
        {
            return response()->json(['status' => 'error', 'message' => 'Não autorizado'], 401);
        }
    }

    public function register()
    {
        $err_message = '';
        $user = new User;
        $nome = request('nome');

        if($nome == null or $nome == '')
        {
            $err_message = 'Nome não pode ser vazio';
        }
        else
        {
            $email = request('email');

            if($email == null or $email == '')
            {
                $user->email = $email;
                $err_message = 'O email não pode ser vazio';
            }
            else
            {
                $senha = request('senha');

                if($senha == null or $senha == '')
                {
                    $user->senha = $senha;
                    $err_message = 'A senha não pode ser vazia';
                }
                else
                {
                    $user->nome = request('nome');
                    $user->email = request('email');
                    $user->senha = Hash::make(request('senha'));
                    $user->save();

                    return response()->json(['status' => 'ok'], $this->successStatus);
                }
            }
        }

        return response()->json(['status'=>'error', 'message'=>$err_message], 401);
    }
}
