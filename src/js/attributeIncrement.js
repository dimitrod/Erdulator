function populationIncrement() {
    populationGrowthRate = 1.015
    population *= Math.pow(populationGrowthRate, eventInterval)
}

function afforestationIncrement() {
    afforestationGrowthRate = 0.99
    afforestation *= afforestationGrowthRate
}

function temperatureIncrement() {
    temperatureGrowthRate = 1.01
    temperature *= Math.pow(temperatureGrowthRate, eventInterval)
}

function waterLevelIncrement() {
    waterLevelGrowthRate = 1.01
    waterLevel *= Math.pow(waterLevelGrowthRate, eventInterval)
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
