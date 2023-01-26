const generateTeam = (team) => {
    const html = [];

    const generateManager = manager => {
        let managerCard = `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h4>Manager</h4><i class="fa-solid fa-mug-hot"></i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${manager.employeeId}</p>
                    <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="office">Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>
        `;
        html.push(managerCard);
    }

    const generateEngineer = engineer => {
        let engineerCard = `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${engineer.name}</h3>
                    <h4>Engineer</h4><i class="fa-solid fa-glasses"></i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${engineer.employeeId}</p>
                    <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                </div>
            </div>
        </div>
        `;
        html.push(engineerCard);
    }

    const generateIntern = intern => {
        let internCard = `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${intern.name}</h3>
                    <h4>Intern</h4><i class="fa-solid fa-graduation-cap"></i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${intern.employeeId}</p>
                    <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="school">School: ${intern.school}</p>
                </div>
        </div>
    </div>
        `;
        html.push(internCard);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
           generateManager(team[i]); 
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]); 
         }
         if (team[i].getRole() === "Intern") {
            generateIntern(team[i]); 
         }
    }

    return html.join("");
}

module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <script
      src="https://kit.fontawesome.com/fc1e1c2b79.js"
      crossorigin="anonymous"
    ></script>
    </head>
    <body>
        <header>
        <h1> My Team </h1>
        </header>

        <main> ${generateTeam(team)} </main>
        
    </body>
    </html>`
};