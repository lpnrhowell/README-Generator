// TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
function init() {
// // const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./Develop/utils/markDown.js");
const path = require("path");


//  array of questions for user
// const questions = {

// const inquirer = require("inquirer");
// const { Console } = require("console");
inquirer.prompt([
    {
        type:"input",
        message:"What is the title of your project",
        name:"Title",
    },
    {
        type:"input",
        message:"Please write a discription of your project?",
        name:"Discription"
    },
    { 
        type:"input",
        message:"Installation instructions",
        name:"Install"
    },
    { 
        type:"input",
        message:"Explain how to use the app",
        name:"Usage"
    },
    { 
        type:"List",
        message:"Which License are you using?",
        name:"License",
        choices: [
            "MIT LIcense",
            "GVL GPL License",
            "Apache License",
            "No License"
        ],
    },
    { 
        type:"input",
        message:"Are there any Contributions?",
        name:"Contributions"
    },
    { 
        type:"input",
        message:"How to test the app",
        name:"Test"
    },
    { 
        type:"input",
        message:"Any Questions?",
        name:"Questions"
    },
    { type:"input",
        message:"What is your github UserName",
        name:"Github"
    },
    { 
        type:"input",
        message:"What is your email?",
        name:"Email"
    }

])
  .then((response) => {
    return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
  });
}

init();
// .then(result=> {
// console.log
// (result.Title,result.Discription,result.Install,result.Usage,result.License,result.Contributions,result.Test, result.Questions, result.Github, result. Email);

// const html=`<!DOCTYPE html>
// <html>
// <head>
// <title>Portfolio</title>
// </head>
// <body>
// Hi, my name is ${result.firstName}
// </body>
// </html>`;  

// console.log(html)
// }
//  Function to write File
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         if (err) {
//           throw err;
//         }
//         console.log("ReadMe was created");
//       });
//     }

// // function to initialize program
// function init() {
//     inquirer.prompt(questions).then((answers) => {

//         const response = markDown(answers);
//         console.log(answers);

//         writeToFile("README.md" , response);

//     });   

// }
