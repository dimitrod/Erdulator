var dangerLevel = 0;
var afforestationDanger = false;
var waterLevelDanger = false;
var temperatureDanger = false;
var populationDanger = false;
var planetImage = document.getElementById("planet");

function checkDanger(){

    if (afforestation <= 20 && afforestationDanger == false) {
        dangerLevel++
        afforestationDanger = true
        console.log("Wald")
    } else if (afforestation > 20 && afforestationDanger == true) {
        dangerLevel--
        afforestationDanger = false
    }

    if (waterLevel >= 7 && waterLevelDanger == false) {
        dangerLevel++
        waterLevelDanger = true
        console.log("Wasser")
    } else if (waterLevel < 7 && waterLevelDanger == true) {
        dangerLevel--
        waterLevelDanger = false
    }

    if (temperature >= 3.5 && temperatureDanger == false) {
        dangerLevel++
        temperatureDanger = true
        console.log("Temperature")
    } else if (temperature < 3.5 && temperatureDanger == true) {
        dangerLevel--
        temperatureDanger = false
    }

    if (population >= 9000000000 && populationDanger == false) {
        dangerLevel++
        populationDanger = true
        console.log("Bevölkerung")
    } else if (population < 9000000000 && populationDanger == true) {
        dangerLevel--
        populationDanger = false
    }


    if (dangerLevel == 1) {
        planetImage.src = "resource/medium.gif";
    } else if (dangerLevel > 1) {
        planetImage.src = "resource/bad.gif";
    } else {
        planetImage.src = "resource/good.gif";
    }

    console.log(dangerLevel)

}

