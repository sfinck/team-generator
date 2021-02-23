const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
let idArray = [];
let teamArray = [];

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
            validate: function(input){
                if (idArray.indexOf(input)!==-1){
                    return 'ID Already exists'
                }
                return true
            }
        },
        {
            type: 'input',
            message: "What is your manager's office number?",
            name: 'officeNumber',
        },
    ]).then(results => {
        const manager = new Manager (results.managerName, results.managerId, results.managerEmail, results.officeNumber)
        idArray.push(results.managerId)
        teamArray.push(manager)
        userChoice();
    })
}

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
            validate: function(input){
                if (idArray.indexOf(input)!==-1){
                    return 'ID Already exists'
                }
                return true
            }
        },
    ]).then(results => {
        const engineer = new Engineer (results.engineerName, results.engineerId, results.githubUsername, results.engineerEmail)
        idArray.push(results.engineerId)
        teamArray.push(results.engineer)
        userChoice();
    })
}

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
            validate: function(input){
                if (idArray.indexOf(input)!==-1){
                    return 'ID Already exists'
                }
                return true
            }
        },
        {
            type: 'input',
            message: "What is your intern's school name?",
            name: 'schoolName',
        },
    ]).then(results => {
        const intern = new Intern (results.internName, results.internId, results.internEmail, results.schoolName)
        idArray.push(results.internId)
        teamArray.push(results.intern)
        userChoice();
    })
}

//create function for engineer, intern
//.then if else statment - call function to ask intern questions or engineer questions
function userChoice () {
    inquirer.prompt([
        {  
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'userChoice',
        choices: ['Engineer', 'Intern', 'All done!'],
        }
    ]).then(results => {
        if (results.userChoice === 'Engineer'){
            engineerOption();
        }
        else if (results.userChoice === 'Intern'){
            internOption();
        }
        else {
            console.log("done");
        }
    })
}

function teamHTML() {
    if (!fs.existsSync(path.resolve(__dirname,'output'))){
        fs.mkdirSync(path.resolve(__dirname,'output'))
    }
    
//write code that makes file 
//how to render onto html
}

managerOption();


