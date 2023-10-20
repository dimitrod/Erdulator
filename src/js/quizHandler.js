let totalQuizzes = 0
let correctQuizzes = 0
let currentQuestions = []
let quizStreak = 0
let quizAnswer = false
let amount
const answers = [document.getElementById("answer0"), document.getElementById("answer1"), document.getElementById("answer2")]
const rewardElem = document.getElementsByClassName("budgetGrowthWrapper")

function makeQuiz(){
    if (quiz.length == 0) {
        document.getElementById("emptyQuiz").style.display="block"
    }
    else {
        if (!amount) amountOfQuestions = Math.floor(Math.random() * 3 +1)
        else amountOfQuestions = amount
        while (quiz.length !== 0 && amountOfQuestions !== 0){
            let randomNumber =Math.floor(Math.random()*quiz.length)
            let question = quiz.splice(randomNumber, 1)
            currentQuestions.push(question[0]) // slice removed die Frage und gibt ein array mit den removeten Fragen zurück
            --amountOfQuestions
            totalQuizzes++
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
    if (currentQuestions.length == 0) {
        main()
    }
    else {
        document.getElementById("information").style.display="none"
        displayQuestionFromQueue()
    }
}

function evaluateAnswer(i){
    if (currentQuestions.length == 1) {
        document.getElementById("NextClose").innerHTML="Schließen"
    }
    document.getElementById("questionDisplay").style.display = "none"
    document.getElementById("information").style.display ="block"
    if (i == currentQuestions[0].answer){
        document.getElementById("answer").innerHTML= "Richtig!"
        reward = currentQuestions[0].reward * Math.pow(10, 6)
        correctQuizzes++
        quizAnswer = true
        quizStreakBonus()
        updateBudget(reward)
    } else {
        document.getElementById("answer").innerHTML= "Falsch!"
        quizAnswer = false
        quizStreak = 0
    }
    document.getElementById("background").innerHTML = currentQuestions[0].information
    currentQuestions.splice(0,1)
}

function quizStreakBonus() {
    if (quizAnswer) {
        quizStreak++
        if (quizStreak >= 3) reward += 2 * 10 ** 6
            if (quizStreak >= 5) reward += 2 * 10 ** 6
    }
}
