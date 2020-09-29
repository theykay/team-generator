const inquirer = require("inquirer");

const roleSelect = [
    {
        type: "list",
        name: "role",
        message: "Please select the role you would like to add:",
        choices: ["Manager", "Engineer", "Intern"]
    }
];

let role = "";

const employeeQueries = [
    {
        type: "input",
        name: "name",
        message: `Please enter the ${role}'s name:`,
        validate: name => {
            const passing = name.match(/^[a-z\-]+ [a-z\-]+$/gi);
            if (passing) return true;
            return "Please enter two names (ie., given name and family name)";
        }
    },
    {
        type: "input",
        name: "id",
        message: `Please enter the ${role}'s ID:`,
        validate: id => {

        }
    },
    {
        type: "input",
        name: "email",
        message: `Please enter the ${role}'s email:`
        // validate: only accept correct format [letters and numbers]@[letters/numbers].[letters]
    }
];

const managerQuery = [
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the Manager's office number:"
        // validate: only accept numbers
    }
];

const engineerQuery = [
    {
        type: "input",
        name: "github",
        message: "Please enter the Engineer's github username:"
        // validate: only accept letters and numbers
    }
];

const internQuery = [
    {
        type: "input",
        name: "school",
        message: "Please enter the Intern's school:"
        // validate: only accept letters
    }
];

module.exports = {
    role,
    roleSelect,
    employeeQueries,
    managerQuery,
    engineerQuery,
    internQuery
}