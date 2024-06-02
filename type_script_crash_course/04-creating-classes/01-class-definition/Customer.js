var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Customer.prototype.getFirstName = function () {
        return this._firstName;
    };
    Customer.prototype.setFirstName = function (value) {
        this._firstName = value;
    };
    Customer.prototype.getLastName = function () {
        return this._lastName;
    };
    Customer.prototype.setLastName = function (value) {
        this._lastName = value;
    };
    return Customer;
}());
// let's create an instance
var myCustomer = new Customer("Martin", "Dixon");
/*myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";*/
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
