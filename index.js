// Call all required modules
const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const StarterHTML = require("./lib/StarterHTML");
const starterCode = new StarterHTML();
const FinishHTML = require("./lib/FinishHTML");
const finishCode = new FinishHTML();

// Do I need an array or something to store?
const employees = [];

// A function to handle the inquirer prompts
function addEmployee() {
    // Initial prompts to collect generic data for all roles
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
    ])
    // Checks which role, and then collects the specific data for that role
    .then(({name, id, email, role}) => {
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
        ])
        // Checks what the role is, and then creates a new instance with all relevant data
        .then(({specific, addAnother}) => {
            // console.log(name, id, email, role, specific, addAnother);
            let employee;

            if (role == 'Intern') {
                employee = new Intern(name, id, email, specific);
            } else if (role == 'Engineer') {
                employee = new Engineer(name, id, email, specific);
            } else {
                employee = new Manager(name, id, email, specific);
            }
            // Pushes the created employee into the general array
            employees.push(employee);
            
            // Runs logic depending on if you'd like to add another employee
            if (addAnother === 'yes') {
                addEmployee();
            } else {
                console.log(employees);
                appendFinishHTML();
                return
            }
        })
    })
}

// addEmployee();

// Need to figure out how to write and/or append html
// console.log(starterCode.getStarterCode(), finishCode.getFinishCode());
function writeHTML() {
    let html = starterCode.getStarterCode();
    fs.writeFile("./output/index.html", html, (err) => {
        if (err) throw err;
        console.log('The file has been created');
    });
}

function appendFinishHTML() {
    let html = finishCode.getFinishCode();
    fs.appendFile("./output/index.html", html, (err) => {
        if (err) throw err;
        console.log('The file has been finished');
    })
}

// Function to init app?

function init() {
    writeHTML();
    // addEmployee();
}

init();