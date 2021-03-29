const { describe, it, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("When called, creates a new Intern instance", () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
  });

  it("Sets a school from the constructor", () => {
    const school = "Test";
    const intern = new Intern("John", 1, "fake@test.com", school);

    expect(intern.school).toBe(school);
  });

  describe("getRole", () => {
    it("Returns intern instead of employee", () => {
      const intern = new Intern();
      expect(intern.getRole()).toBe("Intern");
    });
  });

  describe("getSchool", () => {
    it("Returns the school of the intern", () => {
      const school = "Test";
      const intern = new Intern("John", 1, "fake@test.com", school);

      expect(intern.getSchool()).toBe(school);
    });
  });
});
