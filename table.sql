CREATE DATABASE dates;

CREATE TABLE userdates (id SERIAL, movieName VARCHAR(50), movieDate VARCHAR(50), movieSnack VARCHAR(50));

INSERT INTO userdates ( movieName, movieDate, movieSnack ) VALUES ( 'Finding Nemo', 'Thursday at 7 PM', 'Twizzlers' );
INSERT INTO userdates ( movieName, movieDate, movieSnack ) VALUES ( 'Forrest Gump', 'Friday at 8 PM', 'Popcorn' );
INSERT INTO userdates ( movieName, movieDate, movieSnack ) VALUES ( 'Thor 2', 'Saturday at 7 PM', 'Snickers' );
