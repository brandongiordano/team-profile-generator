const inquirer = require("inquirer");
constfs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your name",
        },
        {
            type: "input",
            name: "employeeId",
            message: "Please enter your employee ID",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter your office number",
        }
    ]).then(answers => {
        const manager = new Manager(
            answers.name, answers.employeeId, answers.email, answers.officeNumber,
        )
        teamMembers.push(manager);
        addEmployee();
    })
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "roleChoice",
            message: "Please choose an option",
            choices: ["Add Engineer", "Add Intern", "Team Complete"]
        }
    ])
    .then(userChoice => {
        switch (userChoice.roleChoice) {
            case "Add Engineer":
                promptEngineer();
                break;
            case "Add Intern":
                promptIntern();
                break;
            default:
                buildTeam();

        }
    })
}

const promptEngineer = () => {}

const promptIntern = () => {}