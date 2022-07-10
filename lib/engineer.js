const employee = require("./employee");

class engineer extends employee {
    constructor(name, id, email, gitHubUser) {
        super(name, id, email);

        this.gitHubUser = gitHubUser;
    }

    getGitHubUser() {
        return this.gitHubUser
    }

    getRole() {
        return "engineer";
    }
    
}

module.exports = engineer;