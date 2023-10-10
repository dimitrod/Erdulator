function attributeGrowth(startValue, growthRate, period) {
    return startValue * Math.pow(1 + growthRate, period);
}

function populationIncrement() {
    populationGrowthRate = 0.015
    population = Math.floor(attributeGrowth(population, populationGrowthRate, eventInterval));
}

function afforestationIncrement() {
    afforestationGrowthRate = 0.9
    afforestation *= afforestationGrowthRate
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
