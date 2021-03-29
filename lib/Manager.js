const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
}

console.log(new Manager);