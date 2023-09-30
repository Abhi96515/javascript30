const questions = [
    {
        question:"What is largest animal in the world?",
        answers:[
            {text:'Shark', correct:"false"},
            {text:'Elephant', correct:"false"},
            {text:'Tiger', correct:"false"},
            {text:'Blue whale', correct:"true"}
        ]
    },
    {
        question:"What is the color of Danger?",
        answers:[
            {text:'Red', correct:"true"},
            {text:'Yellow', correct:"false"},
            {text:'Blue', correct:"false"},
            {text:'Green', correct:"false"}
        ]
    },
    {
        question:"How many Fingers are there in one hand?",
        answers:[
            {text:'3', correct:"false"},
            {text:'4', correct:"false"},
            {text:'6', correct:"false"},
            {text:'5', correct:"true"}
        ]
    },
    {
        question:"Which Planet is biggest in sola system?",
        answers:[
            {text:'Jupiter', correct:"false"},
            {text:'Saturn', correct:"false"},
            {text:'Uranus', correct:"false"},
            {text:'Neptune', correct:"true"}
        ]
    }
]

const questionElement = document.getElementById("question")
const answerButoons = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex=0;
let score=0

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question

    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add("btn")
        answerButoons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",seleteAnswer)
    })

}


function resetState(){
    nextButton.style.display="none";
    while(answerButoons.firstChild){
        answerButoons.removeChild(answerButoons.firstChild)
    }
}

function seleteAnswer(e){
    const selectBtn = e.target;
    const iscorrect = selectBtn.dataset.correct ==="true";
    if(iscorrect){
        selectBtn.classList.add("correct");
        score++
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButoons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled = true;

    })
    nextButton.style.display="block"
}

function showScore(){
    resetState()
    questionElement.innerHTML=`Your score ${score} out of${questions.length}`
    nextButton.innerHTML= 'Play Again'
    nextButton.style.display = 'block'
}
function hadleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }else{
        showScore()
    }

}

nextButton.addEventListener('click',()=>{
     if(currentQuestionIndex<questions.length){
        hadleNextButton()
     }else{
        startQuiz
     }
})
startQuiz()