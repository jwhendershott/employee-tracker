const inquirer = require('inquirer');
const mysql = require('mysql');
const consTable = require('console.table');
const chalk = require('chalk');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employee_trackerdb',
})

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    init();
  });

function init() {
    inquirer
        .prompt(
            {
                type: 'list',
                name: 'viewChoices',
                message: 'Select what you need to do.',
                choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee', 'Exit Program']
            })
        .then (function(data) {
            console.log(data);
            switch (data.viewChoices) {
                case 'View Departments':
                    viewDepts()
                break;
                case 'View Roles':
                    viewRoles()
                break;
                case 'View Employees':
                    viewEmps()
                break;
                case 'Add Department':
                    addDept()
                break;
                case 'Add Role':
                    addRole()
                break;
                case 'Update Employee':
                    updateEmp()
                break;
                case 'Add Employee':
                    addEmp()
                break;
                case 'Exit Program':
                    connection.end();
                break;
            }
        })
}

function viewDepts() {
    const query = 'SELECT * FROM department';
    connection.query(query, function(err, res) {
        console.log('Departments:');{
            console.table(res);
        };
        init();
    });
}

function viewRoles() {
    const query = 'SELECT * FROM role';
    
    connection.query(query, function(err, res) {
        console.log('Roles:');{
            console.table(res);
        };
        init();
    });
}

function viewEmps() {
    const query = 'SELECT * FROM employee LEFT JOIN role ON employee.role_id = role.id';
    connection.query(query, function(err, res) {
        console.log('Employees:');

            console.table(res)
        });
        init();
    };


function addDept() {
    inquirer
    .prompt(
        {
            type: 'input',
            name: 'dept',
            message: 'What department would you like to add?'
        })
        .then(function(data) {
            const query = 'INSERT INTO department (name) VALUES (?)';
            connection.query(query, data.dept, function(err, res) {
                if (err) throw err;
                console.log(`${data.dept} added.`);
            });
            viewDepts();
        })
}

function addRole() {
    inquirer
    .prompt(
        {
            type: 'input',
            name: 'role',
            message: 'What role would you like to add?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this role?'
        })
        .then(function(data) {
            connection.query(
                'INSERT INTO role (title), (salary) VALUES (?, ?)',
            {
                title: data.role,
                salary: data.salary,
            },
            (err) => {
                if (err) throw err;
                console.log(`${data.role} added.`);
            viewRoles();
        });
});
};

function addEmp() {
    inquirer
    .prompt(
        {
            type: 'input',
            name: 'empFirst',
            message: "What is the employee's first name?"
        },
        {
            type: 'input',
            name: 'empLast',
            message: "What is the employee's last name?"
        })
        .then(function(data) {
            connection.query(
                'INSERT INTO empoyee (first_name), (last_name) VALUES (?, ?)',
            {
                first_name: data.empFirst,
                last_name: data.empLast,
            },
            (err) => {
                if (err) throw err;
                console.log(`Employee added.`);
            viewEmps();
        });
});
};

