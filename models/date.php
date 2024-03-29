<?php
// $dbconn = pg_connect("host=localhost dbname=dates");

$dbconn = null;
if(getenv('DATABASE_URL')){
    $connectionConfig = parse_url(getenv('DATABASE_URL'));
    $host = $connectionConfig['host'];
    $user = $connectionConfig['user'];
    $password = $connectionConfig['pass'];
    $port = $connectionConfig['port'];
    $dbname = trim($connectionConfig['path'],'/');
    $dbconn = pg_connect(
        "host=".$host." ".
        "user=".$user." ".
        "password=".$password." ".
        "port=".$port." ".
        "dbname=".$dbname
    );
} else {
    $dbconn = pg_connect("host=localhost dbname=phpapi");
}

class Date {
    public $id;
    public $moviename;
    public $moviedate;
    public $moviesnack;
    public $movieposter;
    public function __construct($id, $moviename, $moviedate, $moviesnack, $movieposter) {
        $this->id = $id;
        $this->moviename = $moviename;
        $this->moviedate = $moviedate;
        $this->moviesnack = $moviesnack;
        $this->movieposter = $movieposter;
    }
}

class Dates {

    // This is the create function
      static function create($date){
      $query = "INSERT INTO userdates (moviename, moviedate, moviesnack, movieposter) VALUES ($1, $2, $3, $4)";
      $query_params = array($date->moviename, $date->moviedate, $date->moviesnack, $date->movieposter); //add this array
      pg_query_params($query, $query_params); //pass the query and the params to pg_query_params
      return self::all(); //find all dates and return them

    }

    //This is the update function
    static function update($updated_date){
    $query = "UPDATE userdates SET moviename = $1, moviedate = $2, moviesnack = $3, movieposter = $4 WHERE id = $5";
    $query_params = array($updated_date->moviename, $updated_date->moviedate, $updated_date->moviesnack, $updated_date->movieposter, $updated_date->id);
    $result = pg_query_params($query, $query_params);

    return self::all();
  }

    //This is the function used to delete an object
    static function delete($id){
    $query = "DELETE FROM userdates WHERE id = $1";
    $query_params = array($id);
    $result = pg_query_params($query, $query_params);

    return self::all();
  }

    static function all(){
        //create an empty array
        $dates = array();

        //query the database
        $results = pg_query("SELECT * FROM userdates ORDER BY moviename");

        $row_object = pg_fetch_object($results);
        while($row_object){

          $new_date = new Date(
            intval($row_object->id),
            $row_object->moviename,
            $row_object->moviedate,
            $row_object->moviesnack,
            $row_object->movieposter
          );
          $dates[] = $new_date; //push new date object into $dates array

          $row_object = pg_fetch_object($results);
       }

        //return the array of Dates
        return $dates;
    }
}



?>
