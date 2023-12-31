let hurricane = {eventName: "hurricane", eventMessage: "Ein Hurrikan verwüstet einige Regionen in " + getRandomRegion("country") , reactions: hurricaneReactions}
let pestInfestation = {eventName: "pestInfestation",eventMessage: "Eine Schädlingsplage in " + getRandomRegion("country") + " führt zu Ernteausfällen und Hungersnöten", reactions: pestInfestationReactions}
let earthquake = {eventName: "earthquake",eventMessage: "Ein Erdbeben in " + getRandomRegion("country") + " lässt viele Gebäude einstürzen. Es werden Nachbeben erwartet", reactions: earthquakeReactions}
let tsunami = {eventName: "tsunami",eventMessage: "Ein Tsunami kommt auf die Küste in " + getRandomRegion("continent") + " zu", reactions: tsunamiReactions}
let drought = {eventName: "drought",eventMessage: "Es herrscht eine starke Dürre in " + getRandomRegion("country"), reactions: droughtReactions}
let bushFire = {eventName: "bushFire",eventMessage: "In vielen Regionen von " + getRandomRegion("country") + " kommt es zu Waldbränden", reactions: bushFireReactions}
let flood = {eventName: "flood",eventMessage: "Es kommt zu Überflutungen in " + getRandomRegion("country"), reactions: floodReactions}
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
let cleanAirAct = {eventName: "cleanAirAct", eventStartingMessage: "Der Clean Air Act wird verabschiedet", eventEndingMessage: "Der Clean Air Act ist verabschiedet", reactions: cleanAirActReactions, startingYear: 1963, endingYear: 1964}
let montrealProtocol = {eventName: "montrealProtocol", eventStartingMessage: "Das Montreal-Protokoll wird verabschiedet", eventEndingMessage: "Das Montreal-Protokoll ist verabschiedet", reactions: montrealProtocolReactions, startingYear: 1987, endingYear: 1989}
let kyotoProtocol = {eventName: "kyotoProtocol", eventStartingMessage: "Das Kyoto-Protokoll wird verabschiedet", eventEndingMessage: "Das Kyoto-Protokoll tritt in Kraft", reactions: kyotoProtocolReactions, startingYear: 1997, endingYear: 2005}
let paris = {eventName: "paris", eventStartingMessage: "Das pariser Klimaabkommen wird verabschiedet", eventEndingMessage: "Das pariser Klimaabkommen tritt in Kraft", reactions: parisReactions, startingYear: 2015, endingYear: 2015}

var beginOfGame = true
let timedEvent = [worldWar1, worldWar2, cleanAirAct, montrealProtocol, kyotoProtocol, paris]
let currentTimedEvent
let eventInterval = 5

function getRandomRegion(region) {
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
    resetElementScroll()
    beginOfGame = false
    upgradeBought = false
    let commonEvents = [hurricane, earthquake, tsunami, drought, bushFire, flood, oilTankerExplosion, tornado, natureConservationDay, deforestation]
    let rareEvents = [vulcanicEruption, pandemic, war, pestInfestation, meltingPoles]
    let eventListPossiblilityPicker = [commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, commonEvents, rareEvents]
    let pickedEventList = eventListPossiblilityPicker[Math.floor(Math.random() * eventListPossiblilityPicker.length)]
    currentEvent = pickedEventList[Math.floor(Math.random() * pickedEventList.length)]

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
    document.getElementById("eventMessage").innerHTML = currentEvent.eventMessage
    document.getElementById("reaction1").innerHTML = currentEvent.reactions[0].reaction + " (" + convertNum(currentEvent.reactions[0].cost, 0) + " €)"
    document.getElementById("reaction2").innerHTML = currentEvent.reactions[1].reaction + " (" + convertNum(currentEvent.reactions[1].cost, 0) + " €)"
    document.getElementById("reaction3").innerHTML = currentEvent.reactions[2].reaction + " (" + convertNum(currentEvent.reactions[2].cost, 0) + " €)"
    budgetCheck()
    document.getElementById("event").style.display = "inline-block"
}

function timedEvents() {
    currentTimedEvent = timedEvent[0]
    if (!currentTimedEvent) newEvent()
    else if (year >= currentTimedEvent.endingYear && year >= currentTimedEvent.endingYear) {
        yearElem.innerHTML = currentTimedEvent.endingYear
        document.getElementById("timedEventPopup").style.display = "none"
        document.getElementById("eventMessage").innerHTML = currentTimedEvent.eventEndingMessage
        document.getElementById("reaction1").innerHTML = currentTimedEvent.reactions[0].reaction + " (" + convertNum(currentTimedEvent.reactions[0].cost, 0) + " €)"
        document.getElementById("reaction2").innerHTML = currentTimedEvent.reactions[1].reaction + " (" + convertNum(currentTimedEvent.reactions[1].cost, 0) + " €)"
        document.getElementById("reaction3").innerHTML = currentTimedEvent.reactions[2].reaction + " (" + convertNum(currentTimedEvent.reactions[2].cost, 0) + " €)"
        budgetCheck()
        document.getElementById("event").style.display = "inline-block"
        timedEvent.splice(0, 1) 
    } else if (year >= currentTimedEvent.startingYear && year != currentTimedEvent.startingYear) {
        yearElem.innerHTML = currentTimedEvent.startingYear
        document.getElementById("timedEventMessage").innerHTML = currentTimedEvent.eventStartingMessage
        document.getElementById("timedEventPopup").style.display = "inline-block"
        setTimeout(() => {document.getElementById("timedEventPopup").style.display = 'none'}, 5000)
        newEvent()
    } else newEvent()
}

function reaction(r) {
    let reaction = currentEvent.reactions[r]
    if (currentTimedEvent && year >= currentTimedEvent.endingYear) reaction = currentTimedEvent.reactions[r]
    let infoPopUp = document.getElementById("stats")
    infoPopUp.innerHTML = ""

    document.getElementById("event").style.display = 'none'
    updateBudget(-reaction.cost)
    
    reaction.impacts.forEach(impact => {
        let randomValue = Math.round(Math.random() * (impact.maxValue - impact.minValue) + impact.minValue)
        let randomValueTemperature = (Math.random() * (impact.maxValue - impact.minValue) + impact.minValue)
        randomValueTemperature = Math.round((randomValueTemperature + Number.EPSILON) * 100) /100
        switch (impact.param) {
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
            case "temperature":
                if (randomValueTemperature > 0) {
                    temperature += randomValueTemperature
                    infoPopUp.innerHTML += "<li>Die Welt<wbr>durchschnitts<wbr>temperatur hat sich um " + randomValueTemperature + " °C erhöht.</li>"
                    break
                }
                if (randomValueTemperature <= 0) {
                    temperature += randomValueTemperature
                    infoPopUp.innerHTML += "<li>Die Welt<wbr>durchschnitts<wbr>temperatur hat sich um " + Math.abs(randomValueTemperature) + " °C verringert.</p>"
                    break
                }
                break
            case "populationGrowthRate":
                if (randomValue > 0) {
                    populationGrowthRate += randomValue
                    infoPopUp.innerHTML += "<li>Die Wachstumsrate der Weltbevölkerung hat sich um " + randomValue.toFixed(3) + " % erhöht.</li>"
                    break
                }
                if (randomValue < 0) {
                    populationGrowthRate += randomValue
                    infoPopUp.innerHTML += "<li>Die Wachstumsrate der Weltbevölkerung hat sich um " + Math.abs(randomValue.toFixed(3)) + " % verringert.</li>"
                    break
                }
                break
            case "nothing":
                infoPopUp.innerHTML = "<li>Nichts ist passiert.</li>"
            default:
                break
        }


    })

    let beforeAff = afforestation
    let beforeTemp = temperature
    let beforeWL = waterLevel
    attributeIncrement()
    let statgr = document.getElementById("statsgr")
    statgr.innerHTML = ""
    statgr.innerHTML += "<li>Bewaldung: " + (afforestation-beforeAff).toFixed(1) + " %</li>"
    statgr.innerHTML += "<li>Wasserspiegel: " + ((waterLevel-beforeWL)>0?"+":"") + (waterLevel-beforeWL).toFixed(1) + " m</li>"
    statgr.innerHTML += "<li>Welt<wbr>durchschnitts<wbr>temperatur: " + ((temperature-beforeTemp)>0?"+":"") + (temperature-beforeTemp).toFixed(1) + " °C</li>"
    updateAttributes()
    document.getElementById("info").style.display = "inline-block"
    resetElementScroll()
    timeIncrement()
    gameOver()
}
