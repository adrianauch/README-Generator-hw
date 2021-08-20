// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  for (const userlicense of choices) {
    renderLicenseLink(userlicense);
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// User Data that makes up the README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[License] (#License)
  -[Test Instructions](#test-instructions)
  -[Contact Information](#conact-information)

  ### Description
  
  ${data.description}

  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### Contribution
  ${data.contribution}

  ### License
  ${data.license}

  ### Test Instructions
  ${data.test}

  ### Conact Information
  [Github Profile] (https://github.com/${data.username})
  [Email] ${data.email}
`;
}

module.exports = generateMarkdown;
