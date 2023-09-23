var earthquakeReactions = [
    {
        reaction: "Bergungsteam schicken",
        cost: 2 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: [tsunami]
    },
    {
        reaction: "Notunterkünfte errichten",
        cost: 5 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 8000, maxValue: 80000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: [tsunami]
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 9000, maxValue: 90000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: [tsunami]
    }
]

var tsunamiReactions = [
    {
        reaction: "Evakuieren",
        cost: 4 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 10000, maxValue: 20000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: [flood]
    },
    {
        reaction: "Frühwarnsystem errichten",
        cost: 5 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: [flood]
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: [flood]
    }
]

var droughtReactions = [
    {
        reaction: "Aufforsten",
        cost: 3 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 2000, maxValue: 10000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        }, {param: "waterLevel", minValue: -1, maxValue: -2}],
        triggers: []
    },
    {
        reaction: "Lebensmittel bereitstellen",
        cost: 4 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {
            param: "afforestation",
            minValue: 3,
            maxValue: 4
        }, {param: "waterLevel", minValue: -1, maxValue: -2}],
        triggers: [bushFire]
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 2000, maxValue: 20000}, {
            param: "afforestation",
            minValue: 3,
            maxValue: 4
        }, {param: "waterLevel", minValue: -1, maxValue: -2}],
        triggers: [bushFire]
    }
]

var bushFireReactions = [
    {
        reaction: "Brand bekämpfen",
        cost: 3 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 1500, maxValue: 15000}, {
            param: "temperature",
            minValue: 1,
            maxValue: 1
        }, {param: "animalSpecies", minValue: 100, maxValue: 1000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        }, {param: "co2e", minValue: 0.01, maxValue: 0.02}],
        triggers: []
    },
    {
        reaction: "Evakuieren",
        cost: 4 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {
            param: "temperature",
            minValue: 1,
            maxValue: 1
        }, {param: "animalSpecies", minValue: 500, maxValue: 5000}, {
            param: "afforestation",
            minValue: 4,
            maxValue: 5
        }, {param: "co2e", minValue: 0.03, maxValue: 0.06}],
        triggers: [bushFire]
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {
            param: "temperature",
            minValue: 1,
            maxValue: 1
        }, {param: "animalSpecies", minValue: 500, maxValue: 5000}, {
            param: "afforestation",
            minValue: 4,
            maxValue: 5
        }, {param: "co2e", minValue: 0.03, maxValue: 0.06}],
        triggers: [bushFire]
    }
]

var floodReactions = [
    {
        reaction: "Wälle errichten",
        cost: 2 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 1500, maxValue: 15000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        }],
        triggers: []
    },
    {
        reaction: "Evakuieren",
        cost: 4 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {
            param: "afforestation",
            minValue: 2,
            maxValue: 3
        }],
        triggers: []
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {
            param: "afforestation",
            minValue: 2,
            maxValue: 3
        }],
        triggers: []
    }
]

var vulcanicEruptionReactions = [
    {
        reaction: "Evakuieren",
        cost: 4 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {
            param: "temperature",
            minValue: 1,
            maxValue: 1
        }, {param: "afforestation", minValue: 4, maxValue: 8}],
        triggers: [bushFire]
    },
    {
        reaction: "Rettungskräfte schicken",
        cost: 3 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 2000, maxValue: 20000}, {
            param: "temperature",
            minValue: 1,
            maxValue: 1
        }, {param: "afforestation", minValue: 4, maxValue: 8}],
        triggers: [bushFire]
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 6000, maxValue: 60000}, {
            param: "temperature",
            minValue: 1,
            maxValue: 1
        }, {param: "afforestation", minValue: 4, maxValue: 8}],
        triggers: [bushFire]
    }
]

var pandemicReactions = [
    {
        reaction: "Lockdown anordnen",
        cost: 2 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {
            param: "co2e",
            minValue: -0.01,
            maxValue: -0.02
        }]
    },
    {reaction: "Maskenpflicht anordnen", cost: 1, impacts: [{param: "population", minValue: 1500, maxValue: 15000}]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 10000, maxValue: 100000}]}
]

var oilTankerExplosionReactions = [
    {
        reaction: "Öl abfischen",
        cost: 10 * Math.pow(10,6),
        impacts: [{param: "afforestation", minValue: 1, maxValue: 2}, {
            param: "animalSpecies",
            minValue: 100,
            maxValue: 1000
        }]
    },
    {
        reaction: "Tanker bergen",
        cost: 7 * Math.pow(10,6),
        impacts: [{param: "afforestation", minValue: 1, maxValue: 2}, {
            param: "animalSpecies",
            minValue: 200,
            maxValue: 2000
        }]
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "afforestation", minValue: 1, maxValue: 2}, {
            param: "animalSpecies",
            minValue: 1000,
            maxValue: 10000
        }]
    }
]

var tornadoReactions = [
    {
        reaction: "Evakuieren",
        cost: 4 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {
            param: "afforestation",
            minValue: 2,
            maxValue: 4
        },]
    },
    {
        reaction: "Rettungskräfte schicken",
        cost: 3 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {
            param: "afforestation",
            minValue: 2,
            maxValue: 4
        },]
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 8000, maxValue: 80000}, {
            param: "afforestation",
            minValue: 2,
            maxValue: 4
        },]
    },
]

var warReactions = [
    {
        reaction: "Waffenstillstand aushandeln",
        cost: 8 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 10000, maxValue: 1000000}, {
            param: "co2e",
            minValue: 0.01,
            maxValue: 0.02
        }, {param: "animalSpecies", minValue: 100, maxValue: 1000}]
    },
    {
        reaction: "Wehrpflicht einführen",
        cost: 10 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 20000, maxValue: 2000000}, {
            param: "co2e",
            minValue: 0.01,
            maxValue: 0.03
        }, {param: "animalSpecies", minValue: 200, maxValue: 2000}]
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 50000, maxValue: 5000000}, {
            param: "co2e",
            minValue: 0.01,
            maxValue: 0.03
        }, {param: "animalSpecies", minValue: 200, maxValue: 2000}]
    }
]

var pestInfestationReactions = [
    {
        reaction: "Großflächig mit Pestiziden bekämpfen",
        cost: 10 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {
            param: "co2e",
            minValue: 0.01,
            maxValue: 0.01
        }, {param: "animalSpecies", minValue: 500, maxValue: 5000}, {param: "ozoneLayer", minValue: 1, maxValue: 2}]
    },
    {
        reaction: "nötige Waren importieren",
        cost: 8 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {
            param: "co2e",
            minValue: 0.01,
            maxValue: 0.01
        }, {param: "animalSpecies", minValue: 100, maxValue: 1000}]
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 8000, maxValue: 80000}, {
            param: "co2e",
            minValue: 0.01,
            maxValue: 0.01
        }]
    }
]

var meltingPolesReactions = [
    {
        reaction: "Elektroenergien fördern",
        cost: 7 * Math.pow(10,6),
        impacts: [{param: "co2e", minValue: -0.02, maxValue: -0.04}, {
            param: "animalSpecies",
            minValue: 100,
            maxValue: 1000
        }, {param: "waterLevel", minValue: 1, maxValue: 5}, {param: "temperature", minValue: -1, maxValue: -2}],
        triggers: [flood]
    },
    {
        reaction: "Flugverkehr limitieren",
        cost: 5 * Math.pow(10,6),
        impacts: [{param: "co2e", minValue: -0.01, maxValue: -0.01}, {
            param: "animalSpecies",
            minValue: 100,
            maxValue: 1000
        }, {param: "waterLevel", minValue: 1, maxValue: 5}, {param: "temperature", minValue: -1, maxValue: -2}],
        triggers: [flood]
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "animalSpecies", minValue: 100, maxValue: 1000}, {
            param: "waterLevel",
            minValue: 1,
            maxValue: 5
        }, {param: "temperature", minValue: -1, maxValue: -2}],
        triggers: [flood]
    },
]

var natureConservationDayReactions = [
    {
        reaction: "Stark unterstützen",
        cost: 14 * Math.pow(10,6),
        impacts: [{param: "afforestation", minValue: -4, maxValue: -10}, {
            param: "co2e",
            minValue: -0.02,
            maxValue: -0.02
        }]
    },
    {
        reaction: "Etwas unterstützen",
        cost: 7 * Math.pow(10,6),
        impacts: [{param: "afforestation", minValue: -2, maxValue: -7}, {
            param: "co2e",
            minValue: -0.01,
            maxValue: -0.01
        }]
    },
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "nothing", minValue: 0, maxValue: 0}]}
]

var worldWar1Reactions = [
    {
        reaction: "Städte wieder aufbauen",
        cost: 15 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 16000000, maxValue: 18000000}, {
            param: "afforestation",
            minValue: 2,
            maxValue: 3
        }, {param: "co2e", minValue: 0.01, maxValue: 0.03}], startingYear: [1914], endingYear: [1918]
    },
    {
        reaction: "Ärztliche Hilfe bereitstellen",
        cost: 10 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 15000000, maxValue: 17500000}, {
            param: "afforestation",
            minValue: 3,
            maxValue: 4
        }, {param: "co2e", minValue: 0.01, maxValue: 0.03}], startingYear: [1914], endingYear: [1918]
    },
    {
        reaction: "Nichts machen",
        cost: 0,
        impacts: [{param: "population", minValue: 16000000, maxValue: 18000000}, {
            param: "afforestation",
            minValue: 3,
            maxValue: 4
        }, {param: "co2e", minValue: 0.01, maxValue: 0.03}], startingYear: [1914], endingYear: [1918]
    }
]

var worldWar2Reactions = [
    {
        reaction: "Städte wieder aufbauen",
        cost: 15 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 57000000, maxValue: 70000000}, {
            param: "afforestation",
            minValue: 4,
            maxValue: 5
        }, {param: "co2e", minValue: 0.02, maxValue: 0.04}],
        startingYear: [1939],
        endingYear: [1945]
    },
    {
        reaction: "Ärztliche Hilfe bereitstellen",
        cost: 10 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 55000000, maxValue: 68000000}, {
            param: "afforestation",
            minValue: 5,
            maxValue: 6
        }, {param: "co2e", minValue: 0.02, maxValue: 0.04}],
        startingYear: [1939],
        endingYear: [1945]
    },
    {
        reaction: "Nichts machen",
        cost: 0,
        impacts: [{param: "population", minValue: 57000000, maxValue: 70000000}, {
            param: "afforestation",
            minValue: 5,
            maxValue: 6
        }, {param: "co2e", minValue: 0.02, maxValue: 0.04}],
        startingYear: [1939],
        endingYear: [1945]
    }
]

var deforestationReactions = [
    {
        reaction: "Naturschutzgebiete einrichten",
        cost: 8 * Math.pow(10,6),
        impacts: [{param: "afforestation", minValue: -2, maxValue: -4}, {
            param: "co2e",
            minValue: -0.01,
            maxValue: -0.03
        }]
    },
    {
        reaction: "Abholzung regulieren",
        cost: 4 * Math.pow(10,6),
        impacts: [{param: "afforestation", minValue: 1, maxValue: 3}, {param: "co2e", minValue: -0.01, maxValue: -0.02}]
    },
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "afforestation", minValue: 2, maxValue: 5}]},
]

var hurricaneReactions = [
    {reaction: "Evakuieren", cost: 4 * Math.pow(10,6), impacts: [{param: "population", minValue: 2000, maxValue: 20000}, {param: "afforestation", minValue: 1, maxValue: 2}]},
    {reaction: "Bergungsteam schicken", cost: 3 * Math.pow(10,6), impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {param: "afforestation", minValue: 1, maxValue: 2}]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 4000, maxValue: 40000}, {param: "afforestation", minValue: 1, maxValue: 2}]}
]

var oceans = ["Pazifischen Ozean", "Atlantischen Ozean", "Mittelmeer", "Schwarzen Meer", "Indischen Ozean", "Roten Meer", "Toten Meer", "Arktischen Ozean", "Antarktischen Ozean"]
var countrys = ["Deutschland", " die USA", "China", "Spanien", "Brasilien", "Kanada", "Italien", "Argentinien", "Peru", "Indien", "Japan",
    "Südkorea", "Frankreich", "Marokko", "Simbabwe", "Ghana", "Tschad", "Ungarn", "Norwegen", "Australien", "Sri Lanka", "Panama", "Zypern",
    "Kongo", "Bulgarien", "Nordkorea", "Russland", "Taiwan", "England", "Irland", "Uzbekistan", "Rumänien", "Portugal", "Lettland", "Bolivien",
    "Uruguay", "Kolumbien", "Polen", "Gabun", "Ägypten", "Mexiko", "Chile", "Thailand", "Indonesien", "Dänemark", "Schweiz", "Angola", "Namibia"]
var continents = ["Asien", "Europa", "Australien", "Nordamerika", "Südamerika", "Indien"]

var hurricane = {eventMessage: "Ein Hurrikan verwüstet einige Regionen in " + getRandomRegion("country") , reactions: hurricaneReactions}
var pestInfestation = {eventMessage: "Eine Schädlingsplage in " + getRandomRegion("country") + " führt zu Ernteausfällen und Hungersnöten", reactions: pestInfestationReactions}
var earthquake = {eventMessage: "Ein Erdbeben in " + getRandomRegion("country") + " lässt viele Gebäude einstürzen. Es werden Nachbeben erwartet", reactions: earthquakeReactions}
var tsunami = {eventMessage: "Ein Tsunami kommt auf die Küste in " + getRandomRegion("continent") + " zu", reactions: tsunamiReactions}
var drought = {eventMessage: "Es herrscht eine starke Dürre in " + getRandomRegion("country"), reactions: droughtReactions}
var bushFire = {eventMessage: "In vielen Regionen von " + getRandomRegion("country") + " kommt es zu Waldbränden", reactions: bushFireReactions}
var flood = {eventMessage: "Es kommt in zu Überflutungen in " + getRandomRegion("country"), reactions: floodReactions}
var vulcanicEruption = {eventMessage: "Ein Vulkan bricht in " + getRandomRegion("continent") + " aus", reactions: vulcanicEruptionReactions}
var pandemic = {eventMessage: "Die Inzidenz einer neuen Krankheit steigt stark. In ganz " + getRandomRegion("country") + " verschärft sich die Lage zu einer Pandemie", reactions: pandemicReactions}
var oilTankerExplosion = {eventMessage: "Ein Öltanker ist im " + getRandomRegion("ocean") + " explodiert. Viele Tonnen Öl verbreiten sich im Wasser", reactions: oilTankerExplosionReactions}
var tornado = {eventMessage: "Ein Tornado verwüstet " + getRandomRegion("country"), reactions: tornadoReactions}
var war = {eventMessage: "Es bricht ein Krieg zwischen " + getRandomRegion("country") + " und " + getRandomRegion("country") + " aus", reactions: warReactions}
var meltingPoles = {eventMessage: "Die Polkappen schmelzen immer schneller", reactions: meltingPolesReactions}
var natureConservationDay = {eventMessage: "Es ist Naturschutztag auf der gesamten Welt", reactions: natureConservationDayReactions}
var worldWar1 = {
    eventStartingMessage: "Der erste Weltkrieg beginnt",
    eventEndingMessage: "Der erste Weltkrieg ist vorbei",
    reactions: worldWar1Reactions
}
var worldWar2 = {
    eventStartingMessage: "Der zweite Weltkrieg beginnt",
    eventEndingMessage: "Der zweite Weltkrieg ist vorbei",
    reactions: worldWar2Reactions
}
var deforestation = {eventMessage: "Es kommt zu starker Abholzung der Regenwälder", reactions: deforestationReactions}

var commonEvents = [hurricane, earthquake, tsunami, drought, bushFire, flood, oilTankerExplosion, tornado, natureConservationDay, deforestation]
var rareEvents = [vulcanicEruption, pandemic, war, pestInfestation, meltingPoles]
var currentEvent = undefined

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
    }
}