"use strict";
var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = "";
        this._lastName = "";
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// let's create an instance
var myCustomer = new Customer("Martin", "Dixon");
myCustomer.firstName = "Martin 1.1";
myCustomer.lastName = "Dixon 1.1";
/*myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";*/
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
//# sourceMappingURL=Customer.js.map