const Employee = require("../lib/employee.js")

// test to see if the employee constructor is working correctly
describe("Employee", () => {
    it("should create an employee object", () => {
       const employee = new Employee ("John", 123, "john@email.com");

        expect(employee.name).toEqual("John");
        expect(employee.id).toEqual(123);
        expect(employee.email).toEqual("john@email.com");
    });
});


// test individual employee properties
describe("getName", () => {
    it("should return the name of the employee", () => {
        const employee = new Employee("Bob", 123, "bob@email.com");

        expect(employee.getName()).toEqual("Bob");
    });
});

describe("getId", () => {
    it("should return the id of the employee", () => {
        const employee = new Employee("Peegor", 123, "peegor@email.com");

        expect(employee.getId()).toEqual(123);
    });
});

describe("getEmail", () => {
    it("should return the email of the employee", () => {
        const employee = new Employee("Jane", 123, "jane@email.com");

        expect(employee.getEmail()).toEqual("jane@email.com");
    });
});

describe("getRole", () => {
    it("should return the role of the employee", () => {
        const employee = new Employee("Bart", 123, "bart@email.com");

        expect(employee.getRole()).toEqual("employee");
    });
});