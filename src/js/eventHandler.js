let hurricane = {eventName: "hurricane", eventMessage: "Ein Hurrikan verwüstet einige Regionen in " + getRandomRegion("country") , reactions: hurricaneReactions}
let pestInfestation = {eventName: "pestInfestation",eventMessage: "Eine Schädlingsplage in " + getRandomRegion("country") + " führt zu Ernteausfällen und Hungersnöten", reactions: pestInfestationReactions}
let earthquake = {eventName: "earthquake",eventMessage: "Ein Erdbeben in " + getRandomRegion("country") + " lässt viele Gebäude einstürzen. Es werden Nachbeben erwartet", reactions: earthquakeReactions}
let tsunami = {eventName: "tsunami",eventMessage: "Ein Tsunami kommt auf die Küste in " + getRandomRegion("continent") + " zu", reactions: tsunamiReactions}
let drought = {eventName: "drought",eventMessage: "Es herrscht eine starke Dürre in " + getRandomRegion("country"), reactions: droughtReactions}
let bushFire = {eventName: "bushFire",eventMessage: "In vielen Regionen von " + getRandomRegion("country") + " kommt es zu Waldbränden", reactions: bushFireReactions}
let flood = {eventName: "flood",eventMessage: "Es kommt in zu Überflutungen in " + getRandomRegion("country"), reactions: floodReactions}
let vulcanicEruption = {eventName: "vulcanicEruption",eventMessage: "Ein Vulkan bricht in " + getRandomRegion("continent") + " aus", reactions: vulcanicEruptionReactions}
let pandemic = {eventName: "pandemic",eventMessage: "Die Inzidenz einer neuen Krankheit steigt stark. In ganz " + getRandomRegion("country") + " verschärft sich die Lage zu einer Pandemie", reactions: pandemicReactions}
let oilTankerExplosion = {eventName: "oilTankerExplosion",eventMessage: "Ein Öltanker ist im " + getRandomRegion("ocean") + " explodiert. Viele Tonnen Öl verbreiten sich im Wasser", reactions: oilTankerExplosionReactions}
let tornado = {eventName: "tornado",eventMessage: "Ein Tornado verwüstet " + getRandomRegion("country"), reactions: tornadoReactions}
let war = {eventName: "war",eventMessage: "Es bricht ein Krieg zwischen " + getRandomRegion("country") + " und " + getRandomRegion("country") + " aus", reactions: warReactions}
let meltingPoles = {eventName: "meltingPoles",eventMessage: "Die Polkappen schmelzen immer schneller", reactions: meltingPolesReactions}
let natureConservationDay = {eventName: "natureConservationDay",eventMessage: "Es ist Naturschutztag auf der gesamten Welt", reactions: natureConservationDayReactions}
let deforestation = {eventName: "deforestation", eventMessage: "Im "+ getRandomRegion("rainforest") + " kommt es zu starker Abholzung", reactions: deforestationReactions}
let currentEvent = undefined
let worldWar1 = {eventName: "worldWar1", eventStartingMessage: "Der erste Weltkrieg beginnt", eventEndingMessage: "Der erste Weltkrieg ist vorbei", reactions: worldWar1Reactions, startingYear: 1914, endingYear: 1918}
let worldWar2 = {eventName: "worldWar2", eventStartingMessage: "Der zweite Weltkrieg beginnt", eventEndingMessage: "Der zweite Weltkrieg ist vorbei", reactions: worldWar2Reactions, startingYear: 1939, endingYear: 1945}

let timedEvent = [worldWar1, worldWar2];
let eventInterval = 5;

function getRandomRegion(region){
    switch (region){
        case "country":
            let randomCountryNumber = Math.floor(Math.random() * countrys.length)
            return countrys[randomCountryNumber]
        case "ocean":
            let randomOceanNumber = Math.floor(Math.random() * oceans.length)
            return oceans[randomOceanNumber]
        case "continent":
            let randomContinentNumber = Math.floor(Math.random() * continents.length)
            return continents[randomContinentNumber]
        case "rainforest":
            let randomRainforestNumber = Math.floor(Math.random() * rainforests.length)
            return rainforests[randomRainforestNumber]
    }
}

function newEvent() {
    beginOfGame = false
    let commonEvents = [hurricane, earthquake, tsunami, drought, bushFire, flood, oilTankerExplosion, tornado, natureConservationDay, deforestation]
    let rareEvents = [vulcanicEruption, pandemic, war, pestInfestation, meltingPoles]
    let eventListPossiblilityPicker = [commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, rareEvents]
    let pickedEventList = eventListPossiblilityPicker[Math.floor(Math.random() * eventListPossiblilityPicker.length)]
    currentEvent = pickedEventList[Math.floor(Math.random() * pickedEventList.length)];

    switch (currentEvent.eventName) {
        case "hurricane":
            hurricane = {eventName: "hurricane", eventMessage: "Ein Hurrikan verwüstet einige Regionen in " + getRandomRegion("country") , reactions: hurricaneReactions}
            break
        case "pestInfestation":
            pestInfestation = {eventName: "pestInfestation", eventMessage: "Eine Schädlingsplage in " + getRandomRegion("country") + " führt zu Ernteausfällen und Hungersnöten", reactions: pestInfestationReactions}
            break
        case "earthquake":
            earthquake = {eventName: "earthquake", eventMessage: "Ein Erdbeben in " + getRandomRegion("country") + " lässt viele Gebäude einstürzen. Es werden Nachbeben erwartet", reactions: earthquakeReactions}
            break
        case "tsunami":
            tsunami = {eventName: "tsunami", eventMessage: "Ein Tsunami kommt auf die Küste in " + getRandomRegion("continent") + " zu", reactions: tsunamiReactions}
            break
        case "drought":
            drought = {eventName: "drought", eventMessage: "Es herrscht eine starke Dürre in " + getRandomRegion("country"), reactions: droughtReactions}
            break
        case "bushFire":
            bushFire = {eventName: "bushFire", eventMessage: "In vielen Regionen von " + getRandomRegion("country") + " kommt es zu Waldbränden", reactions: bushFireReactions}
            break
        case "flood":
            flood = {eventName: "flood", eventMessage: "Es kommt zu Überflutungen in " + getRandomRegion("country"), reactions: floodReactions}
            break
        case "vulcanicEruption":
            vulcanicEruption = {eventName: "vulcanicEruption", eventMessage: "Ein Vulkan bricht in " + getRandomRegion("continent") + " aus", reactions: vulcanicEruptionReactions}
            break
        case "pandemic":
            pandemic = {eventName: "pandemic", eventMessage: "Die Inzidenz einer neuen Krankheit steigt stark. In ganz " + getRandomRegion("country") + " verschärft sich die Lage zu einer Pandemie", reactions: pandemicReactions}
            break
        case "oilTankerExplosion":
            oilTankerExplosion = {eventName: "oilTankerExplosion", eventMessage: "Ein Öltanker ist im " + getRandomRegion("ocean") + " explodiert. Viele Tonnen Öl verbreiten sich im Wasser", reactions: oilTankerExplosionReactions}
            break
        case "tornado":
            tornado = {eventName: "tornado", eventMessage: "Ein Tornado verwüstet " + getRandomRegion("country"), reactions: tornadoReactions}
            break
        case "war":
            war = {eventName: "war", eventMessage: "Es bricht ein Krieg zwischen " + getRandomRegion("country") + " und " + getRandomRegion("country") + " aus", reactions: warReactions}
            break
        case "meltingPoles":
            meltingPoles = {eventName: "meltingPoles", eventMessage: "Die Polkappen schmelzen immer schneller", reactions: meltingPolesReactions}
            break
        case "natureConservationDay":
            natureConservationDay = {eventName: "natureConservationDay", eventMessage: "Es ist Naturschutztag auf der gesamten Welt", reactions: natureConservationDayReactions}
            break
        case "worldWar1":
            worldWar1 = {eventName: "worldWar1", eventStartingMessage: "Der erste Weltkrieg beginnt", eventEndingMessage: "Der erste Weltkrieg ist vorbei", reactions: worldWar1Reactions}
            break
        case "worldWar2":
            worldWar2 = {eventName: "worldWar2", eventStartingMessage: "Der zweite Weltkrieg beginnt", eventEndingMessage: "Der zweite Weltkrieg ist vorbei", reactions: worldWar2Reactions}
            break
        case "deforestation":
            deforestation = {eventName: "deforestation", eventMessage: "Es kommt zu starker Abholzung der Regenwälder", reactions: deforestationReactions}
            break
        default:
            break
    }
    document.getElementById("eventMessage").innerHTML = currentEvent.eventMessage;
    document.getElementById("reaction1").innerHTML = currentEvent.reactions[0].reaction + " (" + convertNum(currentEvent.reactions[0].cost, 0) + " €)";
    document.getElementById("reaction2").innerHTML = currentEvent.reactions[1].reaction + " (" + convertNum(currentEvent.reactions[1].cost, 0) + " €)";
    document.getElementById("reaction3").innerHTML = currentEvent.reactions[2].reaction + " (" + convertNum(currentEvent.reactions[2].cost, 0) + " €)";
    yearElem.innerHTML = year;
    document.getElementById("event").show();
}

function timedEvents() {
    let currentTimedEvent = timedEvent[0];
    if (!currentTimedEvent) newEvent() 
    else {
        if (year >= currentTimedEvent.startingYear && year != currentTimedEvent.startingYear) {
            yearElem.innerHTML = currentTimedEvent.startingYear
            document.getElementById("timedPopupMessage").innerHTML = currentTimedEvent.eventStartingMessage
            document.getElementById("timedPopup").show()
            setTimeout(() => {document.getElementById("timedPopup").close()}, 5000);  
        }
        if (year >= currentTimedEvent.endingYear) {
            yearElem.innerHTML = currentTimedEvent.endingYear
            document.getElementById("eventMessage").innerHTML = currentTimedEvent.eventEndingMessage
            document.getElementById("reaction1").innerHTML = currentTimedEvent.reactions[0].reaction + " (" + convertNum(currentTimedEvent.reactions[0].cost, 0) + " €)"
            document.getElementById("reaction2").innerHTML = currentTimedEvent.reactions[1].reaction + " (" + convertNum(currentTimedEvent.reactions[1].cost, 0) + " €)"
            document.getElementById("reaction3").innerHTML = currentTimedEvent.reactions[2].reaction + " (" + convertNum(currentTimedEvent.reactions[2].cost, 0) + " €)"
            document.getElementById("event").show()
            timedEvent.splice(0, 1)
        } else newEvent()
    }
}

function reaction(r) {
    let reaction = currentEvent.reactions[r]
    let infoPopUp = document.getElementById("stats")
    infoPopUp.innerHTML = ""
    document.getElementById("event").close()
    costText = "-" + convertNum(reaction.cost, 1) + " €"
    budget -= reaction.cost
    rewardElem.innerHTML = "<span id='budgetChange' style='color: #fc4903;'>" + costText + "</span>"
    
    reaction.impacts.forEach(impact => {
        let randomValue = Math.floor(Math.random() * (impact.maxValue - impact.minValue) + impact.minValue)
        let randomValueCo2e = Math.random() * (impact.maxValue - impact.minValue) + impact.minValue
        switch (impact.param) {
            case "co2e":
                if (randomValueCo2e > 0) {
                    co2e += randomValueCo2e
                    infoPopUp.innerHTML += "<li>Der CO2e-Gehalt in der Luft ist um " + randomValueCo2e.toFixed(3) + " % gestiegen.</li>"
                    break
                }
                if (randomValueCo2e <= 0) {
                    co2e += randomValueCo2e
                    infoPopUp.innerHTML += "<li>Der CO2e-Gehalt in der Luft ist um " + Math.abs(randomValueCo2e.toFixed(3)) + " % gesunken.</li>"
                }
                break
            case "afforestation":
                if (randomValue > 0) {
                    afforestation -= randomValue
                    infoPopUp.innerHTML += "<li>Die Bewaldung der Erde hat sich um " + randomValue + " % verringert.</li>"
                    break
                }
                if (randomValue <= 0) {
                    afforestation += Math.abs(randomValue)
                    infoPopUp.innerHTML += "<li>Die Bewaldung der Erde hat sich um " + Math.abs(randomValue) + " % erhöht.</li>"
                    break
                }
                break
            case "waterLevel":
                if (randomValue > 0) {
                    waterLevel += randomValue
                    infoPopUp.innerHTML += "<li>Der Wasserspiegel ist um " + randomValue + " m gestiegen.</li>"
                    break
                }
                if (randomValue <= 0) {
                    waterLevel += randomValue
                    infoPopUp.innerHTML += "<li>Der Wasserspiegel ist um " + Math.abs(randomValue) + " m gesunken.</li>"
                    break
                }
                break
            case "population":
                population -= randomValue
                infoPopUp.innerHTML += "<li>Es sind " + convertNum(randomValue) + " Menschen gestorben</li>"
                break
            case "animalSpecies":
                animalSpecies -= randomValue
                infoPopUp.innerHTML += "<li>Es sind " + convertNum(randomValue) + " Tierarten ausgestorben </li>"
                break
            case "temperature":
                if (randomValue > 0) {
                    temperature += randomValue
                    infoPopUp.innerHTML += "<li>Die Welt-Durchschnittstemperatur hat sich um " + randomValue + " °C erhöht.</li>"
                    break
                }
                if (randomValue <= 0) {
                    temperature += randomValue
                    infoPopUp.innerHTML += "<li>Die Welt-Durchschnittstemperatur hat sich um " + Math.abs(randomValue) + " °C verringert.</p>"
                    break
                }
                break
            case "ozoneLayer":
                ozoneLayer -= randomValue
                infoPopUp.innerHTML += "<li>Die Qualität der Ozonschicht hat sich um " + randomValue + " % verschlechtert.</li>"
                break
            case "nothing":
                infoPopUp.innerHTML = "<li>Nichts ist passiert.</li>"
            default:
                break;
        }
    });
    updateAttributes()
    document.getElementById("info").show()
}
