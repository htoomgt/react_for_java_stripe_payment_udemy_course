"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayDriver_1 = require("./ArrayDriver");
console.log("\n\n\n --- print with loop start --- \n\n\n");
for (var _i = 0, theShapes_1 = ArrayDriver_1.theShapes; _i < theShapes_1.length; _i++) {
    var temShape = theShapes_1[_i];
    console.log(temShape.getInfo());
}
console.log("\n\n\n --- print with loop end --- \n\n\n");
//# sourceMappingURL=Driver.js.map