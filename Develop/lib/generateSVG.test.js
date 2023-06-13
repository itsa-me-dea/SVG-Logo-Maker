// generateSVG is imported
const { Triangle, Square, Circle } = require('./generateSVG');

// Test Circle() class
describe("Circle Test", () => {
  test('Test Circle() class with params @ text = Sup, fontColor = white, shapeColor = blue', () => {
    const shape = new Circle();
    
    shape.setColor("blue");
    shape.setText("Sup");
    shape.setTextColor("white");

    expect(shape.render()).toEqual(
    `<circle cx="150" cy="100" r="95" fill="blue" />

    <text x="50%" y="60%" font-size="60" text-anchor="middle" fill="white">Sup</text>`
    );
  });
});
  
// Test Triangle() class
describe("Triangle Test", () => {
  test('Test Triangle() class with params @ text = Sup, fontColor = white, shapeColor = blue', () => {
    const shape = new Triangle();

    shape.setColor("blue");
    shape.setText("Sup");
    shape.setTextColor("white");    
    
    expect(shape.render()).toEqual(
    `<polygon points="150,10 10,190 290,190" fill="blue" />

    <text x="50%" y="70%" font-size="60" text-anchor="middle" fill="white">Sup</text>`
    );
  });
});

// Test Square() class
describe("Square Test", () => {
  test('Test Square() class with params @ text = Sup, fontColor = white, shapeColor = blue', () => {
    const shape = new Square();

    shape.setColor("blue");
    shape.setText("Sup");
    shape.setTextColor("white");

    expect(shape.render()).toEqual(
    `<rect x="10" y="10" width="190" height="190" fill="blue" />

    <text x="35%" y="62%" font-size="60" text-anchor="middle" fill="white">Sup</text>`
    );
  });
});
  
