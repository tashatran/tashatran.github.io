var inquirer = require("inquirer");
var mysql = require("mysql");
var express = require("express");
var table = require('console.table');


var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "Hellotashatran123?",
    database: "Employee_tracker_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    
  });


function ask(){
return inquirer.prompt({
    type: "list",
    name: "switch",
    message: "what do you want to do?",
    choices: [
        "view all employees",

        "Add departments", "add roles", "add employees"

        // View departments, roles, employees
        
        // Update employee roles
        
    ]
})

}
 function switcher(){
   ask().then(answer=>{
       console.log(answer)
    
       switch (answer.switch) {
           case 'view all employees':
               console.log("lets view them all")
               viewAllEmployees()
               break;
       
           default:
               console.log("that didn't work")
               break;
       }
    
    
    })
  
}
function viewAllEmployees(){
    connection.query("SELECT employee.first_name, employee.last_name, employee_role.title as job, employee_role.salary as salary FROM employee Join employee_role on employee.role_id= employee_role.id;",function(err,res){
        console.table(res)
    })
}
switcher();

