<?php
$dbconn = pg_connect("host=localhost dbname=dates");



class Date {
    public $id;
    public $movieName;
    public $movieDate;
    public $movieSnack;
    public function __construct($id, $movieName, $movieDate, $movieSnack) {
        $this->id = $id;
        $this->movieName = $movieName;
        $this->movieDate = $movieDate;
        $this->movieSnack = $movieSnack;
    }
}

class Dates {
    static function all(){
        //create an empty array
        $dates = array();

        //query the database
        $results = pg_query("SELECT * FROM userdates");

        $row_object = pg_fetch_object($results);
        while($row_object){

          $new_date = new Date(//this creates a a new date
            $row_object->id,
            $row_object->movieName,
            $row_object->movieDate,
            $row_object->movieSnack
          );
          $dates[] = $new_date; //push new date object into $dates array

           $row_object = pg_fetch_object($results);
       }

        //return the array of Dates
        return $dates;
    }
}



?>
