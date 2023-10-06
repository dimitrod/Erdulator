function attributeGrowth(startValue, growthRate, period) {
    return startValue * Math.pow(1 + growthRate, period);
}

function populationIncrement() {
    populationGrowthRate = 0.015;
    population = Math.floor(attributeGrowth(population, populationGrowthRate, eventInterval));
}

function afforestationIncrement() {
    afforestationGrowthRate = 1.01;
    //afforestation = Math.floor(attributeGrowth(afforestation, afforestationGrowthRate, eventInterval));
    afforestation = afforestation * afforestationGrowthRate
}

function temperatureIncrement() {
    temperatureGrowthRate = 0.2;
    temperature = Math.floor(attributeGrowth(temperature, temperatureGrowthRate, eventInterval));
}

function waterLevelIncrement() {
    waterLevelGrowthRate = 0.1;
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
