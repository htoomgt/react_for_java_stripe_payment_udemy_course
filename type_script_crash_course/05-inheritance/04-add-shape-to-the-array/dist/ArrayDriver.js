"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theShapes = void 0;
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 15);
console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(5, 10, 21);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(3, 2, 5, 7);
console.log(myRectangle.getInfo());
// delcare an array for shapes ... initiallly empty
var theShapes = [];
exports.theShapes = theShapes;
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
//# sourceMappingURL=ArrayDriver.js.map