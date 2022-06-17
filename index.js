// dependencies 
const inquirer = require('inquirer');
const fs = require('fs');
const createHTML = require('./src/create-html.js')

const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')
const Engineer = require('./lib/Engineer.js');

const staff = [];

// function to get user input and create new employee object
const getEmployeeInfo = () => {

    return inquirer.prompt([

        {
            type: "input",
            message: `What is the ${role}'s name?`,
            name: "name",
        },

        {
            type: "number",
            message: `What is the ${role}'s ID?`,
            name: "id",
        },

        {
            type: "input",
            message: `What is the ${role}'s email?`,
            name: "email",
        },

        {
            type: "input",
            message: "What is the manager's office location?",
            name: "officeLocation",
            when: role === 'manager'
        },

        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "github",
            when: role === "engineer"
        },

        {
            type: "input",
            message: "What is the intern's school?",
            name: "school",
            when: role === "intern"
        }, 

        {
            type: list,
            message: "What do you wish to do next?",
            name: "nextStep",
            choices: ["Add an engineer", "Add an intern", "Build my team"]
        }
    ]);

    

}
