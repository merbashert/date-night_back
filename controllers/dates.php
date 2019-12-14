<?php
header('Content-Type: application/json');

include_once __DIR__ . '/../models/date.php';




if($_REQUEST['action'] === 'index'){
    echo json_encode(Dates::all());
}

 ?>
