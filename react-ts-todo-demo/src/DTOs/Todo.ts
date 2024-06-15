export class Todo {

    constructor(private _rowNumber: string, private _rowDescription: string, private _rowAssigned: string) {
    }


    public get rowNumber(): string {
        return this._rowNumber;
    }

    public set rowNumber(value: string) {
        this._rowNumber = value;
    }

    public get rowDescription(): string {
        return this._rowDescription;
    }

    public set rowDescription(value: string) {
        this._rowDescription = value;
    }


    public get rowAssigned(): string {
        return this._rowAssigned;
    }

    public set rowAssigned(value: string) {
        this._rowAssigned = value;
    }
}