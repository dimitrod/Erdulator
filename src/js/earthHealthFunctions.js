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
        var waterbrightness = 100-((temperature-2)*4);
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

    if (afforestation < 20) {
            afforestationSlider.style.backgroundColor = "red"
        } else if (afforestation < 40) {
            afforestationSlider.style.backgroundColor = "yellow"
        } else { 
            afforestationSlider.style.backgroundColor = "green"
      }

    if (waterLevel > 8 || waterLevel < -8) {
        waterLevelSlider.style.backgroundColor = "red"
    } else if (waterLevel > 4 || waterLevel < -4) {
        waterLevelSlider.style.backgroundColor = "yellow"
    } else { 
        waterLevelSlider.style.backgroundColor = "green"
    }

    if (population > 10000000000 || population < 300000000) {
        populationSlider.style.backgroundColor = "red"
    } else if (population > 8000000000 || population < 1000000000) {
        populationSlider.style.backgroundColor = "yellow"
    } else { 
        populationSlider.style.backgroundColor = "green"
    }

    if (temperature > 4 || temperature < -4) {
        temperatureSlider.style.backgroundColor = "red"
    } else if (temperature > 2 || temperature < -2) {
        temperatureSlider.style.backgroundColor = "yellow"
    } else { 
        temperatureSlider.style.backgroundColor = "green"
    }


















}

