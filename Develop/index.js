// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('fs').promises;
const { Circle, Triangle, Square } = require('./lib/generateSVG');

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
function writeToFile(answers) {
    // let SVGfile = "";
    let SVGshape = "";
    if (answers.shape === "Circle") {
        SVGshape = new Circle();
    } if (answers.shape === "Triangle") {
        SVGshape = new Triangle();
    } else {
        SVGshape = new Square(); 
    }
    console.log(SVGshape);

    // const SVGfile = ({ text, fontColor, SVGshape, shapeColor }) =>
    // `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    // <!-- https://www.w3schools.com/graphics/svg_rect.asp -->
    // ${SVGshape} fill="${shapeColor}" />
  
    // <text x="50%" y="60%" font-size="60" text-anchor="middle" fill="${fontColor}">${text}</text>
  
    // </svg>`;

    SVGinfo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <!-- https://www.w3schools.com/graphics/svg_rect.asp -->
    ${SVGshape}
    
    </svg>`;

    const filename = "./examples/generated-logo.svg";

    fs.writeFile(filename, SVGinfo, function (err) {
        err ? console.log(err) : console.log("Sucessfully created generated-logo.svg")
    });
}

// TODO: Create a function to initialize app
// const init = () => {
//     questions()
//       // Use writeFile method imported from fs.promises to use promises instead of
//       // a callback function
//       .then((answers) => writeFile('generated-logo.svg', generateSVG.generateLogo(answers)))
//       .then(() => console.log('Successfully wrote to generated-logo.svg'))
//       .catch((err) => console.error(err));
//   };

// // Function call to initialize app
// init();

questions();
module.exports = questions;