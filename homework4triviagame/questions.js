console.log("test")

var questions = [
    {
          prompt: "Who is Beyonce married to ?\n(a) Bob Dylan\n\ (b) Jay Z\n(c) Kanye",
          answer: "b"
    },
    {
         prompt: "Who is Greta Thunberg?\n(a) climate activistl\n\ (b) singer\n(c) actor",
         answer: "a"
    },
    {
         prompt: "Who is the first president of the United States?\n(a) Barack Obama\n\ (b) George Washington\n(c) Bob Dylan",
         answer: "b"
    }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score++;
         alert("Correct!");
    } else {
         alert("WRONG!");
    }
}
alert("you got " + score + "/" + questions.length);


