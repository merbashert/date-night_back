<?php
$dbconn = pg_connect("host=localhost dbname=dates");



class Date {
    public $id;
    public $moviename;
    public $moviedate;
    public $moviesnack;
    public function __construct($id, $moviename, $moviedate, $moviesnack) {
        $this->id = $id;
        $this->moviename = $moviename;
        $this->moviedate = $moviedate;
        $this->moviesnack = $moviesnack;
    }
}

class Dates {

    //This is the create function
      static function create($date){
      $query = "INSERT INTO userdates (moviename, moviedate, moviesnack) VALUES ($1, $2, $3)";
    }

    static function all(){
        //create an empty array
        $dates = array();

        //query the database
        $results = pg_query("SELECT * FROM userdates");

        $row_object = pg_fetch_object($results);
        while($row_object){

          $new_date = new Date(
            intval($row_object->id),
            $row_object->moviename,
            $row_object->moviedate,
            $row_object->moviesnack
          );
          $dates[] = $new_date; //push new date object into $dates array

          $row_object = pg_fetch_object($results);
       }

        //return the array of Dates
        return $dates;
    }
}



?>
