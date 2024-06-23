<?php

$data = file_get_contents("test.json");
$mhs = json_decode($data, true);

print_r($mhs);

echo $mhs[0]["mentor"]["mentor1"];