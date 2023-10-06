function attributeGrowth(startValue, growthRate, period) {
    return startValue * Math.pow(1 + growthRate, period);
}

function populationIncrement() {
    populationGrowthRate = 0.015;
    population = Math.floor(attributeGrowth(population, populationGrowthRate, eventInterval));
}

function afforestationIncrement() {
    afforestationGrowthRate = -0.02;
    afforestation = Math.floor(attributeGrowth(afforestation, afforestationGrowthRate, eventInterval));
}

function temperatureIncrement() {
    temperatureGrowthRate = 0.03;
    temperature = Math.floor(attributeGrowth(temperature, temperatureGrowthRate, eventInterval));
}

function waterLevelIncrement() {
    waterLevelGrowthRate = 0.01;
    waterLevel = Math.floor(attributeGrowth(waterLevel, waterLevelGrowthRate, eventInterval));
}

function timeIncrement() {
    document.getElementById('information').style.display = "none";
    year += eventInterval;
}

function attributeIncrement() {
    populationIncrement()
    afforestationIncrement()
    temperatureIncrement()
    waterLevelIncrement()
    timeIncrement()
}
