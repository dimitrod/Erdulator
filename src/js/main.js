let budgetElems = Array.from(document.getElementsByClassName("budget"))
let beginOfGame = true

function createGameOverMessage(message) {
    document.getElementById("gameOverMessage").innerHTML = message
    document.getElementById("restart").innerHTML = "Neustart"
    document.getElementById("questionDisplay").style.display = 'none'
    document.getElementById("info").style.display = 'none'
    document.getElementById("event").style.display = 'none'
    document.getElementById("gameOver").style.display ="block"
}

function gameOver() {
    if (population <= populationGameOver) createGameOverMessage("Die Bevölkerung ist auf 0 gesunken. Das Spiel endet.")
    else if (afforestation <= afforestationGameOver) createGameOverMessage("Die Bewaldung ist auf 10% gesunken. Das Spiel endet.")
    else if (temperature >= temperatureGameOver) createGameOverMessage("Die Temperatur ist um 5°C gestiegen. Das Spiel endet.") 
    else if (waterLevel <= -waterLevelGameOver) createGameOverMessage("Der Meeresspiegel ist um 10m gesunken. Das Spiel endet.")
    else if (waterLevel >= waterLevelGameOver) createGameOverMessage("Der Meeresspiegel ist um 10m gestiegen. Das Spiel endet.") 
    else if (year >= 2023) createGameOverMessage("Glückwunsch! Du hast das Spiel gewonnen.")
}

function updateAttributes() {
    yearElem.innerHTML = year
    yearElem.style.left = ((year - 1900) / 120) * 100 + "%"
    yearElemPercent.style.width = ((year - 1900) / 120) * 100 + "%"
    
    afforestationElem.innerHTML = "Bewaldung: " + afforestation.toFixed(1) + " %"
    waterLevelElem.innerHTML = "Wasserlevel: " + waterLevel.toFixed(1) + " m"
    populationElem.innerHTML = "Bevölkerung: " + convertNum(population, 2)
    temperatureElem.innerHTML = "Temperatur: " + temperature.toFixed(1) + " °C"

    afforestationGrowthRateElem.innerHTML = "Wachstumsrate beträgt: " + afforestationGrowthRate.toFixed(3)
    waterLevelGrowthRateElem.innerHTML = "Wachstumsrate beträgt: " + waterLevelGrowthRate.toFixed(3)
    populationGrowthRateElem.innerHTML = "Wachstumsrate beträgt: " + populationGrowthRate.toFixed(3)
    temperatureGrowthRateElem.innerHTML = "Wachstumsrate beträgt: " + temperatureGrowthRate.toFixed(3)
}

function main() {
    if (beginOfGame) newEvent() // Check ob es das erste Event ist Mithilfe von beginOfGame flag
    attributeCheck() // Attribute erreichen keine illegalen Bereiche
    attributeIncrement() // Attribute werden mit Wachstumsrate verändert
    timedEvents() // gibt es ein timedEvent? Wenn nicht newEvent()
    if (!currentEvent) makeQuiz() // Wenn kein Event an ist, mach ein Quiz
}

// Erste Darstellung der Budgets
budgetElems.forEach(budgetElem => {
    budgetElem.innerHTML = convertNum(budget, 1) + "€"
})

loadUpgrades()
updateAttributes() // update attributes
main()
