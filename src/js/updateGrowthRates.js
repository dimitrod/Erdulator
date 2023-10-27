function updateGrowthRate(growthRate, amount) {
    if(growthRate == "afforestation") updateAfforestationGrowthRate(amount)
    else if(growthRate == "temperature") updateTemperatureGrowthRate(amount)
    else if(growthRate == "waterlevel") updateWaterlevelGrowthRate(amount)
    updateAttributes()
}

function updateAfforestationGrowthRate(amount){
    if(amount == "low") afforestationGrowthRate += (maxAfforestationGrowthRate - afforestationGrowthRate) * 0.1
    else if(amount == "mid") afforestationGrowthRate += (maxAfforestationGrowthRate - afforestationGrowthRate) * 0.2
    else if(amount == "high") afforestationGrowthRate += (maxAfforestationGrowthRate - afforestationGrowthRate) * 0.3
}

function updateTemperatureGrowthRate(amount) {
    if(amount == "low") temperatureGrowthRate -= (temperatureGrowthRate - minTemperatureGrowthRate) * 0.1
    else if(amount == "mid") temperatureGrowthRate -= (temperatureGrowthRate - minTemperatureGrowthRate) * 0.2
    else if(amount == "high") temperatureGrowthRate -= (temperatureGrowthRate - minTemperatureGrowthRate) * 0.3
}

function updateWaterlevelGrowthRate(amount) {
    if(amount == "low") waterLevelGrowthRate -= (waterLevelGrowthRate - minWaterLevelGrowthRate) * 0.1
    else if(amount == "mid") waterLevelGrowthRate -= (waterLevelGrowthRate - minWaterLevelGrowthRate) * 0.2
    else if(amount == "high") waterLevelGrowthRate -= (waterLevelGrowthRate - minWaterLevelGrowthRate) * 0.3
}