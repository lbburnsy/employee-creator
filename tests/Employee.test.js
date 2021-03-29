const { expect, it } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("When called, creates a new Employee instance", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });

    describe("getName", () => {

    });

    describe("getID", () => {

    });

    describe("getEmail", () => {

    });

    describe("getRole", () => {

    })
})