// required packages
const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'Please provide your Github username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address',
  },
  {
    type: 'input',
    name: 'repository',
    message: 'Please provide a name for your Github Repository',
  },
  {
    type: 'input',
    name: 'title',
    message: 'Please provide a title for the project',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description for the project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide an installation process for the project if one is needed',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage examples for the project',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide guidelines for how other developers may contribute to your created project',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide written tests and examples for your created application and how to run them',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
  },
];

// function to write README file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log("You have successfully generated your Readme.md file!")
  });
}

// function to initialize program
async function init() {
  try {
    const responseData = await inquirer.prompt(questions)
    const markdown = generateMarkdown(responseData)
    await writeFile(`Readme.md`, markdown);
  } catch (err) {
    console.log(err);
  }
};

// function call to initialize program
init();