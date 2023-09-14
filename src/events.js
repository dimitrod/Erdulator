var earthquakeReactions = [
    {reaction: "Bergungsteam schicken", cost: 2, impacts: [{param: "population", minValue: 50000, maxValue: 500000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [tsunami]}, 
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 300000, maxValue: 600000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [tsunami]}
]
var earthquake = {eventMessage: "Erdbeben", reactions: earthquakeReactions}

var tsunamiReactions = [
    {reaction: "Evakuieren", cost: 4, impacts: [{param: "population", minValue: 10000, maxValue: 20000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: []},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 50000, maxValue: 100000}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: []}
]
var tsunami = {eventMessage: "Tsunami", reactions: tsunamiReactions}

var droughtReactions = [
    {reaction: "Aufforsten", cost: 3, impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {param: "afforestation", minValue: 1, maxValue: 2}], triggers: []},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 2000, maxValue: 20000}, {param: "afforestation", minValue: 3, maxValue: 4}], triggers: [bushFire]}
]
var drought = {eventMessage: "Dürre", reactions: droughtReactions}

var bushFireReactions = [
    {reaction: "Brand bekämpfen", cost: 3, impacts: [{param: "population", minValue: 1500, maxValue: 15000}, {param: "afforestation", minValue: 1, maxValue: 2}, {param: "co2e", minValue: 1, maxValue: 2}], triggers: []},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {param: "afforestation", minValue: 4, maxValue: 5}, {param: "co2e", minValue: 3, maxValue: 6}], triggers: [bushFire]}
]
var bushFire = {eventMessage: "Waldbrand", reactions: bushFireReactions}

var commonEvents = [earthquake, tsunami, drought, bushFire]

var currentEvent = undefined

function newEvent() {
    currentEvent = commonEvents[Math.floor(Math.random()*commonEvents.length)];
    document.getElementById("eventMessage").innerHTML = currentEvent.eventMessage
    document.getElementById("reaction1").innerHTML = currentEvent.reactions[0].reaction + " (" + currentEvent.reactions[0].cost + " Mio €)"
    document.getElementById("reaction2").innerHTML = currentEvent.reactions[1].reaction + " (" + currentEvent.reactions[1].cost + " €)"
    document.getElementById("event").show()
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
                infoPopUp.innerHTML += "<p>co2e: "+ impact.minValue + "</p>"
                break
            case "afforestation":
                afforestation -= impact.minValue
                infoPopUp.innerHTML += "<p>Bewaldung: " + impact.minValue + "</p>"
                break
            case "waterLevel":
                waterLevel += impact.minValue
                infoPopUp.innerHTML += "<p>Wasserlevel: " + impact.minValue + "</p>"
                break
            case "population":
                population -= impact.minValue
                infoPopUp.innerHTML += "<p>Bevölkerung: " + impact.minValue + "</p>"
                break
            case "temperature":
                temperature += impact.minValue
                infoPopUp.innerHTML += "<p>Temperatur: " + impact.minValue + "</p>"
                break
            case "ozoneLayer":
                ozoneLayer -= impact.minValue
                infoPopUp.innerHTML += "<p>Ozonschicht: " + impact.minValue + "</p>"
                break
            default:
                break;
        }
    });

    document.getElementById("info").show()

    yearElem.innerHTML = "Jahr: " + year
    budgetElem.innerHTML = "Budget: " + budget + " M"
    co2eElem.innerHTML = "CO2e: " + co2e + " %"
    afforestationElem.innerHTML = "Bewaldung: " + afforestation + " %"
    waterLevelElem.innerHTML = "Wasserlevel: " + waterLevel + " m"
    populationElem.innerHTML = "Bevölkerung: " + population + " Menschen"
    temperatureElem.innerHTML = "Temperatur: " + temperature + " °C"
    ozoneLayerElem.innerHTML = "Ozonschicht: " + ozoneLayer + " %"

    
}



newEvent()