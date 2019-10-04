console.log("test")

//get input 
    // length: 8-128
    // confirms: special, numbers, lowercase, uppercase
var characters =[];//initialize empty array
console.log("1",characters)

var passLength= prompt("How long is your password gonna be?")//TODO: input validation
console.log("passLength",passLength)
console.log( typeof passLength)//TODO change string to number parseInt()

var special= confirm("do you want special characters");//return boolean
if(special){
    // add special characters to the character array
    var specialChars=["(", ")", "<", ">", "!", "?"]
    characters= characters.concat(specialChars)
}
console.log("2",characters)
//numbers

//lowercase

//upperase

//create the password
let password=""
    // for loop for number of characters
    for(let i =0; i<passLength; i++){
        //get character from character array via random number
        let random= Math.floor(Math.random()*characters.length)
        console.log(random)
        console.log(characters[random])
        password+= characters[random]
        //password=password+ whatever

    }
console.log("password",password)