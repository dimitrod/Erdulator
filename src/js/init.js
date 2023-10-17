let year = 1900
let budget = 100  * Math.pow(10, 6)


let yearElem = document.getElementById("year")
let yearElemPercent = document.getElementById("yearpercent")
let afforestationElem = document.getElementById("afforestation")
let waterLevelElem = document.getElementById("waterLevel")
let populationElem = document.getElementById("population")
let temperatureElem = document.getElementById("temperature")


let population = 1650000000
let populationGameOver = 0
let minPopulationGrowthRate = 1.015
let maxPopulationGrowthRate = 1.015
let populationGrowthRate = 1.015

let afforestation = 50
let afforestationGameOver = 10.0
let minAfforestationGrowthRate = -1.2
let maxAfforestationGrowthRate = 0
let afforestationGrowthRate = -0.6

let temperature = 0
let temperatureGameOver = 5
let minTemperatureGrowthRate = 0
let maxTemperatureGrowthRate = 0.16
let temperatureGrowthRate = 0.08

let waterLevel = 0
let waterLevelGameOver = 10
let minWaterLevelGrowthRate = 0
let maxWaterLevelGrowthRate = 0.32
let waterLevelGrowthRate = 0.16




