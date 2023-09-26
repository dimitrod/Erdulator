var year = 1900
var budget = 100  * Math.pow(10,6)
var co2e = 0.02
var afforestation = 100
var waterLevel = 100
var population = 1650000000
var animalSpecies = 5000000
var temperature = 13
var ozoneLayer = 100

var yearElem = document.getElementById("year")
var yearElemPercent = document.getElementById("yearpercent")

var budgetElem = document.getElementById("budget")
var co2eElem = document.getElementById("co2e")
var afforestationElem = document.getElementById("afforestation")
var waterLevelElem = document.getElementById("waterLevel")
var populationElem = document.getElementById("population")
var animalSpeciesElem = document.getElementById("animalSpecies")
var temperatureElem = document.getElementById("temperature")
var ozoneLayerElem = document.getElementById("ozoneLayer")

updateAttributes()
timeIncrement()
