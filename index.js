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
    ]).then(({name, id, email, role}) => {
        let roleSpecific;
        if (role === 'Intern') {
            roleSpecific = 'school:'
        } else if (role === 'Engineer') {
            roleSpecific = 'GitHub username:'
        } else {
            roleSpecific = 'office number:'
        }
        inquirer.prompt([
            {
                message: `Enter the ${role}'s ${roleSpecific}`,
                name: 'specific'
            },
            {
                type: 'list',
                message: 'Would you like to create another employee?',
                name: 'addAnother',
                choices: [
                    'yes',
                    'no'
                ]
            }
        ]).then(({specific, addAnother}) => {
            console.log(name, id, email, role, specific, addAnother);
        })
    })
}

addEmployee();

// Need to figure out how to write and/or append html

// Function to init app?
