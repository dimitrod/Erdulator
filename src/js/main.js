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
    yearElem.innerHTML = year
    yearElem.style.left = ((year - 1900) / 125) * 100 + "%"
    yearElemPercent.style.width = ((year - 1900) / 125) * 100 + "%"
    
    afforestationElems.forEach(elem => {
        elem.innerHTML = "Bewaldung: " + afforestation.toFixed(1) + " %"
        /*/if (afforestationGrowthRate > 0) {
            afforestationGrowthRateElem.classList.add("green-text")
            afforestationGrowthRateElem.innerHTML = "+" + Math.abs(afforestationGrowthRate.toFixed(3)) + "%"
        }
        else {
            afforestationGrowthRateElem.classList.add("red-text")
            afforestationGrowthRateElem.innerHTML = "-" + Math.abs(afforestationGrowthRate.toFixed(3)) + "%"
        }/*/
        updateGrowthRateDisplay(afforestationGrowthRate, elem)
    })
    waterLevelElems.forEach(elem => {
        elem.innerHTML = "Wasserlevel: " + waterLevel.toFixed(1) + " m"
        /*/if (waterLevelGrowthRate > 0) {
            waterLevelGrowthRateElem.classList.add("green-text")
            waterLevelGrowthRateElem.innerHTML = "+" + Math.abs(waterLevelGrowthRate.toFixed(3)) + "m"
        }
        else {
            waterLevelGrowthRateElem.classList.add("red-text")
            waterLevelGrowthRateElem.innerHTML = "-" + Math.abs(waterLevelGrowthRate.toFixed(3)) + "m"
        }/*/
        updateGrowthRateDisplay(waterLevelGrowthRate, elem)
    })
    populationElems.forEach(elem => {
        elem.innerHTML = "Bevölk.: " + convertNum(population, 2)
        /*/if (populationGrowthRate > 1) {
            populationGrowthRateElem.classList.add("green-text")
            populationGrowthRateElem.innerHTML = "x" + Math.abs(populationGrowthRate.toFixed(3))
        }
        else {
            populationGrowthRateElem.classList.add("red-text")
            populationGrowthRateElem.innerHTML = "x" + Math.abs(populationGrowthRate.toFixed(3))
        }/*/
        updateGrowthRateDisplay(populationGrowthRate, elem)
    })
    temperatureElems.forEach(elem => {
        elem.innerHTML = "Temperatur: " + temperature.toFixed(1) + " °C"
        /*/if (temperatureGrowthRate > 0) {
            temperatureGrowthRateElem.classList.add("green-text")
            temperatureGrowthRateElem.innerHTML = "+" + Math.abs(temperatureGrowthRate.toFixed(3)) + "°C"
        }
        else {
            temperatureGrowthRateElem.classList.add("red-text")
            temperatureGrowthRateElem.innerHTML = "-" + Math.abs(temperatureGrowthRate.toFixed(3)) + "°C"
        }/*/
        updateGrowthRateDisplay(temperatureGrowthRate, elem)
    })


    afforestationSlider.style.width = parseInt(afforestation)+"%";
    waterLevelSlider.style.width = parseInt(((waterLevel+10)/20)*100)+"%";
    populationSlider.style.width = parseInt(population/116500000)+"%";
    temperatureSlider.style.width = parseInt(((temperature+5)/10)*100)+"%";

    checkDanger()
}

function updateGrowthRateDisplay(growthRate, elem) {
    growthRateElem = document.createElement("span")
    isPositive = growthRate > 0
    sign = isPositive ? "+" : "-"
    if (growthRate == populationGrowthRate) {
        sign = "x"
        unit = ""
    }
    else if (growthRate == afforestationGrowthRate) unit = "%"
    else if (growthRate == waterLevelGrowthRate) unit = "m"
    else if (growthRate == temperatureGrowthRate) unit = "°C"
    //value = "(" + isPositive ? sign + Math.abs(growthRate.toFixed(3)) : sign + Math.abs(growthRate.toFixed(3)) + "/Jahr)"
    value = `(<span class="${isPositive ? 'green-text' : 'red-text'}">${isPositive ? sign : '-'} ${Math.abs(growthRate.toFixed(3))}${unit}</span>/Jahr)`
    growthRateElem.innerHTML = value
    //growthRateElem.classList.add(isPositive ? "green-text" : "red-text")
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
main()

document.getElementById("afforestationInfo").innerHTML = "Fläche die von der Erde mit Wald bedeckt ist. Das Spiel endet, sobald die Waldfläche unter 10% sinkt."
document.getElementById("waterLevelInfo").innerHTML = "Der Meeresspiegel. Das Spiel endet, sobald der Meeresspiegel über 10m steigt."
document.getElementById("temperatureInfo").innerHTML = "Die Durchschnittstemperatur auf der Erde. Das Spiel endet, sobald die Temperatur über 5°C steigt."
document.getElementById("populationInfo").innerHTML = "Die Weltbevölkerung. Das Spiel endet, sobald die Weltbevölkerung über " + convertNum(populationGameOverMax, 2) + " steigt."