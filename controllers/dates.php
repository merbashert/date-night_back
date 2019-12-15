<?php
header('Content-Type: application/json');


include_once __DIR__ . '/../models/date.php';




if($_REQUEST['action'] === 'index'){
  echo json_encode(Dates::all());
} else if ($_REQUEST['action'] === 'post'){ //add this for post requests
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body); //change the request body from a JSON string into a PHP object
  $new_date = new Date(null, $body_object->moviename, $body_object->moviedate, $body_object->moviesnack); //create a new Person from $body_object
  $all_dates = Dates::create($new_date); //pass $new_date off to Dates, so it can add the data to the db
  echo json_encode($all_dates);
} else if ($_REQUEST['action'] === 'update'){
    $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);
    $updated_date = new Date($_REQUEST['id'], $body_object->moviename, $body_object->moviedate, $body_object->moviesnack);
    $all_dates = Dates::update($updated_date);
    echo json_encode($all_dates);
} else if ($_REQUEST['action'] === 'delete'){
    $all_dates = Dates::delete($_REQUEST['id']);
    echo json_encode($all_dates);
}

 ?>
