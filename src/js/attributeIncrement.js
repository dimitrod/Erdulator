function populationIncrement() {
    console.log("pinc")
    populationGrowthRate = 1.015
    population *= Math.pow(populationGrowthRate, eventInterval)
}

function afforestationIncrement() {
    afforestation += afforestationGrowthRate * eventInterval
}

function temperatureIncrement() {
    temperature += temperatureGrowthRate * eventInterval
}

function waterLevelIncrement() {
    waterLevel += waterLevelGrowthRate * eventInterval
}

function timeIncrement() {
    document.getElementById('information').style.display = "none"
    year += eventInterval
}

function attributeIncrement() {
    populationIncrement()
    afforestationIncrement()
    temperatureIncrement()
    waterLevelIncrement()
    timeIncrement()
}
