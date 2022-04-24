// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT License') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Apache License v2.0') {
    badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'GNU General Public License v3.0') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'Apache License v2.0') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license === 'Apache License v2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'GNU General Public License v3.0') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSelection = '';
  if (license === 'none') {
    licenseSelection = ''
  } else {
    licenseSelection = `${license}`
  }
  return licenseSelection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
________________________

### Description

${data.description}
________________________
### Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

________________________    
### Installation
${data.install}

________________________
### Usage
${data.usageInfo}

________________________
### License
${renderLicenseSection(data.license)}${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

________________________
# Contributing
${data.guideline}

________________________
# Tests
${data.testInstruction}

________________________
# Questions
You can reach me at my email at ${data.email} or on my gitHub https://github.com/${data.github}`
}

module.exports = generateMarkdown;
