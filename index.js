// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is the title of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is this app for?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How is this application installed?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is this application used?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'How can the user make contributions to this app?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How can the user test the application?',
    default: 'npm test',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project.',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
