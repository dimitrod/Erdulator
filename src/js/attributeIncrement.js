function populationIncrement() {
    populationGrowthRate = 1.015
    population *= Math.pow(populationGrowthRate, eventInterval)
}

function afforestationIncrement() {
    afforestationGrowthRate = -0.5
    afforestation += afforestationGrowthRate
}

function temperatureIncrement() {
    temperatureGrowthRate = 0.1
    temperature += temperatureGrowthRate
}

function waterLevelIncrement() {
    waterLevelGrowthRate = 0.1
    waterLevel += waterLevelGrowthRate
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
