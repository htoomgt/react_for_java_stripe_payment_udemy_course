import { theShapes } from "./ArrayDriver";


console.log("\n\n\n --- print with loop start --- \n\n\n");

for (let temShape of theShapes) {
    console.log(temShape.getInfo());
}

console.log("\n\n\n --- print with loop end --- \n\n\n");