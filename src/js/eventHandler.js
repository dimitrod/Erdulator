var currentEvent = undefined
function newEvent() {
    var hurricane = {eventName: "hurricane", eventMessage: "Ein Hurrikan verwüstet einige Regionen in " + getRandomRegion("country") , reactions: hurricaneReactions}
    var pestInfestation = {eventName: "pestInfestation",eventMessage: "Eine Schädlingsplage in " + getRandomRegion("country") + " führt zu Ernteausfällen und Hungersnöten", reactions: pestInfestationReactions}
    var earthquake = {eventName: "earthquake",eventMessage: "Ein Erdbeben in " + getRandomRegion("country") + " lässt viele Gebäude einstürzen. Es werden Nachbeben erwartet", reactions: earthquakeReactions}
    var tsunami = {eventName: "tsunami",eventMessage: "Ein Tsunami kommt auf die Küste in " + getRandomRegion("continent") + " zu", reactions: tsunamiReactions}
    var drought = {eventName: "drought",eventMessage: "Es herrscht eine starke Dürre in " + getRandomRegion("country"), reactions: droughtReactions}
    var bushFire = {eventName: "bushFire",eventMessage: "In vielen Regionen von " + getRandomRegion("country") + " kommt es zu Waldbränden", reactions: bushFireReactions}
    var flood = {eventName: "flood",eventMessage: "Es kommt in zu Überflutungen in " + getRandomRegion("country"), reactions: floodReactions}
    var vulcanicEruption = {eventName: "vulcanicEruption",eventMessage: "Ein Vulkan bricht in " + getRandomRegion("continent") + " aus", reactions: vulcanicEruptionReactions}
    var pandemic = {eventName: "pandemic",eventMessage: "Die Inzidenz einer neuen Krankheit steigt stark. In ganz " + getRandomRegion("country") + " verschärft sich die Lage zu einer Pandemie", reactions: pandemicReactions}
    var oilTankerExplosion = {eventName: "oilTankerExplosion",eventMessage: "Ein Öltanker ist im " + getRandomRegion("ocean") + " explodiert. Viele Tonnen Öl verbreiten sich im Wasser", reactions: oilTankerExplosionReactions}
    var tornado = {eventName: "tornado",eventMessage: "Ein Tornado verwüstet " + getRandomRegion("country"), reactions: tornadoReactions}
    var war = {eventName: "war",eventMessage: "Es bricht ein Krieg zwischen " + getRandomRegion("country") + " und " + getRandomRegion("country") + " aus", reactions: warReactions}
    var meltingPoles = {eventName: "meltingPoles",eventMessage: "Die Polkappen schmelzen immer schneller", reactions: meltingPolesReactions}
    var natureConservationDay = {eventName: "natureConservationDay",eventMessage: "Es ist Naturschutztag auf der gesamten Welt", reactions: natureConservationDayReactions}
    var worldWar1 = {eventName: "worldWar1",
        eventStartingMessage: "Der erste Weltkrieg beginnt",
        eventEndingMessage: "Der erste Weltkrieg ist vorbei",
        reactions: worldWar1Reactions
    }
    var worldWar2 = {eventName: "worldWar2",
        eventStartingMessage: "Der zweite Weltkrieg beginnt",
        eventEndingMessage: "Der zweite Weltkrieg ist vorbei",
        reactions: worldWar2Reactions
    }
    var deforestation = {eventName: "deforestation",eventMessage: "Im "+ getRandomRegion("rainforest") + " kommt es zu starker Abholzung", reactions: deforestationReactions}

    var commonEvents = [hurricane, earthquake, tsunami, drought, bushFire, flood, oilTankerExplosion, tornado, natureConservationDay, deforestation]
    var rareEvents = [vulcanicEruption, pandemic, war, pestInfestation, meltingPoles]


    let eventListPossiblilityPicker = [commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, rareEvents]
    let pickedEventList = eventListPossiblilityPicker[Math.floor(Math.random() * eventListPossiblilityPicker.length)]
    console.log(pickedEventList)
    currentEvent = pickedEventList[Math.floor(Math.random() * pickedEventList.length)];
    switch (currentEvent.eventName) {
        case "hurricane":
            hurricane = {eventName: "hurricane", eventMessage: "Ein Hurrikan verwüstet einige Regionen in " + getRandomRegion("country") , reactions: hurricaneReactions}
            break
        case "pestInfestation":
            pestInfestation = {eventName: "pestInfestation",eventMessage: "Eine Schädlingsplage in " + getRandomRegion("country") + " führt zu Ernteausfällen und Hungersnöten", reactions: pestInfestationReactions}
            break
        case "earthquake":
            earthquake = {eventName: "earthquake",eventMessage: "Ein Erdbeben in " + getRandomRegion("country") + " lässt viele Gebäude einstürzen. Es werden Nachbeben erwartet", reactions: earthquakeReactions}
            break
        case "tsunami":
            tsunami = {eventName: "tsunami",eventMessage: "Ein Tsunami kommt auf die Küste in " + getRandomRegion("continent") + " zu", reactions: tsunamiReactions}
            break
        case "drought":
            drought = {eventName: "drought",eventMessage: "Es herrscht eine starke Dürre in " + getRandomRegion("country"), reactions: droughtReactions}
            break
        case "bushFire":
            bushFire = {eventName: "bushFire",eventMessage: "In vielen Regionen von " + getRandomRegion("country") + " kommt es zu Waldbränden", reactions: bushFireReactions}
            break
        case "flood":
            flood = {eventName: "flood",eventMessage: "Es kommt in zu Überflutungen in " + getRandomRegion("country"), reactions: floodReactions}
            break
        case "vulcanicEruption":
            vulcanicEruption = {eventName: "vulcanicEruption",eventMessage: "Ein Vulkan bricht in " + getRandomRegion("continent") + " aus", reactions: vulcanicEruptionReactions}
            break
        case "pandemic":
            pandemic = {eventName: "pandemic",eventMessage: "Die Inzidenz einer neuen Krankheit steigt stark. In ganz " + getRandomRegion("country") + " verschärft sich die Lage zu einer Pandemie", reactions: pandemicReactions}
            break
        case "oilTankerExplosion":
            oilTankerExplosion = {eventName: "oilTankerExplosion",eventMessage: "Ein Öltanker ist im " + getRandomRegion("ocean") + " explodiert. Viele Tonnen Öl verbreiten sich im Wasser", reactions: oilTankerExplosionReactions}
            break
        case "tornado":
            tornado = {eventName: "tornado",eventMessage: "Ein Tornado verwüstet " + getRandomRegion("country"), reactions: tornadoReactions}
            break
        case "war":
            war = {eventName: "war",eventMessage: "Es bricht ein Krieg zwischen " + getRandomRegion("country") + " und " + getRandomRegion("country") + " aus", reactions: warReactions}
            break
        case "meltingPoles":
            meltingPoles = {eventName: "meltingPoles",eventMessage: "Die Polkappen schmelzen immer schneller", reactions: meltingPolesReactions}
            break
        case "natureConservationDay":
            natureConservationDay = {eventName: "natureConservationDay",eventMessage: "Es ist Naturschutztag auf der gesamten Welt", reactions: natureConservationDayReactions}
            break
        case "worldWar1":
            worldWar1 = {eventName: "worldWar1",eventStartingMessage: "Der erste Weltkrieg beginnt", eventEndingMessage: "Der erste Weltkrieg ist vorbei", reactions: worldWar1Reactions}
            break
        case "worldWar2":
            worldWar2 = {eventName: "worldWar2",eventStartingMessage: "Der zweite Weltkrieg beginnt", eventEndingMessage: "Der zweite Weltkrieg ist vorbei", reactions: worldWar2Reactions}
            break
        case "deforestation":
            deforestation = {eventName: "deforestation",eventMessage: "Es kommt zu starker Abholzung der Regenwälder", reactions: deforestationReactions}
            break
        default:
            break
    }
    document.getElementById("eventMessage").innerHTML = currentEvent.eventMessage
    document.getElementById("reaction1").innerHTML = currentEvent.reactions[0].reaction + " (" + convertNum(currentEvent.reactions[0].cost, 0) + " €)"
    document.getElementById("reaction2").innerHTML = currentEvent.reactions[1].reaction + " (" + convertNum(currentEvent.reactions[1].cost, 0) + " €)"
    document.getElementById("reaction3").innerHTML = currentEvent.reactions[2].reaction + " (" + convertNum(currentEvent.reactions[2].cost, 0) + " €)"
    budgetCheck()
    document.getElementById("event").show()
}

function timeIncrement() {
    document.getElementById('information').style.display = "none";
    eventInterval = 5;
    year += eventInterval;
    newEvent()
    gameOver()
    populationIncrement()
}

function createGameOverMessage(message) {
    document.getElementById("gameOverMessage").innerHTML = message;
    document.getElementById("restart").innerHTML = "Neustart";
    document.getElementById("event").close();
    document.getElementById("gameOver").show();
}

function gameOver() {
    if (population <= 0) {
        createGameOverMessage("Die Bevölkerung ist auf 0 gesunken. Das Spiel endet.");
    } else if (co2e >= 100) {
        createGameOverMessage("Die CO2e sind auf 100% gestiegen. Das Spiel endet.");
    } else if (afforestation <= 0) {
        createGameOverMessage("Die Bewaldung ist auf 0% gesunken. Das Spiel endet.");
    } else if (animalSpecies <= 0) {
        createGameOverMessage("Alle Tierarten sind ausgestorben. Das Spiel endet.");
    } else if (temperature >= 40) {
        createGameOverMessage("Die Temperatur ist auf 40°C gestiegen. Das Spiel endet.");
    } else if (ozoneLayer <= 0) {
        createGameOverMessage("Die Ozonschicht ist auf 0% gesunken. Das Spiel endet.");
    } else if (waterLevel <= 0) {
        createGameOverMessage("Der Meeresspiegel ist auf 0m gesunken. Das Spiel endet.");
    } else if (year >= 1910) {
        createGameOverMessage("Glückwunsch! Du hast das Spiel gewonnen.");
    }
}

function budgetCheck() {
    button1 = document.getElementById("reaction1");
    button2 = document.getElementById("reaction2");
    button3 = document.getElementById("reaction3");
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    if (currentEvent.reactions[0].cost > budget) {
        button1.disabled = true;
    }
    if (currentEvent.reactions[1].cost > budget) {
        button2.disabled = true;
    }
    if (currentEvent.reactions[2].cost > budget) {
        button3.disabled = true;
    }
    if (budget <= 0) {
        budget = 0;
        button1.disabled = true;
        button2.disabled = true;
    }
}

function ozonLayerCheck() {
    if (ozoneLayer < 0) {
        ozoneLayer = 0;
    }
    else if (ozoneLayer > 100) {
        ozoneLayer = 100;
    }
}

function afforestationCheck() {
    if (afforestation < 0) {
        afforestation = 0;
    }
    else if (afforestation > 100) {
        afforestation = 100;
    }
}

function co2eCheck() {
    if (co2e < 0) {
        co2e = 0;
    }
    else if (co2e > 100) {
        co2e = 100;
    }
}

function populationGrowth(startValue, growthRate, period) {
    return startValue * Math.pow(1 + growthRate, period);
}

function populationIncrement() {
    populationGrowthRate = 0.015;
    population = Math.floor(populationGrowth(population, populationGrowthRate, eventInterval));
}

function updateAttributes() {
    yearElem.innerHTML = year
    yearElem.style.left = ((year - 1900)/120)*100 + "%"
    yearElemPercent.style.width = ((year - 1900)/120)*100 + "%"
    
    budgetElem.innerHTML = convertNum(budget) + " €"
    co2eElem.innerHTML = "CO2e: " + co2e.toFixed(3) + " %"
    afforestationElem.innerHTML = "Bewaldung: " + afforestation + " %"
    waterLevelElem.innerHTML = "Wasserlevel: " + waterLevel + " m"
    populationElem.innerHTML = "Bevölkerung: " + convertNum(population, 2)
    animalSpeciesElem.innerHTML = "Tierarten: " + convertNum(animalSpecies)
    temperatureElem.innerHTML = "Temperatur: " + temperature + " °C"
    ozoneLayerElem.innerHTML = "Ozonschicht: " + ozoneLayer + " %"
}

function reaction(r) {
    let reaction = currentEvent.reactions[r]
    let infoPopUp = document.getElementById("stats")
    infoPopUp.innerHTML = ""
    document.getElementById("event").close()
    budget -= reaction.cost
    console.log(reaction)

    reaction.impacts.forEach(impact => {
        let randomValue = Math.floor(Math.random() * (impact.maxValue - impact.minValue) + impact.minValue)
        let randomValueCo2e = Math.random() * (impact.maxValue - impact.minValue) + impact.minValue
        switch (impact.param) {
            case "co2e":
                if (randomValueCo2e > 0) {
                    co2e += randomValueCo2e
                    infoPopUp.innerHTML += "<p>Der CO2e-Gehalt in der Luft ist um " + randomValueCo2e.toFixed(3) + " % gestiegen.</p>"
                    break
                }
                if (randomValueCo2e <= 0) {
                    co2e += randomValueCo2e
                    infoPopUp.innerHTML += "<p>Der CO2e-Gehalt in der Luft ist um " + Math.abs(randomValueCo2e.toFixed(3)) + " % gesunken.</p>"
                }
                break
            case "afforestation":
                if (randomValue > 0) {
                    afforestation -= randomValue
                    infoPopUp.innerHTML += "<p>Die Bewaldung der Erde hat sich um " + randomValue + " % verringert.</p>"
                    break
                }
                if (randomValue <= 0) {
                    afforestation += Math.abs(randomValue)
                    infoPopUp.innerHTML += "<p>Die Bewaldung der Erde hat sich um " + Math.abs(randomValue) + " % erhöht.</p>"
                    break
                }
                break
            case "waterLevel":
                if (randomValue > 0) {
                    waterLevel += randomValue
                    infoPopUp.innerHTML += "<p>Der Wasserspiegel ist um " + randomValue + " m gestiegen.</p>"
                    break
                }
                if (randomValue <= 0) {
                    waterLevel += randomValue
                    infoPopUp.innerHTML += "<p>Der Wasserspiegel ist um " + Math.abs(randomValue) + " m gesunken.</p>"
                    break
                }
                break
            case "population":
                population -= randomValue
                infoPopUp.innerHTML += "<p>Es sind " + convertNum(randomValue) + " Menschen gestorben</p>"
                break
            case "animalSpecies":
                animalSpecies -= randomValue
                infoPopUp.innerHTML += "<p>Es sind " + convertNum(randomValue) + " Tierarten ausgestorben </p>"
                break
            case "temperature":
                if (randomValue > 0) {
                    temperature += randomValue
                    infoPopUp.innerHTML += "<p>Die Welt-Durchschnittstemperatur hat sich um " + randomValue + " °C erhöht.</p>"
                    break
                }
                if (randomValue <= 0) {
                    temperature += randomValue
                    infoPopUp.innerHTML += "<p>Die Welt-Durchschnittstemperatur hat sich um " + Math.abs(randomValue) + " °C verringert.</p>"
                    break
                }
                break
            case "ozoneLayer":
                ozoneLayer -= randomValue
                infoPopUp.innerHTML += "<p>Die Qualität der Ozonschicht hat sich um " + randomValue + " % verschlechtert.</p>"
                break
            case "nothing":
                infoPopUp.innerHTML = "<p>Nichts ist passiert.<p>"
            default:
                break;
        }
    });
    ozonLayerCheck()
    co2eCheck()
    afforestationCheck()
    document.getElementById("info").show()
    updateAttributes()
}
