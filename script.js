var currentIndex = 0;
var questionEl = document.querySelector("#question")
var answer1El = document.querySelector(".answer1")
var answer2El = document.querySelector(".answer2")
var answer3El = document.querySelector(".answer3")
var answer4El = document.querySelector(".answer4")
var answerButtons = document.querySelectorAll(".answer")
var count=100;

var questionsArray=[
    {
        question: "What are the 3 basic coding languages?",
        answer1: "1. Java, C++, HTML",
        answer2: "2. Javascript, HTML, Python",
        answer3: "3. CSS, HTML, Java",
        answer4: "4. CSS, Javascript, HTML",
        correctAnswer:"4. CSS, Javascript, HTML"
     },
     {
       question: "Which are all data types in Javascript?",
       answer1: "1. Number, String, Spoon",
       answer2: "2. Boolean, Fork, Undefined",
       answer3: "3. String, Boolean, Number",
       answer4: "4. Object, Null, Knife",
       correctAnswer:"3. String, Boolean, Number"
    },
    
     {
        question: "What does HTML stand for??",
        answer1: "1. Hyper Trainer Marking Language",
        answer2: "2. Hyper Text Marketing Language",
        answer3: "3. Hyper Text Markup Language",
        answer4: "4. Hyper Text Markup Leveler",
        correctAnswer:"3. Hyper Text Markup Language"
     },
     {
        question: "CSS stands for ____ Style Sheets.",
        answer1: "1. Cascading",
        answer2: "2. Curious",
        answer3: "3. Concept",
        answer4: "4. Canope",
        correctAnswer:"1. Cascading"
     },
    {
       question: "What is a JavaScript element that represents either TRUE or FALSE values?",
       answer1: "1. Condition",
       answer2: "2. RegExp",
       answer3: "3. Event",
       answer4: "4. Boolean",
       correctAnswer:"4. Boolean"
    }]
    //move setinterval into onclick
    //add onclick to start timer when game starts

    var counter=setInterval(timer, 1000);

    function timer() {
  count=count-1;
  if (count <= 0) {
     clearInterval(counter);
     //counter ended, do something here
     console.log("You Lose!")
  }
  document.getElementById("timer").innerHTML= "Time: " + count + " secs"; 
  //Do code for showing the number of seconds here
};

 document.getElementById("button").onclick = function(){
        displayQuestion();
    }



function displayQuestion() {
questionEl.textContent = questionsArray[currentIndex].question
answer1El.textContent = questionsArray[currentIndex].answer1
answer2El.textContent = questionsArray[currentIndex].answer2
answer3El.textContent = questionsArray[currentIndex].answer3
answer4El.textContent = questionsArray[currentIndex].answer4
}
//run after clicking start button


answerButtons.forEach(function(ansBtn) {
    ansBtn.addEventListener("click", function(event) {
        userGuess = event.target.textContent
        //create seperate function for correct answers
        if (userGuess===questionsArray[currentIndex].correctAnswer) {
            console.log("You got it right!")
            currentIndex++
            
        } else {
            console.log("WRONG")
        }//create function to handle wrong answers
        //add time for wrong answers to else
        //if else
        displayQuestion()
    })
})
//add an eventlistener for start button
//if-else for end of quiz
//look up how to create/use local storage