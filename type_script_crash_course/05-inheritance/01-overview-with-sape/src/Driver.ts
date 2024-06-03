import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(3, 2, 5, 7);
console.log(myRectangle.getInfo());


// delcare an array for shapes ... initiallly empty
let theShapes: Shape[] = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

console.log("\n\n\n --- print with loop start --- \n\n\n");

for (let temShape of theShapes) {
    console.log(temShape.getInfo());
}

console.log("\n\n\n --- print with loop end --- \n\n\n");