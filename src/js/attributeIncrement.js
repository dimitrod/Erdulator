function attributeGrowth(startValue, growthRate, period) {
    return startValue * Math.pow(1 + growthRate, period);
}

function populationIncrement() {
    populationGrowthRate = 0.015
    population = Math.floor(attributeGrowth(population, populationGrowthRate, eventInterval));
}

function afforestationIncrement() {
    afforestationGrowthRate = 1.01
    afforestation = afforestation * afforestationGrowthRate
}

function temperatureIncrement() {
    temperatureGrowthRate = 0.2
    temperature = temperature + temperatureGrowthRate
}

function waterLevelIncrement() {
    waterLevelGrowthRate = 0.1
    waterLevel = waterLevel + waterLevelGrowthRate
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
