const options = document.querySelector(".options").children;
const answerTrackerContainer = document.querySelector(".answers-tracker");
const questionNumberSpan = document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector(".total-question");
const correctAnswerSpan = document.querySelector(".correct-answers");
const totalQuestionSpan2 = document.querySelector(".total-question2");
const percentage = document.querySelector(".percentage");
const question = document.querySelector(".question");
const opt1 = document.querySelector(".option1");
const opt2 = document.querySelector(".option2");
const opt3 = document.querySelector(".option3");
const opt4 = document.querySelector(".option4");
let questionIndex;
let index = 0;
let myArray = [];
let score = 0;

const questions = [
    {
        q: "HTML stands for?",
        options: ["Hyper Text Markup Language", "Hyper Text Manufacture Language", "Hyper Test Markup Language", "Hyper Test Manufacture Language"],
        answer: 0
    },
    {
        q: "Which HTML attribute is used to reference an external JavaScript file?",
        options: ["rel", "href", "type", "src"],
        answer: 3
    },
    {
        q: "What does CSS stand for?",
        options: ["Computing Style Sheet", "Creative Style System", "Cascading Style Sheet", "Creative Styling Sheet"],
        answer: 2
    },
    {
        q: "JavaScript is a...?",
        options: ["Programming Language", "Text Markup Language", "Query Language", "Data Mining Tool"],
        answer: 0
    },
     {
        q: "DOM Stands for?",
        options: ["Document Object Mode", "Document Object Model", "Document Odd Model", "Document Object Modal"],
        answer: 1
    }
]

totalQuestionSpan.innerHTML = questions.length;
function load(){
    questionNumberSpan.innerHTML = index + 1;
    question.innerHTML = questions[questionIndex].q;
    opt1.innerHTML = questions[questionIndex].options[0];
    opt2.innerHTML = questions[questionIndex].options[1];
    opt3.innerHTML = questions[questionIndex].options[2];
    opt4.innerHTML = questions[questionIndex].options[3];
    index++;
}

function check(element){
    if (element.id == questions[questionIndex].answer){
        element.classList.add("correct");
        updateAnswerTracker("correct");
        score++;
    } else {
        element.classList.add("wrong");
        updateAnswerTracker("wrong");
    }
    disabledOptions();
}

function disabledOptions(){
    for (let i = 0; i < options.length; i++){
        options[i].classList.add("disabled");
        if (options[i].id == questions[questionIndex].answer){
            options[i].classList.add("correct");
        }
    }
}

function enableOptions(){
    for (let i = 0; i < options.length; i++){
        options[i].classList.remove("disabled", "correct", "wrong");
    }
}

function validate(){
    if (!options[0].classList.contains("disabled")){
        alert("Select an option");
    } else {
        enableOptions();
        randomQuestion();
    }
}

function randomQuestion(){
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = 0;
    if (index == questions.length){
        quizOver();
    } else {
        if (myArray.length > 0){
            for (let i = 0; i < myArray.length; i++){
                if(myArray[i] == randomNumber){
                    hitDuplicate = 1;
                    break;
                }
            } 
            if (hitDuplicate == 1){
                randomQuestion();
            } else { 
                questionIndex = randomNumber; 
                load();
            }
        }
        if (myArray.length == 0){
            questionIndex = randomNumber; 
            load();
    }
    
    }
    myArray.push(randomNumber);
}

function next(){
    validate();
}

function answerTracker(){
    for (let i = 0; i < questions.length; i++){
        const div = document.createElement("div");
        answerTrackerContainer.appendChild(div);
    }
}

function updateAnswerTracker(classNam){
    answerTrackerContainer.children[index - 1].classList.add(classNam);
}

function quizOver(){
    document.querySelector(".quiz-over").classList.add("show");
    correctAnswerSpan.innerHTML = score;
    totalQuestionSpan2.innerHTML = questions.length;
    percentage.innerHTML = (score/questions.length) * 100 + "%";
}

function tryAgain(){
    window.location.reload();
}

window.onload = function(){
   randomQuestion();
   answerTracker();
}
