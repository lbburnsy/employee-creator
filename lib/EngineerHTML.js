const Engineer = require("./Engineer");

class EngineerHTML extends Engineer {
    constructor(name, id, email, github) {
        super(name, id, email, github);
    }

    getCode() {
        let html = 
        `
        <div class="col-4 padding">
          <div class="card">
            <div class="card-header">
              <h2>${this.name}</h2>
              <p><i class="fas fa-glasses"></i> Engineer</p>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: ${this.email}</li>
                <li class="list-group-item"><a href="https://github.com/${this.github}" target="blank">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        `

    return html;
    }
}

module.exports = EngineerHTML