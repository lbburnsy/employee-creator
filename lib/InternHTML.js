const Intern = require("./Intern");

class InternHTML extends Intern {
    constructor(name, id, email, school) {
        super(name, id, email, school)
    }

    getCode() {
        let html = 
        `
        <div class="col-4 padding">
            <div class="card">
              <div class="card-header">
                <h2>${this.name}</h2>
                <p><i class="fas fa-user-graduate"></i> Intern</p>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${this.id}</li>
                  <li class="list-group-item">Email: ${this.email}</li>
                  <li class="list-group-item">School: ${this.school}</li>
                </ul>
              </div>
            </div>
          </div>
        `

        return html;
    }
}

module.exports = InternHTML;