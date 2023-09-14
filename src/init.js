var year = 1900
var budget = 100
var co2e = 0.02
var afforestation = 100
var waterLevel = 100
var population = 1650000000
var temperature = 13
var ozoneLayer = 100

var yearElem = document.getElementById("year")
var budgetElem = document.getElementById("budget")
var co2eElem = document.getElementById("co2e")
var afforestationElem = document.getElementById("afforestation")
var waterLevelElem = document.getElementById("waterLevel")
var populationElem = document.getElementById("population")
var temperatureElem = document.getElementById("temperature")
var ozoneLayerElem = document.getElementById("ozoneLayer")

yearElem.innerHTML = "Jahr: " + year
budgetElem.innerHTML = "Budget: " + budget + " Mio €"
co2eElem.innerHTML = "CO2e: " + co2e + " %"
afforestationElem.innerHTML = "Bewaldung: " + afforestation + " %"
waterLevelElem.innerHTML = "Wasserlevel: " + waterLevel + " m"
populationElem.innerHTML = "Bevölkerung: " + population + " Menschen"
temperatureElem.innerHTML = "Temperatur: " + temperature + " °C"
ozoneLayerElem.innerHTML = "Ozonschicht: " + ozoneLayer + " %"
