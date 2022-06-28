const Intern = require("../lib/intern.js")

// test to see if the intern constructor is working correctly
describe("Intern", () => {
    it("should create an intern object", () => {
       const intern = new Intern ("John", 123, "john@email.com", "Birmingham University");

        expect(intern.name).toEqual("John");
        expect(intern.id).toEqual(123);
        expect(intern.email).toEqual("john@email.com");
        expect(intern.school).toEqual("Birmingham University");
    });
});

// test individual intern properties
describe("getSchool", () => {
    it("should return the school of the intern", () => {
        const intern = new Intern("Bob", 123, "bob@email.com", "Birmingham University");

        expect(intern.getSchool()).toEqual("Birmingham University");
    });
});

describe("getRole", () => {
    it("should return the role of the intern", () => {
        const intern = new Intern("Peegor", 123, "peegor@email.com", "Birmingham University");

        expect(intern.getRole()).toEqual("intern");
    });
});
