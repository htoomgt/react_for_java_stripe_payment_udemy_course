import { Shape } from "./Shape";

export class Circle extends Shape {

    constructor(private _theX: number, private _theY: number, private _radius: number) {
        super(_theX, _theY);
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(value: number) {
        this._radius = value;
    }

    public getInfo(): string {
        return super.getInfo() + `, radius=${this.radius}`;
    }

    public calculateArea(): number {
        return Math.pow(this._radius, 2) * Math.PI;
    }




}