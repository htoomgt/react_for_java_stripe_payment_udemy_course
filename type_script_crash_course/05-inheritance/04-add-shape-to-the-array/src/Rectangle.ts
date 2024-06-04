import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor(
        private _theX: number,
        private _theY: number,
        private _theWidth: number,
        private _theLength: number,
    ) {
        super(_theX, _theY);
    }

    public get width(): number {
        return this._theWidth;
    }
    public set width(value: number) {
        this._theWidth = value;
    }


    public get length(): number {
        return this._theLength;
    }

    public set length(value: number) {
        this._theLength = value;
    }


    public getInfo(): string {
        return super.getInfo() + `, width = ${this.width}, length = ${this.length}`;
    }


}