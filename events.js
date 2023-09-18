var earthquakeReactions = [
    {reaction: "Bergungsteam schicken", cost: 2, impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [tsunami]},
    {reaction: "Notunterkünfte errichten", cost: 5, impacts: [{param: "population", minValue: 8000, maxValue: 80000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [tsunami]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 9000, maxValue: 90000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [tsunami]}
]

var tsunamiReactions = [
    {reaction: "Evakuieren", cost: 4, impacts: [{param: "population", minValue: 10000, maxValue: 20000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [flood]},
    {reaction: "Frühwarnsystem errichten", cost: 5, impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [flood]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [flood]}
]

var droughtReactions = [
    {reaction: "Aufforsten", cost: 3, impacts: [{param: "population", minValue: 2000, maxValue: 10000}, {param: "afforestation", minValue: 1, maxValue: 2}], triggers: []},
    {reaction: "Lebensmittel bereitstellen", cost: 4, impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {param: "afforestation", minValue: 3, maxValue: 4}], triggers: [bushFire]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 2000, maxValue: 20000}, {param: "afforestation", minValue: 3, maxValue: 4}], triggers: [bushFire]}
]

var bushFireReactions = [
    {reaction: "Brand bekämpfen", cost: 3, impacts: [{param: "population", minValue: 1500, maxValue: 15000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "animalSpecies", minValue: 100, maxValue: 1000}, {param: "afforestation", minValue: 1, maxValue: 2}, {param: "co2e", minValue: 0.01, maxValue: 0.02}], triggers: []},
    {reaction: "Evakuieren", cost: 4, impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "animalSpecies", minValue: 500, maxValue: 5000}, {param: "afforestation", minValue: 4, maxValue: 5}, {param: "co2e", minValue: 0.03, maxValue: 0.06}], triggers: [bushFire]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "animalSpecies", minValue: 500, maxValue: 5000}, {param: "afforestation", minValue: 4, maxValue: 5}, {param: "co2e", minValue: 0.03, maxValue: 0.06}], triggers: [bushFire]}
]

var floodReactions = [
    {reaction: "Wälle errichten", cost: 2, impacts: [{param: "population", minValue: 1500, maxValue: 15000}, {param: "afforestation", minValue: 1, maxValue: 2}], triggers: []},
    {reaction: "Evakuieren", cost: 4, impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {param: "afforestation", minValue: 2, maxValue: 3}], triggers: []},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {param: "afforestation", minValue: 2, maxValue: 3}], triggers: []}
]

var vulcanicEruptionReactions = [
    {reaction: "Evakuieren", cost: 4, impacts: [{param:"population", minValue: 3000, maxValue: 30000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "afforestation", minValue: 4, maxValue: 8}], triggers: [bushFire]},
    {reaction: "Rettungskräfte schicken", cost: 3, impacts: [{param:"population", minValue: 2000, maxValue: 20000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "afforestation", minValue: 4, maxValue: 8}], triggers: [bushFire]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param:"population", minValue: 6000, maxValue: 60000}, {param: "temperature", minValue: 1, maxValue: 1}, {param: "afforestation", minValue: 4, maxValue: 8}], triggers: [bushFire]}
]

var pandemicReactions = [
    {reaction: "Lockdown anordnen", cost: 2, impacts: [{param:"population", minValue: 1000, maxValue: 10000}, {param: "co2e", minValue: -0.01, maxValue: -0.02}]},
    {reaction: "Maskenpflicht anordnen", cost: 1, impacts: [{param:"population", minValue: 1500, maxValue: 15000}]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param:"population", minValue: 10000, maxValue: 100000}]}
]

var oilTankerExplosionReactions = [
    {reaction: "Öl abfischen", cost: 10, impacts: [{param:"afforestation", minValue: 1, maxValue: 2}, {param: "animalSpecies", minValue: 100, maxValue: 1000}]},
    {reaction: "Tanker bergen", cost: 7, impacts: [{param:"afforestation", minValue: 1, maxValue: 2}, {param: "animalSpecies", minValue: 200, maxValue: 2000}]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param:"afforestation", minValue: 1, maxValue: 2}, {param: "animalSpecies", minValue: 1000, maxValue: 10000}]}
]

var tornadoReactions = [
    {reaction: "Evakuieren", cost: 4, impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {param: "afforestation", minValue: 2, maxValue: 4},]},
    {reaction: "Rettungskräfte schicken", cost: 3, impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {param: "afforestation", minValue: 2, maxValue: 4},]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 8000, maxValue: 80000}, {param: "afforestation", minValue: 2, maxValue: 4},]},
]

var warReactions = [
    {reaction: "Waffenstillstand aushandeln", cost: 8, impacts: [{param: "population", minValue: 10000, maxValue: 1000000}, {param: "co2e", minValue: 0.01, maxValue: 0.02}, {param: "animalSpecies", minValue: 100, maxValue: 1000}]},
    {reaction: "Wehrpflicht einführen", cost: 10, impacts: [{param: "population", minValue: 20000, maxValue: 2000000}, {param: "co2e", minValue: 0.01, maxValue: 0.03}, {param: "animalSpecies", minValue: 200, maxValue: 2000}]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 50000, maxValue: 5000000}, {param: "co2e", minValue: 0.01, maxValue: 0.03}, {param: "animalSpecies", minValue: 200, maxValue: 2000}]}
]

var pestInfestationReactions = [
    {reaction: "Großflächig mit Pestiziden bekämpfen", cost: 10, impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {param: "co2e", minValue: 0.01, maxValue: 0.01}, {param: "animalSpecies", minValue: 500, maxValue: 5000}, {param: "ozoneLayer", minValue: 1, maxValue: 2}]},
    {reaction: "nötige Waren importieren", cost: 8, impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {param: "co2e", minValue: 0.01, maxValue: 0.01}, {param: "animalSpecies", minValue: 100, maxValue: 1000}]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 8000, maxValue: 80000}, {param: "co2e", minValue: 0.01, maxValue: 0.01}]}
]

var pestInfestation = {eventMessage: "Schädlingsplage", reactions: pestInfestationReactions}
var earthquake = {eventMessage: "Erdbeben", reactions: earthquakeReactions}
var tsunami = {eventMessage: "Tsunami", reactions: tsunamiReactions}
var drought = {eventMessage: "Dürre", reactions: droughtReactions}
var bushFire = {eventMessage: "Waldbrand", reactions: bushFireReactions}
var flood = {eventMessage: "Überflutung", reactions: floodReactions}
var vulcanicEruption = {eventMessage: "Vulkanausbruch", reactions: vulcanicEruptionReactions}
var pandemic = {eventMessage: "Pandemie", reactions: pandemicReactions}
var oilTankerExplosion = {eventMessage: "Öltanker explodiert", reactions: oilTankerExplosionReactions}
var tornado = {eventMessage: "Tornado", reactions: tornadoReactions}
var war = {eventMessage: "Krieg", reactions: warReactions}

var commonEvents = [earthquake, tsunami, drought, bushFire, flood, oilTankerExplosion, tornado]
var rareEvents = [vulcanicEruption, pandemic, war, pestInfestation]
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
    eventInterval = 5;
    yearElem.innerHTML = "Jahr: " + year
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
    button1 = document.getElementById("reaction1");
    button2 = document.getElementById("reaction2");
    button3 = document.getElementById("reaction3");
    budgetElem.innerHTML = "Budget: " + budget + " Mio €";
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
    let reaction = currentEvent.reactions[r]
    let infoPopUp = document.getElementById("stats")
    infoPopUp.innerHTML = ""
    document.getElementById("event").close()
    budget -= reaction.cost
    console.log(reaction)
    
    reaction.impacts.forEach(impact => {
        let randomValue = Math.floor(Math.random() * (impact.maxValue - impact.minValue) + impact.minValue)
        let randomValueCo2e = Math.random() * (impact.maxValue -impact.minValue) + impact.minValue
        switch (impact.param) {
            case "co2e":
                co2e += randomValueCo2e
                infoPopUp.innerHTML += "<p>co2e gestiegen um "+ randomValueCo2e.toFixed(2) + " %</p>"
                break
            case "afforestation":
                afforestation -= randomValue
                infoPopUp.innerHTML += "<p>Bewaldung verringert um " + randomValue + " %</p>"
                break
            case "waterLevel":
                waterLevel += randomValue
                infoPopUp.innerHTML += "<p>Wasserlevel gestiegen um " + randomValue + " m</p>"
                break
            case "population":
                population -= randomValue
                infoPopUp.innerHTML += "<p>Bevölkerung gesunken um " + randomValue + " Menschen</p>"
                break
            case "animalSpecies":
                animalSpecies -= randomValue
                infoPopUp.innerHTML += "<p>Es sind " + randomValue + " Tierarten ausgestorben </p>"
                break
            case "temperature":
                temperature += randomValue
                infoPopUp.innerHTML += "<p>Temperatur gestiegen um " + randomValue + " °C</p>"
                break
            case "ozoneLayer":
                ozoneLayer -= randomValue
                infoPopUp.innerHTML += "<p>Ozonschicht verschlechtert um " + randomValue + " %</p>"
                break
            default:
                break;
        }
    });

    document.getElementById("info").show()
    yearElem.innerHTML = "Jahr: " + year
    budgetElem.innerHTML = "Budget: " + budget + " Mio €"
    co2eElem.innerHTML = "CO2e: " + co2e.toFixed(2) + " %"
    afforestationElem.innerHTML = "Bewaldung: " + afforestation + " %"
    waterLevelElem.innerHTML = "Wasserlevel: " + waterLevel + " m"
    animalSpeciesElem.innerHTML = "Tierarten: " + animalSpecies
    temperatureElem.innerHTML = "Temperatur: " + temperature.toFixed(1) + " °C"
    ozoneLayerElem.innerHTML = "Ozonschicht: " + ozoneLayer + " %"
}

timeIncrement()