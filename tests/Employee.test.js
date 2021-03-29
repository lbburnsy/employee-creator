const { expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("When called, creates a new Employee instance", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    })

    it("Sets a name value from the constructor", () => {
        const name = "John";
        const employee = new Employee(name);

        expect(employee.name).toBe(name);
    })

    it("Sets an id value from the constructor", () => {
        const id = 1;
        const employee = new Employee("John", id);

        expect(employee.id).toBe(id);
    })

    it("Sets an email value from the constructor", () => {
        const email = "fake@test.com";
        const employee = new Employee("John", 1, email);

        expect(employee.email).toBe(email);
    })

    describe("getName", () => {
        it("Returns a name value", () => {
            const name = "John";
            const employee = new Employee(name);

            expect(employee.getName()).toBe(name);
        })
    });

    describe("getID", () => {
        it("Returns an ID", () => {
            const id = 1;
            const employee = new Employee("John", id);

            expect(employee.getID()).toBe(id);
        })
    });

    describe("getEmail", () => {
        it("Returns an email", () => {
            const email = "fake@test.com";
            const employee = new Employee("John", 1, email);

            expect(employee.getEmail()).toBe(email);
        })
    });

    describe("getRole", () => {
        it("Returns a role", () => {
            const employee = new Employee();
            expect(employee.getRole()).toBe("Employee");
        })
    })
})