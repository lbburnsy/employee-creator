const { describe, it, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("When called, creates a new Manager instance", () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });

  it("Sets an office number from the constructor", () => {
    const officeNumber = 102;
    const manager = new Manager("John", 1, "fake@test.com", officeNumber);

    expect(manager.officeNumber).toBe(officeNumber);
  });

  describe("getRole", () => {
    it("Returns manager instead of employee", () => {
      const manager = new Manager();
      expect(manager.getRole()).toBe("Manager");
    });
  });

  describe("getOfficeNumber", () => {
    it("Returns the office number", () => {
      const officeNumber = 102;
      const manager = new Manager("John", 1, "fake@test.com", officeNumber);

      expect(manager.getOfficeNumber()).toBe(officeNumber);
    });
  });
});
