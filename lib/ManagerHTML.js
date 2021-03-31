const Manager = require("./Manager");

class ManagerHTML extends Manager {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber)
    }

    getCode() {
        let html = 
        `
        <div class="col-4 padding">
          <div class="card">
            <div class="card-header">
              <h2>${this.name}</h2>
              <p><i class="fas fa-mug-hot"></i> Manager</p>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: ${this.email}</li>
                <li class="list-group-item">Office Number: ${this.officeNumber}</li>
              </ul>
            </div>
          </div>
        </div>
        `
    return html;
    }
}

module.exports = ManagerHTML;