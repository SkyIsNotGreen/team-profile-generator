// dependencies
const employee = require("../lib/employee.js")
const manager = require("../lib/manager.js")
const intern = require("../lib/intern.js")
const engineer = require("../lib/engineer.js");

// create html cards based on employee data
const createManagerCard = (manager) => {

    return `        
    <div style="width: 18rem; padding: 10px;">
    <div class="card-header bg-primary text-white">
      <h4>${manager.getName()}</h4>
      <h5>${manager.getRole()}</h5>
    </div>
    <div class="card-body" style="background-color:#D9D9D9;">
      <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office: ${manager.officeNumber}</li>
      </ul>
    </div>
  </div>
  `
}

const createEngineerCard = (engineer) => {

    return `
    <div style="width: 18rem; padding: 10px;">
    <div class="card-header bg-primary text-white">
      <h4>${engineer.getName()}</h4>
      <h5>${engineer.getRole()}</h5>
    </div>
    <div class="card-body" style="background-color:#D9D9D9;">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
      </ul>
    </div>
  </div>
  `
}

const createInternCard = (intern) => {

    return `
    <div style="width: 18rem; padding: 10px;">
    <div class="card-header bg-primary text-white">
      <h4>${intern.getName()}</h4>
      <h5>${intern.getRole()}</h5>
    </div>
    <div class="card-body" style="background-color:#D9D9D9;">
      <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>
  `
}

// create rest of html file based on employee data and place card where appropriate

const createHTML = (staff) => {

    const cards = staff.map(employee => {
        if (employee.getRole() === "manager") {
            return createManagerCard(employee);
        } else if (employee.getRole() === "engineer") {
            return createEngineerCard(employee);
        } else if (employee.getRole() === "intern") {
            return createInternCard(employee);
        }
    }).join("");

    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <title>Team Profile</title>
  </head>
  
  <body>

    <header class="container">
      <h1 class="text-center" style="padding: 20px;">My Team</h1>
    </header>
    
    <main class="container">

      <div class="row justify-content-center">

        ${cards}

        </div>
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" 
    integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" 
    crossorigin="anonymous" 
    referrerpolicy="no-referrer"></script>


    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" 
    integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" 
    crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" 
    integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" 
    crossorigin="anonymous"></script>
    
  </body>
</html>

`
}

module.exports = createHTML;