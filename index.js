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
    })
}