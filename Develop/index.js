// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
const inquirer=require("inquirer");
inquirer.prompt([
    {
        type:"input",
        name:"firstName",
        message:"Enter your First Name"
    },
    {
        type:"input",
        name:"lastName",
        message:"Enter your Last Name"
    },
    { type:"input",
        from:"Where are you from",
        message:"Enter Where are you from",
        name:"from"
    },
    { type:"input",
        hobby:"What is your favorite hobby",
        message:"Enter your favorite hobby",
        name:"hobby"
    },
    { type:"input",
        food:"What is your favorite food",
        message:"Enter your favorite food",
        name:"food"
    },
    { type:"input",
        GitHub:"What is your GitHub Username",
        message:"Enter your github Username",
        name:"github"
    },
    { type:"input",
        LinkedIn:"What is your LinkedIn URL",
        message:"Enter your LinkedIn URL",
        name:"linkedIn"
    },
]).then(result=>{

const html=`<!DOCTYPE html>
<html>
<head>
<title>Portfolio</title>
</head>
<body>
Hi, my name is ${result.firstName}
</body>
</html>`;  

console.log(result.firstName,result.lastName,result.from,result.hobby,result.food,result.github,result.linkedIn);

});

