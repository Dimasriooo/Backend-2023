<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;


class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        // jika data kosong  maka kirim status code 204
        if($students->isEmpty()){
            $data = [
                'message' => "Resource is empty",
            ];

            return response()->json($data, 204);
            
        }


        $data = [
            'message' => 'Get all Student',
            'data' => $students
        ];

        return response()->json($data, 200);
    }

    
    public function store(Request $request)
    {
        // validasi data request
        $request->validate([
            "nama"=> "required",
            "nim"=> "required",
            "email"=> "required",
            "jurusan"=> "required"
        ]);

        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request-> jurusan
        ];

        $student = Student::create($input);

        $data = [
            'message' => 'Data berhasil ditambahkan',
            'data' => $student,
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, $id){
        $student = Student::find($id);

            $student->update($request->all());

            $student->update([
            'nama' => $request->nama ?? $student->nama,
            'nim' => $request->nim ?? $student->nim,
            'email' => $request->email ?? $student->email,
            'jurusan' => $request-> jurusan ?? $student->jurusan
            ]);

        $data =[
            "message" => "Student is updated successfully",
            "data" => $student,
        ];

        return response()->json($data, 200);
    }

    public function destroy($id){
        $student = Student::find($id);
            if ($student) {
                //hapus student tersebut
                $student->delete();

                $data =[
                    'message" => "Student is deleted successfully",'
                ];

                return response()->json($data, 200);
            }
            else {
                $data = [
                    'message" => "Student not found",'
                ];
                
                return response()->json($data,404);
            }

            $student->delete();
            $data = [
                "massage" => "student is deleted successfully",
                "dataDeleted" => $student,
            ];

            return response()->json($data, 200);
    }  

    public function show($id)
    {
        //cari id student yang ingin didatpatkan
        $student = Student::find($id);

        if ($student) {
            $data = [
                'message' => 'Get detail student',
                "data" => $student
            ];
            //mengembalikan data json dan kode 200
            return response()->json($data, 200);
        } else {
        $data = [
            'message' => 'Student not found'
        ];
        //mengembalikan data json  dan kode 404
        return response()->json($data, 404);
        }
    }
}