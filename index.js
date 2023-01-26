const inquirer = require("inquirer");
constfs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generatePage = require("./lib/generatePage.js");
const OUTPUT_DIR = path.resolve(__dirname, "public");
const outputPath = path.join(OUTPUT_DIR, "index.html");
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

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is the Engineer's Employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's GitHub?"
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
        teamMembers.push(engineer);
        addEmployee();
    })
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is the Intern's Employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What school are they attending?"
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.github);
        teamMembers.push(intern);
        addEmployee();
    })
}

const buildTeam = () => {
    if (!fs.existsStnc(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generatePage(teamMembers), "utf-8");
}

promptManager();