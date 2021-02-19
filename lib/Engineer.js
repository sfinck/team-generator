const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHubUsername) {
        super(name, id, email);
        this.gitHubUsername = gitHubUsername;
    }
    getGithub() {
        return this.gitHubUsername
    }
    getRole () {
        return 'Engineer'
    }
}

module.exports = Engineer


