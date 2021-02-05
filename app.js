const inquirer = require('inquirer');
const mysql = require('mysql');
const require = require('chalk');
const printTable = require('console-table-printer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: '',
    database: 'employee_trackerDB',
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
        .then (function(choice) {
            switch (selection) {
                case (choice === 'View Departments'):
                    viewDepts()
                break
                case (choice === 'View Roles'):
                    viewRoles()
                break
                case (choice === 'View Employees'):
                    viewEmps()
                break
                case (choice === 'Add Department'):
                    addDept()
                break
                case (choice === 'Add Role'):
                    addRole()
                break
                case (choice === 'Update Employee'):
                    updateEmp()
                break
                case (choice === 'Add Employee'):
                    addEmp()
                break
                case (choice === 'Exit Program'):
                    connection.end();
            }
        })
}