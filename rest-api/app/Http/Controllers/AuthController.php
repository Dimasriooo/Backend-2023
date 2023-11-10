<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request){
        //menangkap inputan register
        $input = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ];

        $user = User::create($input);

        $data = [
            'message' => 'user is created successfully'
        ];

        return response()->json($data, 200);

    }
    //membuat fitur login
    public function login (Request $request) {
        //menangkap input user 
        $input =[
            'email' =>$request->email,
            'password' =>$request->password
        ];

        //melakukan authentikasi
        if (Auth::attempt($input)) {
            $token = Auth::user()->createtoken('auth_token');

            $data =[
                'message' => 'login successfully',
                'token' => $token->plainTextToken
            ];

            return response()->json($data, 200);
        } else{
            $data =[
                'message' => 'username or password incorrect',
            ];

            return response()->json($data, 401);
        }
    }
}
