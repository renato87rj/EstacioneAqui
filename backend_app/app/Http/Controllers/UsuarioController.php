<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return $request->user();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed'
        ]);
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        $user->save();
        return response()->json([
            'message' => 'Sucesso!'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',            
        ]);

        $credentials = request(['email', 'password']);

        if(!Auth::guard('web')->attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);

        // $user = $request->user();
        // $tokenResult = $user->createToken('Personal Access Token');
        // $token = $tokenResult->token;

        // if ($request->remember_me)
        //     $token->expires_at = Carbon::now()->addWeeks(1);

        // $token->save();
        
        return response()->json([
            'message' => 'Sucesso',
            'usuario' => Auth::user()->name
        ]);
    }

    public function logout(Request $request)
    {
        // $request->user()->token()->revoke();
        // return response()->json([
        //     'message' => 'Successfully logged out'
        // ]);
    }
}
