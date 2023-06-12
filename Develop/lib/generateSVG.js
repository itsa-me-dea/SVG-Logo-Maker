// Shape class utilizes constructor to define what it means to be a shape
class ChosenShape {
  constructor(text, fontColor, shapeColor) {
    this.text = text;
    this.fontColor = fontColor;
    // this.shape = shape;
    this.shapeColor = shapeColor;  
  }
  // setColor(shapeColor) {
  //   this.shapeColor = shapeColor;
  // }
}

// Triangle class inherits properties defined in Shape class
class Circle extends ChosenShape {
  render() {
    // Returns polygon with color input
    return `<circle cx="150" cy="100" r="95" fill="${this.shapeColor}" />

    <text x="50%" y="60%" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>`;
  }
}

// Square class inherits properties defined in Shape class
class Triangle extends ChosenShape {
  render() {
    // Returns polygon with color input
    return `<polygon points="150,10 10,190 290,190" fill="${this.shapeColor}" />

    <text x="50%" y="70%" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>`;
  }
}

// Circle class inherits properties defined in Shape class
class Square extends ChosenShape {
  render() {
    // Returns polygon with color input
    return `<rect x="10" y="10" width="190" height="190" fill="${this.shapeColor}" />

    <text x="35%" y="62%" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>`;
  }
}

// Exports classes (Square, Triangle, Circle)
module.exports = { Circle, Triangle, Square };