"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(_theX, _theY, _theWidth, _theHeight) {
        super(_theX, _theY);
        this._theX = _theX;
        this._theY = _theY;
        this._theWidth = _theWidth;
        this._theHeight = _theHeight;
    }
    getInfo() {
        return super.getInfo() + `, width = ${this._theWidth}, height = ${this._theHeight}`;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map