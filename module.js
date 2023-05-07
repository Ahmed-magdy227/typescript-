"use strict";
exports.__esModule = true;
var Employeee = /** @class */ (function () {
    function Employeee(_name, _salary, _id) {
        this.name = _name;
        this.salry = _salary;
        this.id = _id;
    }
    Employeee.prototype.printData = function () {
        console.log("my name is" + this.name + "and salary is" + this.salry + "and id is" + this.id);
    };
    return Employeee;
}());
var emp1 = new Employeee("ahmed", 200, 3);
emp1.printData();
