"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(_theX, _theY, _theWidth, _theLength) {
        var _this = _super.call(this, _theX, _theY) || this;
        _this._theX = _theX;
        _this._theY = _theY;
        _this._theWidth = _theWidth;
        _this._theLength = _theLength;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._theWidth;
        },
        set: function (value) {
            this._theWidth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "length", {
        get: function () {
            return this._theLength;
        },
        set: function (value) {
            this._theLength = value;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ", width = ".concat(this.width, ", length = ").concat(this.length);
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map