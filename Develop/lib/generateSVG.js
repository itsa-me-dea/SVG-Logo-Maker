// class for user picked shape
class ChosenShape {
  constructor() {
    this.text = "";
    this.fontColor = "";
    this.shapeColor = "";  
  }

  // add calls to apply user inputs
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  setText(text) {
    this.text = text;
  }

  setTextColor(fontColor) {
    this.fontColor = fontColor;
  }
}

// circle class to extend chosenShapes class
class Circle extends ChosenShape {
  render() {
    // Returns circle with all related SVG info
    return `<circle cx="150" cy="100" r="95" fill="${this.shapeColor}" />

    <text x="50%" y="60%" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>`;
  }
}

// triangle class to extend chosenShapes class
class Triangle extends ChosenShape {
  render() {
    // Returns polygon all related SVG info
    return `<polygon points="150,10 10,190 290,190" fill="${this.shapeColor}" />

    <text x="50%" y="70%" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>`;
  }
}

// square class to extend chosenShapes class
class Square extends ChosenShape {
  render() {
    // Returns rectangle with all related SVG info
    return `<rect x="10" y="10" width="190" height="190" fill="${this.shapeColor}" />

    <text x="35%" y="62%" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>`;
  }
}

// Exports classes (Square, Triangle, Circle)
module.exports = { Circle, Triangle, Square };