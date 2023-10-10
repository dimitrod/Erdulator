beginOfGame = true

function createGameOverMessage(message) {
    document.getElementById("gameOverMessage").innerHTML = message
    document.getElementById("restart").innerHTML = "Neustart"
    document.getElementById("event").close()
    document.getElementById("gameOver").show()
}

function gameOver() {
    if (population <= 0) {
        createGameOverMessage("Die Bevölkerung ist auf 0 gesunken. Das Spiel endet.")
    } else if (afforestation <= 10.0) {
        createGameOverMessage("Die Bewaldung ist auf 10% gesunken. Das Spiel endet.")
    } else if (temperature >= 5) {
        createGameOverMessage("Die Temperatur ist um 5°C gestiegen. Das Spiel endet.")
    } else if (waterLevel <= -10) {
        createGameOverMessage("Der Meeresspiegel ist um 10m gesunken. Das Spiel endet.")
	} else if (waterLevel >= 10) {
        createGameOverMessage("Der Meeresspiegel ist um 10m gestiegen. Das Spiel endet.")
    } else if (year >= 2023) {
        createGameOverMessage("Glückwunsch! Du hast das Spiel gewonnen.")
    }
}

function updateAttributes() {
    yearElem.innerHTML = year
    yearElem.style.left = ((year - 1900) / 120) * 100 + "%"
    yearElemPercent.style.width = ((year - 1900) / 120) * 100 + "%"
    
    budgetElem.innerHTML = convertNum(budget, 1) + " €"
    afforestationElem.innerHTML = "Bewaldung: " + afforestation.toFixed(1) + " %"
    waterLevelElem.innerHTML = "Wasserlevel: " + waterLevel.toFixed(1) + " m"
    populationElem.innerHTML = "Bevölkerung: " + convertNum(population, 2)
    temperatureElem.innerHTML = "Temperatur: " + temperature.toFixed(1) + " °C"
}

function main() {
    if (beginOfGame) newEvent() // Check ob es das erste Event ist Mithilfe von beginOfGame flag
    timedEvents() // gibt es ein timedEvent? Wenn nicht newEvent()
    attributeCheck() // Attribute erreichen keine illegalen Bereiche
    gameOver() // Ist das Spiel vorbei?
    attributeIncrement() // Nächste Runde wird geladen
    if (!currentEvent) makeQuiz() // Wenn kein Event an ist, mach ein Quiz
} 

updateAttributes()
main()
