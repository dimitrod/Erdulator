function attributeGrowth(startValue, growthRate, period) {
    return startValue * Math.pow(1 + growthRate, period);
}

function populationIncrement() {
    populationGrowthRate = 0.015;
    population = Math.floor(attributeGrowth(population, populationGrowthRate, eventInterval));
}

function timeIncrement() {
    document.getElementById('information').style.display = "none";
    year += eventInterval;
    updateAttributes()
    main()
}
