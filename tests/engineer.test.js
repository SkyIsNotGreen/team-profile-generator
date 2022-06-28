const Engineer = require("../lib/engineer.js")

// test to see if the engineer constructor is working correctly
describe("Engineer", () => {
    it("should create an engineer object", () => {
       const engineer = new Engineer ("John", 123, "john@email.com", "john123");

        expect(engineer.name).toEqual("John");
        expect(engineer.id).toEqual(123);
        expect(engineer.email).toEqual("john@email.com");
        expect(engineer.github).toEqual("john123");
    });
});

// test individual engineer properties

describe("getGithub", () => {
    it("should return the github username of the engineer", () => {
        const engineer = new Engineer("Bob", 123, "john@email.com", "bob123");

        expect(engineer.getGithub()).toEqual("bob123");
    });
});

describe("getRole", () => {
    it("should return the role of the engineer", () => {
        const engineer = new Engineer("Peegor", 123, "peegor@email.com", "peegor123");

        expect(engineer.getRole()).toEqual("engineer");
    });
});



