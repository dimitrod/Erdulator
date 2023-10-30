var planetImage = document.getElementById("planet");
var continentImage = document.getElementById("continents");
var citiesImage = document.getElementById("cities");

function checkDanger(){

    if (afforestation > 60) {

        continentImage.style.filter = "hue-rotate(0deg)"

    } else {
        var foresthue = -60 + afforestation;

        continentImage.style.filter = "hue-rotate(" + foresthue + "deg)";
    }

    if (waterLevel >= 7) {

        continentImage.src = "resource/planet/bad_new.gif";

    } else {

        continentImage.src = "resource/planet/good_new.gif";

    }

    if (temperature < 2) {

        planetImage.style.filter = "hue-rotate(0deg) brightness(100%) saturate(1)";

    } else {

        var waterhue = (temperature-2)*14;
        var tempValue = ((temperature-2)*20) < 0 ? 0 : ((temperature-2)*20);
        var waterbrightness = 100-tempValue;
        var watersaturation = 1-0.8*((temperature-2)/3);

    
        planetImage.style.filter = "hue-rotate(-" + waterhue + "deg) brightness(" + waterbrightness + "%) saturate(" + watersaturation + ")";
    
    }

    if (population >= 9000000000) {

        citiesImage.style.filter = "sepia(100%) hue-rotate(320deg) brightness(90%) saturate(600%)";
        citiesImage.src = "resource/planet/cities_03.gif";

    } else if (population >= 6000000000) {

        citiesImage.style.filter = "sepia(100%) hue-rotate(320deg) brightness(100%) saturate(300%)";
        citiesImage.src = "resource/planet/cities_02.gif";

    } else {
        citiesImage.style.filter = "sepia(100%) hue-rotate(320deg) brightness(100%) saturate(150%)";
        citiesImage.src = "resource/planet/cities_01.gif";

    }

    afforestationSlider.style.backgroundColor = calculateColor(afforestation, 50, afforestationGameOver)
    waterLevelSlider.style.backgroundColor = calculateColor(waterLevel, 0, waterLevelGameOver)
    populationSlider.style.backgroundColor = calculateColor(population, populationGameOver, populationGameOverMax)
    temperatureSlider.style.backgroundColor = calculateColor(temperature, 0, temperatureGameOver)

    // if (afforestation < 20) {
    //         afforestationSlider.style.backgroundColor = "#de0037"
    //     } else if (afforestation < 40) {
    //         afforestationSlider.style.backgroundColor = "#ffcc14"
    //     } else { 
    //         afforestationSlider.style.backgroundColor = "#02c23f"
    //   }

    // if (waterLevel > 7 || waterLevel < -7) {
    //     waterLevelSlider.style.backgroundColor = "#de0037"
    // } else if (waterLevel > 4 || waterLevel < -4) {
    //     waterLevelSlider.style.backgroundColor = "#ffcc14"
    // } else { 
    //     waterLevelSlider.style.backgroundColor = "#02c23f"
    // }

    // if (population > 10000000000 || population < 300000000) {
    //     populationSlider.style.backgroundColor = "#de0037"
    // } else if (population > 8000000000 || population < 1000000000) {
    //     populationSlider.style.backgroundColor = "#ffcc14"
    // } else { 
    //     populationSlider.style.backgroundColor = "#02c23f"
    // }

    // if (temperature > 4 || temperature < -4) {
    //     temperatureSlider.style.backgroundColor = "#de0037"
    // } else if (temperature > 2 || temperature < -2) {
    //     temperatureSlider.style.backgroundColor = "#ffcc14"
    // } else { 
    //     temperatureSlider.style.backgroundColor = "#02c23f"
    // }


















}

