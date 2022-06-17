const employee = require("../lib/employee.js");

class manager extends employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    getRole() {
        return "manager"
    }
}

module.exports = manager;