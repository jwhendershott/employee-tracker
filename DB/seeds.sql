use employee_trackerDB;

insert into department (name) values ("Accounting");
insert into department (name) values ("Mad Scientist");
insert into department (name) values ("Delivery");
insert into department (name) values ("Staff");

insert into role (title, salary, department_id) values ("Accountant", 55000, 1);
insert into role (title, salary, department_id) values ("Mad Scientist", 120000, 2);
insert into role (title, salary, department_id) values ("Delivery Boy", 40000, 3);
insert into role (title, salary, department_id) values ("Bender", 45000, 3);
insert into role (title, salary, department_id) values ("Starship Pilot", 80000, 3);
insert into role (title, salary, department_id) values ("Doctor", 20000, 4);

insert into employee (first_name, last_name, role_id) values ("Hermes", "Conrad", 1);
insert into employee (first_name, last_name, role_id) values ("Professor", "Farnsworth", 2);
insert into employee (first_name, last_name, role_id) values ("Philip", "Fry", 3);
insert into employee (first_name, last_name, role_id) values ("Bender", "Rodriguez", 4);
insert into employee (first_name, last_name, role_id) values ("Leela", "Fry", 5);
insert into employee (first_name, last_name, role_id) values ("Doctor", "Zoidberg", 6);