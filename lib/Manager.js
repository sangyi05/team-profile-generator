const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, office) {
        super (name, id, email)
        this.office = office
        this.title = "Manager"
    }

    getTitle(){
        return this.title;
    }

    getOffice(){
        return this.office;
    }

}

module.exports = Manager