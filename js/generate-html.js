const generateTeam = (team) => {
    console.log(team);
    const html = [];

const generateManager = manager => {
console.log(manager);
let managerHTML = `
<div class="card" style="width: 18rem;">
    <div class="card-header">
    ${manager.name} <br/>
    Manager</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${manager.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
        <li class="list-group-item">Office Number: ${manager.officeNum}</li>
    </ul>
</div>
`;
html.push(managerHTML);
};

const generateEngineer = engineer => {
    console.log(engineer);
    let engineerHTML = `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${engineer.name} <br/>
        Engineer</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineer.gitHubUser}">${engineer.gitHubUser}</a></li>
        </ul>
    </div>
    `;
    html.push(engineerHTML);
    };

const generateIntern = intern => {
console.log(intern);
let internHTML = `
<div class="card" style="width: 18rem;">
    <div class="card-header">
    ${intern.name} <br/>
    Intern</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${intern.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
        <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>
`;
html.push(internHTML);
};

for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "manager") {
        generateManager(team[i]);
    }
    if (team[i].getRole() === "intern") {
        generateIntern(team[i]);
    }
    if (team[i].getRole() === "engineer") {
        generateEngineer(team[i]);
    }
}

return html.join('');
};
// 72

module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/3aa9e9469d.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../css/style.css" />
        <title>Your Team Profile</title>
    </head>
    <body>
        <header>
        <h1>My Team Info</h1>
        </header>
        <main> ${generateTeam(team)} </main>
    </body>
    </html>
    `;
}