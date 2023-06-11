const index = require('/SVG-Logo-Maker/Develop/index.js');

class CreateSVG {
  constructor(text, fontColor, shape, shapeColor) {
    this.text = text;
    this.fontColor = fontColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  chooseShape(shapeSVG) {
    const shapeSVG = ""
    if (this.shape === "Circle") {
      shapeSVG = `<circle cx="150" cy="150" r="50%" fill="${this.shapeColor}" />

      <text x="51%" y="57%" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>`
    } if (this.shape === "Triangle") {
      shapeSVG = `<polygon points="150,0 0,300 300,300" fill="${this.shapeColor}" />

      <text x="50%" y="70%" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>`
    } if (this.shape === "Square") {
      shapeSVG = `<rect width="100%" height="100%" fill="${this.shapeColor}" />

      <text x="51%" y="55%" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>`
    } else {
      console.log("Whoops! You forgot to select a shape! Try again.")
      quations();
      return;
    }
    return shapeSVG
  }
}
    
module.exports = index;