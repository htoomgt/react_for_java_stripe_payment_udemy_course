import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor(
        private _theX: number,
        private _theY: number,
        private _theWidth: number,
        private _theHeight: number,
    ) {
        super(_theX, _theY);
    }

    public getInfo(): string {
        return super.getInfo() + `, width = ${this._theWidth}, height = ${this._theHeight}`;
    }


}