CREATE DATABASE dates;

CREATE TABLE userdates (id SERIAL, moviename VARCHAR(50), moviedate VARCHAR(50), moviesnack VARCHAR(50));

INSERT INTO userdates ( moviename, moviedate, moviesnack ) VALUES ( 'Finding Nemo', 'Thursday at 7 PM', 'Twizzlers' );
INSERT INTO userdates ( moviename, moviedate, moviesnack ) VALUES ( 'Forrest Gump', 'Friday at 8 PM', 'Popcorn' );
INSERT INTO userdates ( moviename, moviedate, moviesnack ) VALUES ( 'Thor 2', 'Saturday at 7 PM', 'Snickers' );
