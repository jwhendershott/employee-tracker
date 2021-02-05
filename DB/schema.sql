create database employee_trackerDB;

use employee_trackerDB;

create table department(
	id int auto_increment primary key,
    name varchar(30) not null
);

create table role(
	id int auto_increment primary key,
    title varchar(30) not null,
    salary decimal not null,
    department_id int not null,
    foreign key (department_id) references department(id)
);

create table employee(
	id int auto_increment primary key,
    first_name varchar(30) not null,
	last_name varchar(30) not null,
	role_id int not null,
	manager_id int not null,
    foreign key (role_id) references role(id),
    foreign key (manager_id) references employee(id) null
);