let currentQuestions = []
const answers = [document.getElementById("answer0"), document.getElementById("answer1"), document.getElementById("answer2")]

function makeQuiz(){
    if (quiz.length == 0){document.getElementById("emptyQuiz").style.display="block"}
    else{
        let amountOfQuestions = Math.floor(Math.random() * 3 +1)
        while (quiz.length !== 0 && amountOfQuestions !== 0){
            let randomNumber =Math.floor(Math.random()*quiz.length)
            let question = quiz.splice(randomNumber, 1)
            currentQuestions.push(question[0]) // slice removed die Frage und gibt ein array mit den removeten Fragen zurück
            --amountOfQuestions
        }
        displayQuestionFromQueue()
    }
}

function displayQuestionFromQueue(){
    document.getElementById("questionDisplay").style.display = "block"
    document.getElementById("quizQuestion").innerHTML = currentQuestions[0].question
    for (let i = 0; i < answers.length; i++) {
        answers[i].innerHTML = currentQuestions[0].choices[i]
    }
}

function nextCloseDecider(){
    if (currentQuestions.length == 0){
        timeIncrement();
    }else{
        document.getElementById("information").style.display="none"
        displayQuestionFromQueue()
    }
}
function evaluateAnswer(i){
    if (currentQuestions.length == 1)document.getElementById("NextClose").innerHTML="Close"
    document.getElementById("questionDisplay").style.display = "none"
    document.getElementById("information").style.display ="block"
    if (i === currentQuestions[0].answer){
        document.getElementById("answer").innerHTML= "Richtig!"
        budget += 2
        budgetElem.innerHTML = "Budget: " + budget + " Mio €"
    }else{
        document.getElementById("answer").innerHTML= "Falsch!"
    }
    document.getElementById("background").innerHTML = currentQuestions[0].information
    currentQuestions.splice(0,1)
}

