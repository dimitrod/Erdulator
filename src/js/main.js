let budgetElems = Array.from(document.getElementsByClassName("budget"))
let beginOfGame = true
var helpimg = document.getElementById("helpimg")

function createGameOverMessage(message) {
    document.getElementById("gameOverMessage").innerHTML = message
    document.getElementById("restart").innerHTML = "Neustart"
    document.getElementById("questionDisplay").style.display = 'none'
    document.getElementById("info").style.display = 'none'
    document.getElementById("event").style.display = 'none'
    document.getElementById("gameOver").style.display ="block"
    document.getElementById("gameOverStatistic").innerHTML = "Du hast Insgesamt " + correctQuizzes + " von " + totalQuizzes + " Quizzes richtig beantwortet."
}

function gameOver() {
    if (population <= populationGameOver) createGameOverMessage("Die Bevölkerung ist auf 0 gesunken. Das Spiel endet.")
    else if (afforestation <= afforestationGameOver) createGameOverMessage("Die Bewaldung ist auf 10% gesunken. Das Spiel endet.")
    else if (temperature >= temperatureGameOver) createGameOverMessage("Die Temperatur ist um 5°C gestiegen. Das Spiel endet.") 
    else if (waterLevel <= -waterLevelGameOver) createGameOverMessage("Der Meeresspiegel ist um 10m gesunken. Das Spiel endet.")
    else if (waterLevel >= waterLevelGameOver) createGameOverMessage("Der Meeresspiegel ist um 10m gestiegen. Das Spiel endet.") 
    else if (year >= 2023) {
        document.getElementById("gameOver").style.borderColor = "gold"
        createGameOverMessage("Glückwunsch! Du hast das Spiel gewonnen.")
    }
}

function updateAttributes() {
    yearElem.innerHTML = year
    yearElem.style.left = ((year - 1900) / 125) * 100 + "%"
    yearElemPercent.style.width = ((year - 1900) / 125) * 100 + "%"
    
    afforestationElems.forEach(elem => {
        elem.innerHTML = "Bewaldung: " + afforestation.toFixed(1) + " %"
    })
    waterLevelElems.forEach(elem => {
        elem.innerHTML = "Wasserlevel: " + waterLevel.toFixed(1) + " m"
    })
    populationElems.forEach(elem => {
        elem.innerHTML = "Bevölkerung: " + convertNum(population, 2)
    })
    temperatureElems.forEach(elem => {
        elem.innerHTML = "Temperatur: " + temperature.toFixed(1) + " °C"
    })


    afforestationSlider.style.width = parseInt(afforestation)+"%";
    waterLevelSlider.style.width = parseInt(((waterLevel+10)/20)*100)+"%";
    populationSlider.style.width = parseInt(population/116500000)+"%";
    temperatureSlider.style.width = parseInt(((temperature+5)/10)*100)+"%";


    afforestationGrowthRateElem.innerHTML = "Wachstumsrate beträgt: " + afforestationGrowthRate.toFixed(3)
    waterLevelGrowthRateElem.innerHTML = "Wachstumsrate beträgt: " + waterLevelGrowthRate.toFixed(3)
    populationGrowthRateElem.innerHTML = "Wachstumsrate beträgt: " + populationGrowthRate.toFixed(3)
    temperatureGrowthRateElem.innerHTML = "Wachstumsrate beträgt: " + temperatureGrowthRate.toFixed(3)

    checkDanger()
}


helpimg.addEventListener("mousedown", function() {
    helpimg.src = "resource/help_pressed.png";
  });
  
  helpimg.addEventListener("mouseup", function() {
    helpimg.src = "resource/help.png";
  });
  







function main() {
    if (beginOfGame) newEvent() // Check ob es das erste Event ist Mithilfe von beginOfGame flag
    attributeCheck() // Attribute erreichen keine illegalen Bereiche
    attributeIncrement() // Attribute werden mit Wachstumsrate verändert
    timedEvents() // gibt es ein timedEvent? Wenn nicht newEvent()
    if (!currentEvent) makeQuiz() // Wenn kein Event an ist, mach ein Quiz
}

loadHelp()
loadUpgrades()
loadInvestments()
budgetElems = Array.from(document.getElementsByClassName("budget"))
// Erste Darstellung der Budgets
budgetElems.forEach(budgetElem => {
    budgetElem.innerHTML = convertNum(budget, 1) + "€"
})

updateAttributes() // update attributes
main()
