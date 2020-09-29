const roleSelect = [
    {
        type: "list",
        name: "role",
        message: "Please select the role you would like to add:",
        choices: ["Manager", "Engineer", "Intern"]
    }
];

const employeeQueries = [
    {
        type: "input",
        name: "name",
        message: `Please enter the Employee's name:`,
        validate: name => {
            const passing = name.match(/^[a-z\-]+ [a-z\-]+$/gi);
            if (passing) return true;
            return "Please enter two names (ie., given name and family name)";
        }
    },
    {
        type: "input",
        name: "id",
        message: `Please enter the Employee's ID:`,
        validate: id => {
            const passing = id.match(/^[a-z\d]+$/gi);
            if (passing) return true;
            return "Please enter two names (ie., given name and family name)";
        }
    },
    {
        type: "input",
        name: "email",
        message: `Please enter the Employee's email:`,
        validate: email => {
            const passing = email.match(/^[a-z\d\.\-]+\@[a-z\d\.\-]+\.[a-z]+$/gi);
            if (passing) return true;
            return "Please enter a valid email"
        }
    }
];

const managerQuery = [
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the Employee's office number:",
        validate: officeNumber => {
            const passing = officeNumber.match(/^[a-z\d]+$/gi);
            if (passing) return true;
            return "Please enter a valid office number (accepts letters)"
        }
    }
];

const engineerQuery = [
    {
        type: "input",
        name: "github",
        message: "Please enter the Employee's github username:",
        validate: github => {
            // https://github.com/shinnn/github-username-regex
            const passing = github.match((/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){3,38}$/gi));
            if (passing) return true;
            return 'Please enter a valid github username';
        }
    }
];

const internQuery = [
    {
        type: "input",
        name: "school",
        message: "Please enter the Employee's school:",
        validate: school => {
            const passing = school.match(/^[a-z]+$/gi);
            if (passing) return true;
            return "Please enter a valid school (no numbers or special characters)";
        }
    }
];

const again = [
    {
        type: "confirm",
        name: "again",
        message: "Would you like to enter another employee?"
    }
]

module.exports = {
    roleSelect,
    employeeQueries,
    managerQuery,
    engineerQuery,
    internQuery,
    again
}