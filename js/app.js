const inquirer = require('inquirer');
const manager = require('./manager');
const intern = require('./intern');
const engineer = require('./engineer');
const generateHTML = require('./generate-html');
const fs = require('fs');
const path = require('path');
const { off } = require('process');
const manager = require('./manager');
const outputDIR = path.resolve(__dirname, 'output')
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
        const managerInfo = new manager(answers.name, answers.employeeID, answers.email, answers.officeNum);
        teamMembers.push(managerInfo);
        promptMenu();
    })
};