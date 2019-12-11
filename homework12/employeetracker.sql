DROP DATABASE IF EXISTS Employee_tracker_db;

CREATE DATABASE Employee_tracker_db;


USE Employee_tracker_db;

CREATE TABLE department (
id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
name VARCHAR(30)
);

CREATE TABLE employee_role (
id  int AUTO_INCREMENT NOT NULL PRIMARY KEY,
title  VARCHAR(30),
salary DECIMAL (6,2),
department_id INT 
);

CREATE TABLE employee (
id  INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
first_name  VARCHAR(30), 
last_name  VARCHAR(30),
role_id INT,
manager_id  INT NULL
);

