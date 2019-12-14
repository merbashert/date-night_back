<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

include_once __DIR__ . '/../models/date.php';




if($_REQUEST['action'] === 'index'){
  echo json_encode(Dates::all());
}

 ?>
