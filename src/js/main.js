function createGameOverMessage(message) {
    document.getElementById("gameOverMessage").innerHTML = message;
    document.getElementById("restart").innerHTML = "Neustart";
    document.getElementById("event").close();
    document.getElementById("gameOver").show();
}

function gameOver() {
    if (population <= 0) {
        createGameOverMessage("Die Bevölkerung ist auf 0 gesunken. Das Spiel endet.");
    } else if (co2e >= 100) {
        createGameOverMessage("Die CO2e sind auf 100% gestiegen. Das Spiel endet.");
    } else if (afforestation <= 10) {
        createGameOverMessage("Die Bewaldung ist auf 10% gesunken. Das Spiel endet.");
    } else if (animalSpecies <= 0) {
        createGameOverMessage("Alle Tierarten sind ausgestorben. Das Spiel endet.");
    } else if (temperature >= 5) {
        createGameOverMessage("Die Temperatur ist um 5°C gestiegen. Das Spiel endet.");
    } else if (ozoneLayer <= 0) {
        createGameOverMessage("Die Ozonschicht ist auf 0% gesunken. Das Spiel endet.");
    } else if (waterLevel <= -10) {
        createGameOverMessage("Der Meeresspiegel ist um 10m gesunken. Das Spiel endet.");
	} else if (waterLevel >= 10) {
        createGameOverMessage("Der Meeresspiegel ist um 10m gestiegen. Das Spiel endet.");
    } else if (year >= 2023) {
        createGameOverMessage("Glückwunsch! Du hast das Spiel gewonnen.");
    }
}

function updateAttributes() {
    yearElem.innerHTML = year
    yearElem.style.left = ((year - 1900)/120)*100 + "%"
    yearElemPercent.style.width = ((year - 1900)/120)*100 + "%"
    
    budgetElem.innerHTML = convertNum(budget, 1) + " €"
    co2eElem.innerHTML = "CO2e: " + co2e.toFixed(3) + " %"
    afforestationElem.innerHTML = "Bewaldung: " + afforestation + " %"
    waterLevelElem.innerHTML = "Wasserlevel: " + waterLevel + " m"
    populationElem.innerHTML = "Bevölkerung: " + convertNum(population, 2)
    animalSpeciesElem.innerHTML = "Tierarten: " + convertNum(animalSpecies)
    temperatureElem.innerHTML = "Temperatur: " + temperature + " °C"
    ozoneLayerElem.innerHTML = "Ozonschicht: " + ozoneLayer + " %"
}

function main() {
    timedEvents() // check for timed Events, if not then newEvent()
    gameOver()
    populationIncrement() // increment population, later attribute Increment
} 

updateAttributes() // update attributes
main()
