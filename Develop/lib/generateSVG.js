class CreateSVG {
  // inquirer prompts
  constructor(text, fontColor, shape, shapeColor) {
    this.text = text;
    this.fontColor = fontColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  // determines which svg will be generated upon shape chosen
  chooseShape() {
    const shapeSVG = ""
    if (this.shape === "Circle") {
      shapeSVG = `<circle cx="150" cy="150" r="50%" fill="${this.shapeColor}" />

      <text x="51%" y="57%" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>`;
    } if (this.shape === "Triangle") {
      shapeSVG = `<polygon points="150,0 0,300 300,300" fill="${this.shapeColor}" />

      <text x="50%" y="70%" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>`;
    } if (this.shape === "Square") {
      shapeSVG = `<rect width="100%" height="100%" fill="${this.shapeColor}" />

      <text x="51%" y="55%" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>`;
    }
    console.log(shapeSVG);
    return shapeSVG
  }
}

// const SVGinputs = new CreateSVG(text, fontColor, shape, shapeColor);

// template literal for svg file
const generateLogo = ({ text, fontColor, shape, shapeColor }) =>
`<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

<!-- https://www.w3schools.com/graphics/svg_rect.asp -->
${new CreateSVG(text, fontColor, shape, shapeColor)}

</svg>`;

module.exports = generateLogo;
module.exports = new CreateSVG;