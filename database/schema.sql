DROP DATABASE IF EXISTS known;

CREATE DATABASE known;

USE known;

CREATE TABLE companies (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < database/schema.sql
 *  to create the database and the tables.
