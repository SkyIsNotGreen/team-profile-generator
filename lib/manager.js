const employee = require("../lib/employee.js");

class manager extends employee {

    constructor(name, id, email, officeLocation) {
        super(name, id, email);
        this.officeLocation = officeLocation;
    }

    getOfficeLocation() {
        return this.officeLocation;
    }
    
    
    getRole() {
        return "manager"
    }
}

module.exports = manager;