<?php

# membuat class Animal
class Animal
{
    private $animals = [];

    public function __construct()
    {
        $this->animals = ["Ayam", "Ikan"];
    }

    public function index()
    {
        $no = 0;
        foreach ($this->animals as $animal) {
            echo "\n" . ++$no . "." . $animal;
            
        };
    }

    public function store($data)
    {
        array_push($this->animals, $data);
    }

    public function update($index, $data)
    {
        $this->animals[$index] = $data;
    }


    public function destroy($index)
    {
        unset($this->animals[$index]);
    }
}

# membuat object
# kirimkan data hewan (array) ke constructor
$animal = new Animal([]);

echo "Index - Menampilkan seluruh hewan <br>";
$animal->index();
echo "<br>";

echo "Store - Menambahkan hewan baru <br>";
$animal->store('burung');
$animal->index();
echo "<br>";

echo "Update - Mengupdate hewan <br>";
$animal->update(0, 'Kucing Anggora');
$animal->index();
echo "<br>";

echo "Destroy - Menghapus hewan <br>";
$animal->destroy(1);
$animal->index();
echo "<br>";


?>