"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(5, 10, 20);
console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(3, 2, 5, 7);
console.log(myRectangle.getInfo());
// delcare an array for shapes ... initiallly empty
let theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
console.log("\n\n\n --- print with loop start --- \n\n\n");
for (let temShape of theShapes) {
    console.log(temShape.getInfo());
}
console.log("\n\n\n --- print with loop end --- \n\n\n");
//# sourceMappingURL=Driver.js.map