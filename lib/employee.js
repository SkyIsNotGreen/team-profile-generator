// class for employee
class employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // function to get name
    getName() {
      return this.name;
    }
    
    // function to get ID
    getId() {
        return this.id;
    }

    // function to get email
    getEmail() {
        return this.email;
    }
    
    // function to get role
    getRole() {
        return "employee"
    }
}

module.exports = employee;