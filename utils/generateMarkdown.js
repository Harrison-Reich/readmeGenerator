// function to generate markdown for README
function generateMarkdown(data) {
  // creating readme file content in a template literal
  return `# ${data.title}

  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.username}/${data.repository}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.repository}?style=flat&logo=appveyor) ![Badge for GitHub commit activity](https://img.shields.io/github/commit-activity/w/${data.username}/${data.repository}?color=purple)


  ## Table of Content


  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)


  ## Description
  ${data.description}

  ## Installation
  Provided installation processes insure the desired development environment and outcome
  ${data.installation}


  ## Usage
  Provided usage instructions and examples insure the desired development environment and outcome
  ${data.usage}


  ## Contributing
  To contribute to the project, you may do so by following these guidelines and instructions
  ${data.contributing}


  ## Tests
  Provided are tests for the application and how to run them
  ${data.tests}


  ## License
  ${data.license}


  ## Questions
  If you have any questions, you may contact with the information below
  GitHub: https://github.com/${data.username}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
