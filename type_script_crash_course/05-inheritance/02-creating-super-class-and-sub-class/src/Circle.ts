import { Shape } from "./Shape";

export class Circle extends Shape {

    constructor(private _theX: number, private _theY: number, private _radius: number) {
        super(_theX, _theY);
    }

    public getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }




}