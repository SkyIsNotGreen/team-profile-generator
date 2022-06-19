const Manager = require("../lib/manager.js")

// test to see if the manager constructor is working correctly
describe("Manager", () => {
    it("should create a manager object", () => {
       const manager = new Manager ("John", 123, "john@email.com", "Birmingham University");

        expect(manager.name).toEqual("John");
        expect(manager.id).toEqual(123);
        expect(manager.email).toEqual("john@email.com");
        expect(manager.officeLocation).toEqual("Birmingham University");
    });
});

// test individual manager properties
describe("getOfficeLocation", () => {
    it("should return the office location of the manager", () => {
        const manager = new Manager("Bob", 123, "bob@email.com", "Birmingham University");

        expect(manager.getOfficeLocation()).toEqual("Birmingham University");
    });
});

describe("getRole", () => {
    it("should return the role of the manager", () => {
        const manager = new Manager("Peegor", 123, "peegor@email.com", "Birmingham University");

        expect(manager.getRole()).toEqual("manager");
    });
});

