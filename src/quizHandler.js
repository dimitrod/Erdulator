let currentQuestion = undefined;
const answers = [document.getElementById("answer0"), document.getElementById("answer1"), document.getElementById("answer2")]
function newQuestion() {
    document.getElementById("question").style.display = "block"
    currentQuestion = quiz[Math.floor(Math.random()*quiz.length)]
    document.getElementById("quizQuestion").innerHTML = currentQuestion.question
    for (let i = 0; i < answers.length; i++) {
        answers[i].innerHTML = currentQuestion.choices[i]
    }
}
// gets called by pressing the answer button
function evaluateAnswer(i){
    document.getElementById("question").style.display = "none"
    document.getElementById("information").style.display ="block"
    if (i === currentQuestion.answer){
        document.getElementById("answer").innerHTML= "Richtig!"
        budget += 2
        budgetElem.innerHTML = "Budget: " + budget + " Mio €"
    }else{
        document.getElementById("answer").innerHTML= "Falsch!"

    }
    document.getElementById("background").innerHTML = currentQuestion.information
}


