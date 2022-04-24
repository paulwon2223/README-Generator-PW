// TODO: Include packages needed for this application
const inq = require('inquirer')
const generateMD = require('./utils/generateMarkdown')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'Enter the title for your project',
        name: 'title',
        value: 'input',
    },
    {
        message: 'Enter any description for your project',
        name: 'description',
        value: 'input',
    },
    {
        message: 'Enter any installation instructions for your project',
        name: 'install',
        value: 'input',
    },
    {
        message: 'Enter any usage information for your project',
        name: 'usageInfo',
        value: 'input',
    },
    {
        message: 'Enter any contribution guidelines for your project',
        name: 'guideline',
        value: 'input',
    },
    {
        message: 'Enter any neccessary test instructions for your project',
        name: 'testInstruction',
        value: 'input',
    },
    {
        message: 'Choose a license for your project',
        name: 'license',
        type: 'rawlist',
        choices: ['Apache License v2.0', 
                  'GNU General Public License v3.0', 
                  'MIT License'],
    },
    {
        message: 'What is your GitHub username?',
        name: 'github',
        value: 'input',
    },
    {
        message: 'What is your email address?',
        name: 'email',
        value: 'input',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('there is an error', err);
        } else {
            console.log('Readme successfully generated!');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions)
    .then(function (data) {
        writeToFile("README.md", generateMD(data))
    })
}

// Function call to initialize app
init();
