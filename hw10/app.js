const inquirer = require("inquirer");
const fs = require("fs");


// inquirer.prompt([
//     {
//       type: "input",
//       name: "managerName",
//       message: "What is your manager's name?",
//     },
  
  

  
//     {
//       type: "input",
//       name: "managerId",
//       message: "What is your manager's ID?",
//     },
//     {
//       type: "input",
//       name: "managerEmail",
//       message: "What is your manager's email?",
//     },
//     {
//       type: "input",
//       name: "managerOfficeNumber",
//       message: "What is your manager's office ID?",
//     },
//   ]);
  
  
function askUser() {
    createManager()
  function createManager() {
      console.log("Please build your team");
      inquirer.prompt([
          {
              type: "input",
              name: "managerName",
              message: "What is your manager's name?",
              validate: answer => {
                  if (answer !== ""){
                      return true;
                  }
                  return "Please enter at least one character"
              }
          },
          {
              type: "input",
              name: "managerId",
              message: "What is your manager's ID?",
              validate: answer => {
                  const pass = answer.match(
                      /^[1-9]\d*$/
                  );
                  if (pass) {
                      return true;
                  }
                  return "Please enter positive number greater than zero"
              }
          },
          {
              type: "input",
              name: "managerEmail",
              message: "What is your manager's email?",
              validate: answer => {
                  const pass = answer.match(
                      /\S+@\S+\.\S+/
                  );
                  if (pass) {
                      return true;
                  }
                  return "Please enter valid email address"
              }
          },
          {
              type:"input",
              name: "managerOfficeNumber",
              message: "What is your manager's office number?",
              validate: answer => {
                  const pass = answer.match(
                      /^[1-9]\d*$/
                  );
                  if (pass) {
                      return true;
                  }
                  return "Please enter a positive number greater than zero"
              }
          }
      ]).then(uselessAnsers=>{
        console.log(uselessAnsers)
        createTeam()
      })
  }

  function createTeam() {
    inquirer.prompt([
      {
        type:"list",
        name:"createTeam",
        message:"Which team member you like to add?",
        choices:["engineer", "intern", "do not add anymore"],
      }
    ]).then(answers=>{
      switch(answers.createTeam){
        case "engineer":
          createEngineer()
          break;
        case "intern":
          createIntern()
          break;
        default:
          //build the team
          console.log("ready to build team")
      }
    })
  }
  //createEngineer()
  function createEngineer() {
      inquirer.prompt([
          {
              type: "input",
              name: "engineerName",
              message: "What is your engineer's name?",
              validate: answer => {
                  if (answer !== ""){
                      return true;
                  }
                  return "Please enter at least one character"
              }
          },
          {
              type: "input",
              name: "engineerId",
              message: "What is your engineer's ID?",
              validate: answer => {
                  const pass = answer.match(
                      /^[1-9]\d*$/
                  );
                  if (pass) {
                      return true;
                  }
                  return "Please enter positive number greater than zero"
              }
          },
          {
              type: "input",
              name: "engineerEmail",
              message: "What is your engineer's email?",
              validate: answer => {
                  const pass = answer.match(
                      /\S+@\S+\.\S+/
                  );
                  if (pass) {
                      return true;
                  }
                  return "Please enter valid email address"
              }
          },
          {
              type:"input",
              name: "engineerGithub",
              message: "What is your engineer's Github name?",
              validate: answer => {
                  const pass = answer.match(
                      /[a-zA-Z]+/
                  );
                  if (pass) {
                      return true;
                  }
                  return "Please enter valid Github name"
              }
          }
      ]).then(answer=>console.log("engineer", answer))
    

  }

  //createIntern()
  function createIntern() {
      inquirer.prompt([
          {
              type: "input",
              name: "internName",
              message: "What is your intern's name?",
              validate: answer => {
                  if (answer !== ""){
                      return true;
                  }
                  return "Please enter at least one character"
              }
          },
          {
              type: "input",
              name: "engineerId",
              message: "What is your intern's ID?",
              validate: answer => {
                  const pass = answer.match(
                      /^[1-9]\d*$/
                  );
                  if (pass) {
                      return true;
                  }
                  return "Please enter positive number greater than zero"
              }
          },
          {
              type: "input",
              name: "engineerEmail",
              message: "What is your intern's email?",
              validate: answer => {
                  const pass = answer.match(
                      /\S+@\S+\.\S+/
                  );
                  if (pass) {
                      return true;
                  }
                  return "Please enter valid email address"
              }
          },
          {
              type:"input",
              name: "internSchool",
              message: "What school is the intern with?",
              validate: answer => {
                  const pass = answer.match(
                      /[a-zA-Z]+/
                  );
                  if (pass) {
                      return true;
                  }
                  return "Please enter valid school name"
              }
          }
      ]).then(answer=>console.log("intern", answer))

  }

};

const output= require("./output.js")
output()

askUser();
// async function init(){
//   let myEmployess = []
//   let managerAnsers = await askUser()
//   let employe = new manager(managerAnsers)
//   myEmployess.push(employe)
//   console.log(myEmployess)
// }

// init()
// prompt askUser()
