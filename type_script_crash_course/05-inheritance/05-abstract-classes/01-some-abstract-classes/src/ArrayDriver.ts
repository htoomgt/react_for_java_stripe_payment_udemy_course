import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";



let myCircle = new Circle(5, 10, 21);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(3, 2, 5, 7);
console.log(myRectangle.getInfo());


// delcare an array for shapes ... initiallly empty
let theShapes: Shape[] = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);

export { theShapes };