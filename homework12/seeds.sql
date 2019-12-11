USE employee_tracker_db;

INSERT INTO department (name)
VALUES ("Project Management");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Audit");

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Business Analyst", "80000", 1);

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Sales Manager", "85000", 2);

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Audit Analyst", "75000", 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Thundup", "Tamang", "2", null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Wayne", "Thompson", "1", "1");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Anna", "Singh", "3", "1");



