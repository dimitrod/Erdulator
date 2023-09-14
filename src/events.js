var earthquakeReactions = [
    {reaction: "Bergungsteam schicken", cost: 2, impacts: [{param: "population", minValue: 0.1, maxValue: 0.3}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [tsunami]}, 
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 0.3, maxValue: 0.6}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: [tsunami]}
]
var earthquake = {eventMessage: "Erdbeben", reactions: earthquakeReactions}

var tsunamiReactions = [
    {reaction: "Evakuieren", cost: 4, impacts: [{param: "population", minValue: 0.1, maxValue: 0.1}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: []},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 0.4, maxValue: 0.6}, {param: "afforestation", minValue: 1, maxValue: 3}], triggers: []}
]
var tsunami = {eventMessage: "Tsunami", reactions: tsunamiReactions}

var droughtReactions = [
    {reaction: "Aufforsten", cost: 3, impacts: [{param: "population", minValue: 0.1, maxValue: 0.1}, {param: "afforestation", minValue: 1, maxValue: 2}], triggers: []},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 0.2, maxValue: 0.3}, {param: "afforestation", minValue: 3, maxValue: 4}], triggers: [bushFire]}
]
var drought = {eventMessage: "Dürre", reactions: droughtReactions}

var bushFireReactions = [
    {reaction: "Brand bekämpfen", cost: 3, impacts: [{param: "population", minValue: 0.1, maxValue: 0.1}, {param: "afforestation", minValue: 1, maxValue: 2}, {param: "co2e", minValue: 1, maxValue: 2}], triggers: []},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 0.2, maxValue: 0.3}, {param: "afforestation", minValue: 4, maxValue: 5}, {param: "co2e", minValue: 3, maxValue: 6}], triggers: [bushFire]}
]
var bushFire = {eventMessage: "Waldbrand", reactions: bushFireReactions}

var commonEvents = [earthquake, tsunami, drought, bushFire]

var currentEvent = undefined

function newEvent() {
    currentEvent = commonEvents[Math.floor(Math.random()*commonEvents.length)];
    document.getElementById("eventMessage").innerHTML = currentEvent.eventMessage
    document.getElementById("reaction1").innerHTML = currentEvent.reactions[0].reaction
    document.getElementById("reaction2").innerHTML = currentEvent.reactions[1].reaction
}

function reaction(r) {
    
}



newEvent()