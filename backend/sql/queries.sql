-- Create the database and tables
CREATE DATABASE IF NOT EXISTS notes_db;
USE notes_db;
CREATE TABLE IF NOT EXISTS notes_db.notes (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  content text NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into notes_db.notes (title, content) values ('Hola', 'Hello World');
insert into notes_db.notes (title, content) values ('Hola 2', 'Hello World 2');
update notes_db.notes set name = 'John Smith' where id = 1;


select * from notes_db.notes order by created_at desc;