// dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const createHTML = require("./src/html-creator.js");

const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");
const Engineer = require("./lib/engineer.js");

const staff = [];

// function to get user input and create new employee object
const getEmployeeInfo = (role) => {
  return inquirer
    .prompt([
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
        when: role === "manager",
      },

      {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github",
        when: role === "engineer",
      },

      {
        type: "input",
        message: "What is the intern's school?",
        name: "school",
        when: role === "intern",
      },

      {
        type: "list",
        message: "What do you wish to do next?",
        name: "nextStep",
        choices: ["Add an engineer", "Add an intern", "Build my team"],
      },
    ])

    .then((response) => {
      let newEmployee = {};

      switch (role) {
        case "manager":
          newEmployee = new Manager(
            response.name,
            response.id,
            response.email,
            response.officeLocation
          );
          break;

        case "engineer":
          newEmployee = new Engineer(
            response.name,
            response.id,
            response.email,
            response.github
          );
          break;

        case "intern":
          newEmployee = new Intern(
            response.name,
            response.id,
            response.email,
            response.school
          );
          break;

        default:
          throw new Error("Something went wrong");
      }

      // add new employee to staff array
      staff.push(newEmployee);

      if (response.nextStep === "Add an engineer") {
        return getEmployeeInfo("engineer");

      } else if (response.nextStep === "Add an intern") {
        return getEmployeeInfo("intern");

      } else if (response.nextStep === "Build my team") {
        const html = createHTML(staff);
        writeToFile(html);
        
      } else {
        throw new Error("Something went wrong");
      }
    });
};

// write html file
const writeToFile = (generatedHTML) => {
  fs.writeFile("./dist/generated-team.html", generatedHTML, (err) => {
    if (err) throw err;
    console.log("Successfully wrote to team.html");
  });
};

const init = () => {
    console.log("Welcome to the team generator!");
    console.log("Please enter manager information:");
    getEmployeeInfo("manager");
};

init ();