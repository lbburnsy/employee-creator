const { describe, it, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("When called, creates a new Engineer instance", () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
  });

  it("Sets a github value from the constructor", () => {
    const value = "test";
    const engineer = new Engineer("John", 1, "fake@test.com", value);

    expect(engineer.github).toBe(value);
  });

  describe("getRole", () => {
    it("Returns engineer instead of employee", () => {
      const engineer = new Engineer();
      expect(engineer.getRole()).toBe("Engineer");
    });
  });

  describe("getGithub", () => {
    it("Returns a link to the github account", () => {
      const value = "test";
      const engineer = new Engineer("John", 1, "fake@test.com", value);

      expect(engineer.getGithub()).toBe(value);
    });
  });
});
