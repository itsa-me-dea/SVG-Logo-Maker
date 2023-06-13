# SVG-Logo-Maker

[![License Badge](https://img.shields.io/badge/license-MIT%20License-green?style=for-the-badge&logo=appveyor)](https://mit-license.org/)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge&logo=appveyor)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

### **[Description](#description) | [Installation](#installation) | [Usage](#usage) | [Credits](#credits) | [License](#license) | [Contribute](#contribute) | [Tests](#tests) | [Questions](#questions)**

## Description

My motivation is to create a SVG generator that utilizes Node to prompt the user for answers to autofill a SVG template.

I built this project for users to easily create a SVG by answering a series of questions. 

This creates an easy pathway to generate a SVG given the user's inputs, rather than the user having to create a SVG from scratch.

I learned how to utilize Node, arrow functions, template literals file generation, classes (including constructors and inherited classes), and jest testing.

## Installation

Download or fork this package. From there, open the integrated terminal (this is for VSCode) and run the following: 1. `npm init`, 2. `npm i`, 3. `npm install inquirer`. If you plan to run the test with jest: 4. `npm install jest`.

## Usage

In the integrated table, run `node index` and answer the prompts. (**NOTE**: For your desired text, enter no more than 3 characters. For color related questions, please enter a color or hex code.) After answering the prompts, the [`generated-logo.svg`](./Develop/gen-logo/generated-logo.svg) will be generated in the `/Develop/gen-logo/` folder.

A **walkthrough video** can be downloaded from the [Images](./Images/screen-capture-NodeREADMEgen.mp4) folder.

![example of final product](./Develop/gen-logo/generated-logo.svg)

## Credits

- Collaborators: 
  - N/A.
- Third-party assets: 
  - https://www.npmjs.com/package/inquirer/v/8.2.4#prompt
  - https://www.npmjs.com/package/jest
- Tutorials: 
  - https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started
  - https://www.w3schools.com/graphics/svg_rect.asp
  - UCSD-VIRT-FSF-PT-03-2023-U-LOLC


## License

 The license this application is covered under is: [MIT License](https://mit-license.org/).

## Contribute

In general, follow the "fork-and-pull" Git workflow.

  1. **Fork** the repo on GitHub.
  2. **Clone** the project to your own machine.
  3. **Commit** changes to your own branch.
  4. **Push** your work back up to your fork.
  5. Submit a **pull request** so that your changes can be reviewed.
    
  NOTE: Be sure to merge the latest from "upstream" before making a pull request!
  
  When contributing to this project, please follow the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) code of conduct.

## Tests

None.

## Questions

My gitHub username is [itsa-me-dea](https://github.com/itsa-me-dea), and you can contact me at wachadea@gmail.com.