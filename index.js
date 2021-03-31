// Call all dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// Call all required modules
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

// Calls the two starter HTML classes, and sets an instance
const StarterHTML = require("./lib/StarterHTML");
const starterCode = new StarterHTML();
const FinishHTML = require("./lib/FinishHTML");
const finishCode = new FinishHTML();

// Calls the intern, engineer, and manager HTML classes
const InternHTML = require("./lib/InternHTML");
const EngineerHTML = require("./lib/EngineerHTML");
const ManagerHTML = require("./lib/ManagerHTML");

// Array of all employees. Not sure if needed?
const employees = [];

// A function to handle the inquirer prompts
function addEmployee() {
  // Initial prompts to collect generic data for all roles
  inquirer
    .prompt([
      {
        message: "Enter employee's name:",
        name: "name",
      },
      {
        message: "Enter employee's ID number:",
        name: "id",
      },
      {
        message: "Enter employee's email:",
        name: "email",
      },
      {
        type: "list",
        message: "What is this employee's role?",
        choices: ["Intern", "Engineer", "Manager"],
        name: "role",
      },
    ])
    // Checks which role, and then collects the specific data for that role
    .then(({ name, id, email, role }) => {
      let roleSpecific;
      if (role === "Intern") {
        roleSpecific = "school:";
      } else if (role === "Engineer") {
        roleSpecific = "GitHub username:";
      } else {
        roleSpecific = "office number:";
      }
      inquirer
        .prompt([
          {
            message: `Enter the ${role}'s ${roleSpecific}`,
            name: "specific",
          },
          {
            type: "list",
            message: "Would you like to create another employee?",
            name: "addAnother",
            choices: ["yes", "no"],
          },
        ])
        // Passes the collected data along the line
        .then(({ specific, addAnother }) => {
          let employee;
          // Depending on the role, creates a new instance, and appends the HTML
          if (role == "Intern") {
            employee = new Intern(name, id, email, specific);
            appendIntern(name, id, email, specific);
          } else if (role == "Engineer") {
            employee = new Engineer(name, id, email, specific);
            appendEngineer(name, id, email, specific);
          } else {
            employee = new Manager(name, id, email, specific);
            appendManager(name, id, email, specific);
          }
          // Pushes the created employee into the general array
          employees.push(employee);

          // Runs logic depending on if you'd like to add another employee
          if (addAnother === "yes") {
            addEmployee();
          } else {
            console.log(employees);
            appendFinishHTML();
            return;
          }
        });
    });
}

// Function to write the start section of HTML
function writeHTML() {
  let html = starterCode.getStarterCode();
  fs.writeFile("./output/index.html", html, (err) => {
    if (err) throw err;
  });
}

// Function to write the end section of HTML
function appendFinishHTML() {
  let html = finishCode.getFinishCode();
  fs.appendFile("./output/index.html", html, (err) => {
    if (err) throw err;
    console.log("Your team has been created. Visit the output folder to view:");
  });
}

// Function to write the intern html when called
function appendIntern(name, id, email, specific) {
  html = new InternHTML(name, id, email, specific);
  fs.appendFile("./output/index.html", html.getCode(), (err) => {
    if (err) throw err;
  });
}

// Function to append the engineer html when called
function appendEngineer(name, id, email, specific) {
  html = new EngineerHTML(name, id, email, specific);
  fs.appendFile("./output/index.html", html.getCode(), (err) => {
    if (err) throw err;
  });
}

// Function to append manager html when called
function appendManager(name, id, email, specific) {
  html = new ManagerHTML(name, id, email, specific);
  fs.appendFile("./output/index.html", html.getCode(), (err) => {
    if (err) throw err;
  });
}

// Function to init app
function init() {
  writeHTML();
  addEmployee();
}

// Starts the app
init();
