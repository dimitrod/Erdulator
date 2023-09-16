var earthquakeReactions = [
    {reaction: "Bergungsteam schicken", cost: 2, impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [tsunami]},
    {reaction: "Notunterkünfte errichten", cost: 5, impacts: [{param: "population", minValue: 8000, maxValue: 80000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [tsunami]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 9000, maxValue: 90000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [tsunami]}
]
var earthquake = {eventMessage: "Erdbeben", reactions: earthquakeReactions}

var tsunamiReactions = [
    {reaction: "Evakuieren", cost: 4, impacts: [{param: "population", minValue: 10000, maxValue: 20000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [flood]},
    {reaction: "Frühwarnsystem errichten", cost: 5, impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [flood]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [flood]}
]
var tsunami = {eventMessage: "Tsunami", reactions: tsunamiReactions}

var droughtReactions = [
    {reaction: "Aufforsten", cost: 3, impacts: [{param: "population", minValue: 2000, maxValue: 10000}, {param: "afforestation", minValue: 1, maxValue: 2}], triggers: []},
    {reaction: "Lebensmittel bereitstellen", cost: 4, impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {param: "afforestation", minValue: 3, maxValue: 4}], triggers: [bushFire]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 2000, maxValue: 20000}, {param: "afforestation", minValue: 3, maxValue: 4}], triggers: [bushFire]}
]
var drought = {eventMessage: "Dürre", reactions: droughtReactions}

var bushFireReactions = [
    {reaction: "Brand bekämpfen", cost: 3, impacts: [{param: "population", minValue: 1500, maxValue: 15000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "animalSpecies", minValue: 100, maxValue: 1000}, {param: "afforestation", minValue: 1, maxValue: 2}, {param: "co2e", minValue: 0.01, maxValue: 0.02}], triggers: []},
    {reaction: "Evakuieren", cost: 4, impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "animalSpecies", minValue: 500, maxValue: 5000}, {param: "afforestation", minValue: 4, maxValue: 5}, {param: "co2e", minValue: 0.03, maxValue: 0.06}], triggers: [bushFire]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "animalSpecies", minValue: 500, maxValue: 5000}, {param: "afforestation", minValue: 4, maxValue: 5}, {param: "co2e", minValue: 0.03, maxValue: 0.06}], triggers: [bushFire]}
]
var bushFire = {eventMessage: "Waldbrand", reactions: bushFireReactions}

var floodReactions = [
    {reaction: "Wälle errichten", cost: 2, impacts: [{param: "population", minValue: 1500, maxValue: 15000}, {param: "afforestation", minValue: 1, maxValue: 2}], triggers: []},
    {reaction: "Evakuieren", cost: 4, impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {param: "afforestation", minValue: 2, maxValue: 3}], triggers: []},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {param: "afforestation", minValue: 2, maxValue: 3}], triggers: []}
]
var flood = {eventMessage: "Überflutung", reactions: floodReactions}

var vulcanicEruptionReactions = [
    {reaction: "Evakuieren", cost: 4, impacts: [{param:"population", minValue: 3000, maxValue: 30000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "afforestation", minValue: 4, maxValue: 8}], triggers: [bushFire]},
    {reaction: "Rettungskräfte schicken", cost: 3, impacts: [{param:"population", minValue: 2000, maxValue: 20000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "afforestation", minValue: 4, maxValue: 8}], triggers: [bushFire]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param:"population", minValue: 6000, maxValue: 60000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "afforestation", minValue: 4, maxValue: 8}], triggers: [bushFire]}
]
var vulcanicEruption = {eventMessage: "Vulkanausbruch", reactions: vulcanicEruptionReactions}

var pandemicReactions = [
    {reaction: "Lockdown anordnen", cost: 2, impacts: [{param:"population", minValue: 1000, maxValue: 10000}, {param: "co2e", minValue: -0.01, maxValue: -0.02}]},
    {reaction: "Maskenpflicht anordnen", cost: 1, impacts: [{param:"population", minValue: 1500, maxValue: 15000}]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param:"population", minValue: 10000, maxValue: 100000}]}
]
var pandemic = {eventMessage: "Pandemie", reactions: pandemicReactions}

var oilTankerExplosionReactions = [
    {reaction: "Öl abfischen", cost: 10, impacts: [{param:"afforestation", minValue: 1, maxValue: 2}, {param: "animalSpecies", minValue: 100, maxValue: 1000}]},
    {reaction: "Tanker bergen", cost: 7, impacts: [{param:"afforestation", minValue: 1, maxValue: 2}, {param: "animalSpecies", minValue: 200, maxValue: 2000}]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param:"afforestation", minValue: 1, maxValue: 2}, {param: "animalSpecies", minValue: 1000, maxValue: 10000}]}
]
var oilTankerExplosion = {eventMessage: "Öltanker explodiert", reactions: oilTankerExplosionReactions}

var tornadoReactions = [
    {reaction: "Evakuieren", cost: 4, impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {param: "afforestation", minValue: 2, maxValue: 4},]},
    {reaction: "Rettungskräfte schicken", cost: 3, impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {param: "afforestation", minValue: 2, maxValue: 4},]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 8000, maxValue: 80000}, {param: "afforestation", minValue: 2, maxValue: 4},]},
]
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
    document.getElementById("reaction3").innerHTML = currentEvent.reactions[2].reaction + " (" + currentEvent.reactions[2].cost + " Mio €]"
    document.getElementById("event").show()
}

function timeIncrement() {
    yearElem.innerHTML = "Jahr: " + year
    eventInterval = 5;
    year += eventInterval;
    newEvent()
    populationIncrement()
    gameOver()
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

    budgetElem.innerHTML = "Budget: " + budget + " Mio €"
    co2eElem.innerHTML = "CO2e: " + co2e + " %"
    afforestationElem.innerHTML = "Bewaldung: " + afforestation + " %"
    waterLevelElem.innerHTML = "Wasserlevel: " + waterLevel + " m"
    animalSpeciesElem.innerHTML = "Tierarten: " + animalSpecies
    temperatureElem.innerHTML = "Temperatur: " + temperature + " °C"
    ozoneLayerElem.innerHTML = "Ozonschicht: " + ozoneLayer + " %"
}

timeIncrement()