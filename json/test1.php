<?php

// $mhs = [ 
//    [
//       "name" => "Ego Irfandi",
//       "nim" => "230202007",
//       "email" => "name.fandi07@proton.me"
//    ],
//    [
//       "name" => "Yuki Nagato",
//       "nim" => "230102008",
//       "email" => "name.yuki07@proton.me"
//    ],
// ];


class Database {
    private $pdo;

    public function __construct($host, $db, $user, $pass) {
        $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        try {
            $this->pdo = new PDO($dsn, $user, $pass, $options);
        } catch (\PDOException $e) {
            throw new \PDOException($e->getMessage(), (int)$e->getCode());
        }
    }

    public function query($sql) {
        return $this->pdo->query($sql);
    }
}

class Mahasiswa {
    private $db;

    public function __construct(Database $db) {
        $this->db = $db;
    }

    public function getAllMahasiswa() {
        $stmt = $this->db->query("SELECT * FROM mahasiswa");
        return $stmt->fetchAll();
    }
}

// Penggunaan
$db = new Database("localhost", "db_ukt", "root", "");
$mahasiswaObj = new Mahasiswa($db);

$dataMahasiswa = json_encode($mahasiswaObj->getAllMahasiswa());
echo $dataMahasiswa;