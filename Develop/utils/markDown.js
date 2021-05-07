// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function markDown(data) {
//   return `# ${response.title}
// function to generate markdown for README
// function licenseBadge(response) {
  // const licenseType = response.license[0];
  // let licenseString = " "
  // if (licenseType === "MIT") {
  //   licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg`
  // };
  // if (licenseType === "GNU General Public License 2.0") {
  //   licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  // };
  // if (licenseType === "Apache License 2.0") {
  //   licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  //   };
  // if (licenseType === "GNU General Public License 3.0") {
  //     licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  //   };
  // return licenseString
  // };






function markDown(response) {
  return `

  # ${response.title}
## Table of Contents
# [Discription](#discription)
# [Installation](#installation)
# [Usage](#usage)
# [License](#license)
# [Contributors](#contributors)
# [Test](#test)
# [Questions](#questions)

## Discription
${response.Discription}

## Installation
${response.Install}

## Usage
${response.Usage}

## License
${response.License}

## Contributors
${response.Contributions}

## Test
${response.Test}


## Questions
If you want to contact me:

Github:[${response.Github}](${response.Github})

Email:[${response.Email}](${response.Email})

`}

module.exports = markDown;