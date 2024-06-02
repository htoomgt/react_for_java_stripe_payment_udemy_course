class Customer {
    private _firstName: string = "";
    private _lastName: string = "";

    constructor(theFirst: string, theLast: string) {
        this.setFirstName(theFirst);
        this.setLastName(theLast);
    }

    public getFirstName(): string {
        return this._firstName;
    }

    public setFirstName(value: string) {
        this._firstName = value;
    }

    public getLastName(): string {
        return this._lastName;
    }

    public setLastName(value: string) {
        this._lastName = value;
    }
}

// let's create an instance
let myCustomer = new Customer("Martin", "Dixon");



/*myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";*/

console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
