const inquirer = require('inquirer');
const mysql = require('mysql');
const chalk = require('chalk');
const printTable = require('console-table-printer');

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
        console.log('Departments:');
        res.forEach(department => {
            console.log(`ID: ${department.id} Name: ${department.name}`);
        });
        init();
    });
}

function viewRoles() {
    const query = 'SELECT * FROM role';
    connection.query(query, function(err, res) {
        console.log('Roles:');
        res.forEach(role => {
            console.log(`ID: ${role.id} Title: ${role.title} Salary: ${role.salary}`);
        });
        init();
    });
}

