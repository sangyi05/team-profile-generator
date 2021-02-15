const inquirer = require("inquirer");
const fs = require('fs')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const finalTeam = []

const managerAnswers = () => {
    return inquirer.prompt ([
        {
            type:"input",
            name:"name",
            message:"Enter the manager's name."
        },
        {
            type:"input",
            name: "id",
            message: "Enter the manager's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manager's email address."
        },
        {
            type: "input",
            name: "office",
            message: "Enter the manager's office number."
        }
    ])

    .then(function(data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const office = data.office
        const manager = new Manager(name, id, email, office)
        finalTeam.push(manager)
        menu ()
    })
};

const menu = () => {
    return inquirer.prompt ([
        {
            type:"list",
            name:"options",
            message:"What would you like to add next?",
            choices: ["Engineer", "Intern", "Finish building my team"]
        }
    ])
    .then (({ options }) => {
        if (options === "Engineer") {
            selectEngineer()

        } else if (options === "Intern") {
            selectIntern()

        } else if (options === "Finish building my team") 
            generateHtml()
        })  
}

const selectEngineer = () => {
    return inquirer.prompt ([
        {
            type:"input",
            name:"name",
            message:"Enter the engineer's name."
        },
        {
            type:"input",
            name: "id",
            message: "Enter the engineer's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address."
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub?"
        }
    ])

    .then(function(data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const github = data.github
        const engineer = new Engineer(name, id, email, github)
        finalTeam.push(engineer)
        menu()
    })
};

const selectIntern = () => {
    return inquirer.prompt ([
        {
            type:"input",
            name:"name",
            message:"Enter the intern's name."
        },
        {
            type:"input",
            name: "id",
            message: "Enter the intern's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address."
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school."
        }
    ])

    .then(function(data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const school = data.school
        const intern = new Intern(name, id, email, school)
        finalTeam.push(intern)
        menu()
    })
};

function generateHtml() { 
    const html = 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    </head>
    <body>
    <header>
        <h1>Team Profile Generator</h1>
    </header>
    <main>
        <section>    
            <div>${finalTeam[0].name}</div>
            <div>${finalTeam[0].id}</div>
            <div><a href="mailto:${finalTeam[0].email}"></a></div>
            <div>${finalTeam[0].office}</div>
        <section> 
        <section>    
            <div>${finalTeam[1].name}</div>
            <div>${finalTeam[1].id}</div>
            <div>${finalTeam[1].email}</div>
            <div>GitHub<a href="https://github.com/${finalTeam[1].github}"></a></div>
        <section>  
        <section>    
            <div>${finalTeam[2].name}</div>
            <div>${finalTeam[2].id}</div>
            <div>${finalTeam[2].email}</div>
            <div>${finalTeam[2].school}</div>
        <section> 
    </main>
    <footer>
    </footer>
    </body>
    </html>
    `
    console.log(html)

    fs.writeFile("index.html", html, function(err) {
        if (error) {
            return console.log(error);
        }
    
    })
}


managerAnswers()