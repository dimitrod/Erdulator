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

        citiesImage.src = "resource/planet/cities_03.gif";

    } else if (population >= 6000000000) {

        citiesImage.src = "resource/planet/cities_02.gif";

    } else {

        citiesImage.src = "resource/planet/cities_01.gif";

    }


    





}

