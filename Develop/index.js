// Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateSVG = require('./lib/generateSVG');

// Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 chracters:',
    },
    {
        type: 'input',
        name: 'fontColor',
        message: 'Enter a font color or hexidecimal:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color or hexidecimal:',
    },
]).then((answers) => {
    // NMT 3 characters warning
    if (answers.text.length > 3) {
      console.log("Value must be no more than 3 characters");
      questions();
    } else {
      writeToFile("generated-logo.svg", answers);
    }
  });
};


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function writeToFile(data) {
    const filename = "./generated-README.md";

    fs.writeFile(filename, data, function (err) {
        err ? console.log(err) : console.log(filename + " created!")
    }); 
}

// TODO: Create a function to initialize app
const init = () => {
    questions()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('generated-logo.svg', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to generated-logo.svg'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
