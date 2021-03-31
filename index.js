// Call all required modules
const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

// Do I need an array or something to store?
const employees = [];

// A function to handle the inquirer prompts
function addEmployee() {
    inquirer.prompt([
        {
            message: "Enter employee's name:",
            name: "name"
        },
        {
            message: "Enter employee's ID number:",
            name: "id"
        },
        {
            message: "Enter employee's email:",
            name: "email"
        },
        {
            type: "list",
            message: "What is this employee's role?",
            choices: [
                "Intern",
                "Engineer",
                "Manager"
            ],
            name: "role"
        }
    ]).then((data) => {
        console.log(data);
    })
}

addEmployee();

// Need to figure out how to write and/or append html

// Function to init app?
