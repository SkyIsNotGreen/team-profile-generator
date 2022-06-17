const employee = require("../lib/employee.js");

class engineer extends employee {
    
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    
    // function to get github username
    getGithub() {
        return this.github;
    }
    
    // function to get role
    getRole() {
        return "engineer"
    }
}

module.exports = engineer;