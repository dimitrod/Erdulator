function createReaction(reaction, cost, impacts, triggers = []) {
    return {reaction, cost, impacts, triggers};
}

var earthquakeReactions = [
    createReaction("Bergungsteam schicken", 2, [{param: "population", minValue: 5000, maxValue: 50000}, {param: "afforestation", minValue: 1, maxValue: 3}], [tsunami]),
    createReaction("Notunterkünfte errichten", 5, [{param: "population", minValue: 8000, maxValue: 80000}, {param: "afforestation", minValue: 1, maxValue: 3}], [tsunami]),
    createReaction("Nichts machen", 0, [{param: "population", minValue: 9000, maxValue: 90000}, {param: "afforestation", minValue: 1, maxValue: 3}], [tsunami])
];

var tsunamiReactions = [
    createReaction("Evakuieren", 4, [{param: "population", minValue: 10000, maxValue: 20000}, {param: "afforestation", minValue: 1, maxValue: 3}], [flood]),
    createReaction("Frühwarnsystem errichten", 5, [{param: "population", minValue: 5000, maxValue: 50000}, {param: "afforestation", minValue: 1, maxValue: 3}], [flood]),
    createReaction("Nichts machen", 0, [{param: "population", minValue: 5000, maxValue: 50000}, {param: "afforestation", minValue: 1, maxValue: 3}], [flood])
];

var droughtReactions = [
    createReaction("Aufforsten", 3, [{param: "population", minValue: 2000, maxValue: 10000}, {param: "afforestation", minValue: 1, maxValue: 2}], []),
    createReaction("Lebensmittel bereitstellen", 4, [{param: "population", minValue: 1000, maxValue: 10000}, {param: "afforestation", minValue: 3, maxValue: 4}], [bushFire]),
    createReaction("Nichts machen", 0, [{param: "population", minValue: 2000, maxValue: 20000}, {param: "afforestation", minValue: 3, maxValue: 4}], [bushFire])
];

var bushFireReactions = [
    createReaction("Brand bekämpfen", 3, [{param: "population", minValue: 1500, maxValue: 15000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "animalSpecies", minValue: 100, maxValue: 1000}, {param: "afforestation", minValue: 1, maxValue: 2}, {param: "co2e", minValue: 0.01, maxValue: 0.02}], []),
    createReaction("Evakuieren", 4, [{param: "population", minValue: 1000, maxValue: 10000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "animalSpecies", minValue: 500, maxValue: 5000}, {param: "afforestation", minValue: 4, maxValue: 5}, {param: "co2e", minValue: 0.03, maxValue: 0.06}], [bushFire]),
    createReaction("Nichts machen", 0, [{param: "population", minValue: 3000, maxValue: 30000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "animalSpecies", minValue: 500, maxValue: 5000}, {param: "afforestation", minValue: 4, maxValue: 5}, {param: "co2e", minValue: 0.03, maxValue: 0.06}], [bushFire])
];

var floodReactions = [
    createReaction("Wälle errichten", 2, [{param: "population", minValue: 1500, maxValue: 15000}, {param: "afforestation", minValue: 1, maxValue: 2}], []),
    createReaction("Evakuieren", 4, [{param: "population", minValue: 1000, maxValue: 10000}, {param: "afforestation", minValue: 2, maxValue: 3}], []),
    createReaction("Nichts machen", 0, [{param: "population", minValue: 3000, maxValue: 30000}, {param: "afforestation", minValue: 2, maxValue: 3}], [])
];

var vulcanicEruptionReactions = [
    createReaction("Evakuieren", 4, [{param:"population", minValue: 3000, maxValue: 30000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "afforestation", minValue: 4, maxValue: 8}], [bushFire]),
    createReaction("Rettungskräfte schicken", 3, [{param:"population", minValue: 2000, maxValue: 20000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "afforestation", minValue: 4, maxValue: 8}], [bushFire]),
    createReaction("Nichts machen", 0, [{param:"population", minValue: 6000, maxValue: 60000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "afforestation", minValue: 4, maxValue: 8}], [bushFire])
];

var pandemicReactions = [
    createReaction("Lockdown anordnen", 2, [{param:"population", minValue: 1000, maxValue: 10000}, {param: "co2e", minValue: -0.01, maxValue: -0.02}]),
    createReaction("Maskenpflicht anordnen", 1, [{param:"population", minValue: 1500, maxValue: 15000}]),
    createReaction("Nichts machen", 0, [{param:"population", minValue: 10000, maxValue: 100000}])
];

var oilTankerExplosionReactions = [
    createReaction("Öl abfischen", 10, [{param:"afforestation", minValue: 1, maxValue: 2}, {param: "animalSpecies", minValue: 100, maxValue: 1000}]),
    createReaction("Tanker bergen", 7, [{param:"afforestation", minValue: 1, maxValue: 2}, {param: "animalSpecies", minValue: 200, maxValue: 2000}]),
    createReaction("Nichts machen", 0, [{param:"afforestation", minValue: 1, maxValue: 2}, {param: "animalSpecies", minValue: 1000, maxValue: 10000}])
];

var tornadoReactions = [
    createReaction("Evakuieren", 4, [{param: "population", minValue: 1000, maxValue: 10000}, {param: "afforestation", minValue: 2, maxValue: 4},]),
    createReaction("Rettungskräfte schicken", 3, [{param: "population", minValue: 3000, maxValue: 30000}, {param: "afforestation", minValue: 2, maxValue: 4},]),
    createReaction("Nichts machen", 0, [{param: "population", minValue: 8000, maxValue: 80000}, {param: "afforestation", minValue: 2, maxValue: 4},]),
];
var earthquake = {eventMessage: "Erdbeben", reactions: earthquakeReactions}
var tsunami = {eventMessage: "Tsunami", reactions: tsunamiReactions}
var drought = {eventMessage: "Dürre", reactions: droughtReactions}
var bushFire = {eventMessage: "Waldbrand", reactions: bushFireReactions}
var flood = {eventMessage: "Überflutung", reactions: floodReactions}
var vulcanicEruption = {eventMessage: "Vulkanausbruch", reactions: vulcanicEruptionReactions}
var pandemic = {eventMessage: "Pandemie", reactions: pandemicReactions}
var oilTankerExplosion = {eventMessage: "Öltanker explodiert", reactions: oilTankerExplosionReactions}
var tornado = {eventMessage: "Tornado", reactions: tornadoReactions}
var commonEvents = [earthquake, tsunami, drought, bushFire, flood, oilTankerExplosion, tornado]

var rareEvents = [vulcanicEruption, pandemic]
var currentEvent = undefined

function newEvent() {
    let eventListPossiblilityPicker = [commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, rareEvents]
    let pickedEventList = eventListPossiblilityPicker[Math.floor(Math.random()*eventListPossiblilityPicker.length)]
    currentEvent = pickedEventList[Math.floor(Math.random()*pickedEventList.length)];
    document.getElementById("eventMessage").innerHTML = currentEvent.eventMessage
    document.getElementById("reaction1").innerHTML = currentEvent.reactions[0].reaction + " (" + currentEvent.reactions[0].cost + " Mio €)"
    document.getElementById("reaction2").innerHTML = currentEvent.reactions[1].reaction + " (" + currentEvent.reactions[1].cost + " Mio €)"
    document.getElementById("reaction3").innerHTML = currentEvent.reactions[2].reaction + " (" + currentEvent.reactions[2].cost + " Mio €)"
    budgetCheck()
    document.getElementById("event").show()
}

function timeIncrement() {
    yearElem.innerHTML = "Jahr: " + year
    eventInterval = 5;
    year += eventInterval;
    newEvent()
    gameOver()
    populationIncrement()
}

function createGameOverMessage(message) {
    document.getElementById("gameOverMessage").innerHTML = message;
    document.getElementById("restart").innerHTML = "Neustart";
    document.getElementById("event").close();
    document.getElementById("gameOver").show();
}

function gameOver() {
    if (population <= 0) {
        createGameOverMessage("Die Bevölkerung ist auf 0 gesunken. Das Spiel endet.");
    }
    else if (co2e >= 100) {
        createGameOverMessage("Die CO2e sind auf 100% gestiegen. Das Spiel endet.");
    }
    else if (afforestation <= 0) {
        createGameOverMessage("Die Bewaldung ist auf 0% gesunken. Das Spiel endet.");
    }
    else if (year >= 2023) {
        createGameOverMessage("Glückwunsch! Du hast das Spiel gewonnen.");
    }
}

function budgetCheck() {
    budgetElem.innerHTML = "Budget: " + budget + " Mio €";
    button1 = document.getElementById("reaction1");
    button2 = document.getElementById("reaction2");
    button3 = document.getElementById("reaction3");
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    if (currentEvent.reactions[0].cost > budget) {
        button1.disabled = true;
    }
    if (currentEvent.reactions[1].cost > budget) {
        button2.disabled = true;
    }
    if (currentEvent.reactions[2].cost > budget) {
        button3.disabled = true;
    }
    if (budget <= 0) {
        budget = 0;
        button1.disabled = true;
        button2.disabled = true;
    }
}

function populationGrowth(startValue, growthRate, period){
    return startValue * Math.pow(1 + growthRate, period);
}

function populationIncrement() {
    populationElem.innerHTML = "Bevölkerung: " + population + " Menschen";
    populationGrowthRate = 0.015;
    population = Math.floor(populationGrowth(population, populationGrowthRate, eventInterval));
}

function reaction(r) {
    document.getElementById("event").close()
    let reaction = currentEvent.reactions[r]
    budget -= reaction.cost
    console.log(reaction)
    let infoPopUp = document.getElementById("stats")
    infoPopUp.innerHTML = ""
    reaction.impacts.forEach(impact => {
        switch (impact.param) {
            case "co2e":
                co2e += impact.minValue
                infoPopUp.innerHTML += "<p>co2e gestiegen um "+ impact.minValue + " %</p>"
                break
            case "afforestation":
                afforestation -= impact.minValue
                infoPopUp.innerHTML += "<p>Bewaldung verringert um " + impact.minValue + " %</p>"
                break
            case "waterLevel":
                waterLevel += impact.minValue
                infoPopUp.innerHTML += "<p>Wasserlevel gestiegen um " + impact.minValue + " m</p>"
                break
            case "population":
                population -= impact.minValue
                infoPopUp.innerHTML += "<p>Bevölkerung gesunken um " + impact.minValue + " Menschen</p>"
                break
            case "animalSpecies":
                animalSpecies -= impact.minValue
                infoPopUp.innerHTML += "<p>Es sind " + impact.minValue + " Tierarten ausgestorben </p>"
                break
            case "temperature":
                temperature += impact.minValue
                infoPopUp.innerHTML += "<p>Temperatur gestiegen um " + impact.minValue + " °C</p>"
                break
            case "ozoneLayer":
                ozoneLayer -= impact.minValue
                infoPopUp.innerHTML += "<p>Ozonschicht verschlechtert um " + impact.minValue + " %</p>"
                break
            default:
                break;
        }
    });

    document.getElementById("info").show()

    co2eElem.innerHTML = "CO2e: " + co2e.toFixed(2) + " %"
    afforestationElem.innerHTML = "Bewaldung: " + afforestation + " %"
    waterLevelElem.innerHTML = "Wasserlevel: " + waterLevel + " m"
    animalSpeciesElem.innerHTML = "Tierarten: " + animalSpecies
    temperatureElem.innerHTML = "Temperatur: " + temperature + " °C"
    ozoneLayerElem.innerHTML = "Ozonschicht: " + ozoneLayer + " %"
}

timeIncrement()