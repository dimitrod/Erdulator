function populationIncrement() {
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
    console.log("time increment")
    document.getElementById('information').style.display = "none"
    year += eventInterval 
    updateYear()
}

function attributeIncrement() {
    populationIncrement()
    afforestationIncrement()
    temperatureIncrement()
    waterLevelIncrement()
    updateAttributes()
}
