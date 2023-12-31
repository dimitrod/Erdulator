let budgetElems = Array.from(document.getElementsByClassName("budget"))

var helpimg = document.getElementById("helpimg")

function createGameOverMessage(message) {
    document.getElementById("gameOverMessage").innerHTML = message
    document.getElementById("restart").innerHTML = "Neustart"
    document.getElementById("questionDisplay").style.display = 'none'
    document.getElementById("info").style.display = 'none'
    document.getElementById("event").style.display = 'none'
    document.getElementById("gameOver").style.display = "inline-block"
    document.getElementById("gameOverStatistic").innerHTML = "Du hast Insgesamt " + correctQuizzes + " von " + totalQuizzes + " Quizfragen richtig beantwortet."
    document.getElementById("upgradeWindowButton").disabled = true
}

function gameOver() {
    if (population <= populationGameOver) createGameOverMessage("Die Bevölkerung ist auf 0 gesunken - alle Menschen sind gestorben. Vielleicht ein gutes Spielende für den Planeten?")
    else if (population >= populationGameOverMax) createGameOverMessage("Die Bevölkerung ist über 12,65 Milliarden gewachsen, die Erde kann die Überbevölkerung nicht mehr stemmen. Das Spiel endet.")
    else if (afforestation <= afforestationGameOver) createGameOverMessage("Die Bewaldung ist unter 10% gesunken, Wüsten und staubige Ebenen bilden sich, Ökosysteme kollabieren. Das Spiel endet.")
    else if (temperature >= temperatureGameOver) createGameOverMessage("Die Temperatur ist über 5°C gestiegen, viele Länder werden unbewohnbar, Ökosysteme kollabieren. Das Spiel endet.") 
    else if (waterLevel <= -waterLevelGameOver) createGameOverMessage("Der Meeresspiegel ist unter 10m gesunken, Flüsse trocken aus, Fische sterben. Das Spiel endet.")
    else if (waterLevel >= waterLevelGameOver) createGameOverMessage("Der Meeresspiegel ist über 10m gestiegen, die Eiskappen schmelzen, ganze Länder werden überschwemmt. Das Spiel endet.") 
    else if (year >= 2023) {
        document.getElementById("gameOver").style.borderColor = "gold"
        createGameOverMessage("Glückwunsch! Du hast das Spiel gewonnen.")
    }
    
}

function updateAttributes() {
    afforestationElems.forEach(elem => {
        elem.innerHTML = "Bewaldung: " + afforestation.toFixed(1) + " % <br>"
        updateGrowthRateDisplay(afforestationGrowthRate, maxAfforestationGrowthRate, minAfforestationGrowthRate, elem)
    })
    waterLevelElems.forEach(elem => {
        elem.innerHTML = "Wasserlevel: " + waterLevel.toFixed(1) + " m <br>"
        updateGrowthRateDisplay(waterLevelGrowthRate, minWaterLevelGrowthRate, maxWaterLevelGrowthRate, elem)
    })
    populationElems.forEach(elem => {
        elem.innerHTML = "Bevölk.: " + convertNum(population, 2) + " <br>"
        updateGrowthRateDisplay(populationGrowthRate, minPopulationGrowthRate, maxTemperatureGrowthRate, elem)
    })
    temperatureElems.forEach(elem => {
        elem.innerHTML = "Temperatur: " + temperature.toFixed(1) + " °C <br>"
        updateGrowthRateDisplay(temperatureGrowthRate, minTemperatureGrowthRate, maxTemperatureGrowthRate, elem)
    })

    afforestationSlider.style.width = parseInt(afforestation)+"%";
    waterLevelSlider.style.width = parseInt(((waterLevel+10)/20)*100)+"%";
    populationSlider.style.width = parseInt(population/116500000)+"%";
    temperatureSlider.style.width = parseInt(((temperature+5)/10)*100)+"%";

    document.getElementById("upgradesLeft").innerHTML = upgradesLeft

    checkDanger()
}

function updateYear() {
    if(timedEvent[0] && (year - timedEvent[0].endingYear) > 0 && (year - timedEvent[0].endingYear) < 5) yearElem.innerHTML = timedEvent[0].endingYear
    else if(timedEvent[0] && (year - timedEvent[0].startingYear) > 0 && (year - timedEvent[0].startingYear) < 5) yearElem.innerHTML = timedEvent[0].startingYear
    else yearElem.innerHTML = year
    yearElem.style.left = ((year - 1900) / 125) * 100 + "%"
    yearElemPercent.style.width = ((year - 1900) / 125) * 100 + "%"
    upgradesLeft++;
}

function updateGrowthRateDisplay(growthRate, minGrowthRate, maxGrowthRate, elem) {
    growthRateElem = document.createElement("span")
    growthRateElem.classList.add("growthIndicator");
    isPositive = growthRate > 0
    sign = isPositive ? "+" : "-"
    if (growthRate == populationGrowthRate) {
        sign = "x"
        unit = ""
        isPositive = growthRate > 1
    }
    else if (growthRate == afforestationGrowthRate) unit = "%"
    else if (growthRate == waterLevelGrowthRate) unit = "m"
    else if (growthRate == temperatureGrowthRate) unit = "°C"
    value = `(<div style="display:inline;">${sign} ${Math.abs(growthRate.toFixed(3))}${unit}</div>/Jahr)`
    growthRateElem.innerHTML = value
    Array.from(growthRateElem.getElementsByTagName("div")).forEach(elem => {
        if(growthRate == afforestationGrowthRate) elem.style.color = calculateColor(maxGrowthRate-growthRate, minGrowthRate, maxGrowthRate) 
        else elem.style.color = calculateColor(growthRate, minGrowthRate, maxGrowthRate)
    })
    elem.appendChild(growthRateElem)
}


helpimg.addEventListener("mousedown", function() {
    helpimg.src = "resource/help_pressed.png";
  });
  
  helpimg.addEventListener("mouseup", function() {
    helpimg.src = "resource/help.png";
  });
  

function main() {
    if (beginOfGame) newEvent() // Check ob es das erste Event ist Mithilfe von beginOfGame flag
    timedEvents() // gibt es ein timedEvent? Wenn nicht newEvent()
    attributeCheck() // Attribute erreichen keine illegalen Bereiche
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
updateYear()
main()

if(window.innerHeight > window.innerWidth){
    var infoSymbol = document.getElementsByClassName("theInfo")

    console.log(infoSymbol)

	for (const element of infoSymbol) {
		element.innerHTML = "Info";
	  }
}

document.getElementById("afforestationInfo").innerHTML = "Fläche die von der Erde mit Wald bedeckt ist. Das Spiel endet, sobald die Waldfläche unter 10% sinkt."
document.getElementById("waterLevelInfo").innerHTML = "Der Meeresspiegel. Das Spiel endet, sobald der Meeresspiegel über 10m steigt."
document.getElementById("temperatureInfo").innerHTML = "Die Durchschnittstemperatur auf der Erde. Das Spiel endet, sobald die Temperatur über 5°C steigt."
document.getElementById("populationInfo").innerHTML = "Die Weltbevölkerung. Das Spiel endet, sobald die Weltbevölkerung über " + convertNum(populationGameOverMax, 2) + " steigt."