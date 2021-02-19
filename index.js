const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

//start menu
function startMenu () {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your employee's name?",
            name: 'employeeName',
        },
        {
            type: 'input',
            message: "What is your employee's email?",
            name: 'employeeEmail',
        },
        {
            type: 'input',
            message: "What is your employee's ID?",
            name: 'employeeId',
        },
    ]).then(results => {
        const employee = new Employee (results.employeeName, results.employeeId, results.employeeEmail)
    })
}

//if else statement 

//if user choose manager option 
function managerOption () {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your manager's name?",
            name: 'managerName',
        },
        {
            type: 'input',
            message: "What is your manager's email?",
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: "What is your manager's ID?",
            name: 'managerId',
        },
        {
            type: 'input',
            message: "What is your manager's office number?",
            name: 'officeNumber',
        },
    ]).then(results => {
        const manager = new Manager (results.managerName, results.managerId, results.managerEmail, results.officeNumber)
    })
}

//if else statement 

//if user chooses engineer option
function engineerOption () {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your engineer's name?",
            name: 'engineerName',
        },
        {
            type: 'input',
            message: "What is your engineer's email?",
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'githubUsername',
        },
        {
            type: 'input',
            message: "What is your engineers ID?",
            name: 'engineerId',
        },
    ]).then(results => {
        const engineer = new Engineer (results.engineerName, results.engineerId, results.githubUsername, results.engineerEmail)
    })
}
//if else statment 

//if user chooses intern option
function internOption () {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your intern's name?",
            name: 'internName',
        },
        {
            type: 'input',
            message: "What is your intern's email?",
            name: 'internEmail',
        },
        {
            type: 'input',
            message: "What is your intern's ID?",
            name: 'internId',
        },
        {
            type: 'input',
            message: "What is your intern's school name?",
            name: 'schoolName',
        },
    ]).then(results => {
        const intern = new Intern (results.internName, results.internId, results.internEmail, results.schoolName)
    })
}
//create function for engineer, intern
    //.then if else statment - call function to ask intern questions or engineer questions
//create a function to go back to menu 
//create a function to add member
