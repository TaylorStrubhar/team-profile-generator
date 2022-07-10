const inquirer = require('inquirer');
const managerInfo = require('./lib/manager');
const internInfo = require('./lib/intern');
const engineerInfo = require('./lib/engineer');
const generateHTML = require('./src/generate-html');
const fs = require('fs');
const path = require('path');
const outputDIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(outputDIR, "team-page.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Your name is required. Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter your employee ID number.',
            validate: employeeID => {
                if (employeeID) {
                    return true;
                }
                else {
                    console.log('Your employee ID is required. Please enter your employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
            validate: email => {
                if (email) {
                    return true;
                }
                else {
                    console.log('Your email is required. Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Please enter your office number.',
            validate: officeNum => {
                if (officeNum) {
                    return true;
                }
                else {
                    console.log('Your office number is required. Please enter your office number.');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new managerInfo(answers.name, answers.employeeID, answers.email, answers.officeNum);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select your next step - ',
            choices: ['add an intern', 'add an engineer', "i'm finished building my team"]
        }
    ]).then(choiceInput => {
        switch (choiceInput.menu) {
            case 'add an intern':
                promptInternInfo();
                break;
            case 'add an engineer':
                promptEngineerInfo();
                break;
            default:
                buildTeam();
        }
    });
};

const promptEngineerInfo = () => {
    console.log(`

    Add an Engineer

    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: engineerName => {
                if (engineerName) {
                    return true;
                }
                else {
                    console.log('A name for the engineer is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Please enter the engineer's employee ID.",
            validate: employeeID => {
                if (employeeID) {
                    return true;
                }
                else {
                    console.log("The engineer's employee ID is required. Please enter their employee ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter their email address.',
            validate: email => {
                if (email) {
                    return true;
                }
                else {
                    console.log("The engineer's email address is required. Please enter their email address.");
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'gitHubUser',
            message: "Please enter their gitHub username.",
            validate: gitHubUser => {
                if (gitHubUser) {
                    return true;
                }
                else {
                    console.log("The engineer's gitHub username is required. Please enter their gitHub username.");
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new engineerInfo(answers.name, answers.employeeID, answers.email, answers.gitHubUser);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptInternInfo = () => {
    console.log(`

    Add an Intern

    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: internName => {
                if (internName) {
                    return true;
                }
                else {
                    console.log('A name for the intern is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Please enter the intern's employee ID.",
            validate: employeeID => {
                if (employeeID) {
                    return true;
                }
                else {
                    console.log("The intern's employee ID is required. Please enter their employee ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter their email address.',
            validate: email => {
                if (email) {
                    return true;
                }
                else {
                    console.log("The intern's email address is required. Please enter their email address.");
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'school',
            message: "Please enter their school name.",
            validate: school => {
                if (school) {
                    return true;
                }
                else {
                    console.log("The intern's school name is required. Please enter their school name.");
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new internInfo(answers.name, answers.employeeID, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`
    
    You're finished building your team!
    
    `);

    if (!fs.existsSync(outputDIR)) {
        fs.mkdirSync(outputDIR)
    }

    fs.writeFileSync(outputPath, generateHTML(teamMembers), "utf-8");
};

promptManager();
