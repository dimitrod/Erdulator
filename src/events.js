var earthquakeReactions = [
    {
        reaction: "Bergungsteam schicken",
        cost: 2,
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: [tsunami]
    },
    {
        reaction: "Notunterkünfte errichten",
        cost: 5,
        impacts: [{param: "population", minValue: 8000, maxValue: 80000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: [tsunami]
    },
    {
        reaction: "Nichts machen",
        cost: 0,
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
        cost: 4,
        impacts: [{param: "population", minValue: 10000, maxValue: 20000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: [flood]
    },
    {
        reaction: "Frühwarnsystem errichten",
        cost: 5,
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: [flood]
    },
    {
        reaction: "Nichts machen",
        cost: 0,
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
        cost: 3,
        impacts: [{param: "population", minValue: 2000, maxValue: 10000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        }, {param: "waterLevel", minValue: -1, maxValue: -2}],
        triggers: []
    },
    {
        reaction: "Lebensmittel bereitstellen",
        cost: 4,
        impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {
            param: "afforestation",
            minValue: 3,
            maxValue: 4
        }, {param: "waterLevel", minValue: -1, maxValue: -2}],
        triggers: [bushFire]
    },
    {
        reaction: "Nichts machen",
        cost: 0,
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
        cost: 3,
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
        cost: 4,
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
        cost: 0,
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
        cost: 2,
        impacts: [{param: "population", minValue: 1500, maxValue: 15000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        }],
        triggers: []
    },
    {
        reaction: "Evakuieren",
        cost: 4,
        impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {
            param: "afforestation",
            minValue: 2,
            maxValue: 3
        }],
        triggers: []
    },
    {
        reaction: "Nichts machen",
        cost: 0,
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
        cost: 4,
        impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {
            param: "temperature",
            minValue: 1,
            maxValue: 1
        }, {param: "afforestation", minValue: 4, maxValue: 8}],
        triggers: [bushFire]
    },
    {
        reaction: "Rettungskräfte schicken",
        cost: 3,
        impacts: [{param: "population", minValue: 2000, maxValue: 20000}, {
            param: "temperature",
            minValue: 1,
            maxValue: 1
        }, {param: "afforestation", minValue: 4, maxValue: 8}],
        triggers: [bushFire]
    },
    {
        reaction: "Nichts machen",
        cost: 0,
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
        cost: 2,
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
        cost: 10,
        impacts: [{param: "afforestation", minValue: 1, maxValue: 2}, {
            param: "animalSpecies",
            minValue: 100,
            maxValue: 1000
        }]
    },
    {
        reaction: "Tanker bergen",
        cost: 7,
        impacts: [{param: "afforestation", minValue: 1, maxValue: 2}, {
            param: "animalSpecies",
            minValue: 200,
            maxValue: 2000
        }]
    },
    {
        reaction: "Nichts machen",
        cost: 0,
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
        cost: 4,
        impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {
            param: "afforestation",
            minValue: 2,
            maxValue: 4
        },]
    },
    {
        reaction: "Rettungskräfte schicken",
        cost: 3,
        impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {
            param: "afforestation",
            minValue: 2,
            maxValue: 4
        },]
    },
    {
        reaction: "Nichts machen",
        cost: 0,
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
        cost: 8,
        impacts: [{param: "population", minValue: 10000, maxValue: 1000000}, {
            param: "co2e",
            minValue: 0.01,
            maxValue: 0.02
        }, {param: "animalSpecies", minValue: 100, maxValue: 1000}]
    },
    {
        reaction: "Wehrpflicht einführen",
        cost: 10,
        impacts: [{param: "population", minValue: 30000, maxValue: 3000000}, {
            param: "co2e",
            minValue: 0.01,
            maxValue: 0.03
        }, {param: "animalSpecies", minValue: 200, maxValue: 2000}]
    },
    {
        reaction: "Nichts machen",
        cost: 0,
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
        cost: 10,
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {
            param: "co2e",
            minValue: 0.01,
            maxValue: 0.01
        }, {param: "animalSpecies", minValue: 500, maxValue: 5000}, {param: "ozoneLayer", minValue: 1, maxValue: 2}]
    },
    {
        reaction: "nötige Waren importieren",
        cost: 8,
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {
            param: "co2e",
            minValue: 0.01,
            maxValue: 0.01
        }, {param: "animalSpecies", minValue: 100, maxValue: 1000}]
    },
    {
        reaction: "Nichts machen",
        cost: 0,
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
        cost: 7,
        impacts: [{param: "co2e", minValue: -0.02, maxValue: -0.04}, {
            param: "animalSpecies",
            minValue: 100,
            maxValue: 1000
        }, {param: "waterLevel", minValue: 1, maxValue: 5}, {param: "temperature", minValue: -1, maxValue: -2}],
        triggers: [flood]
    },
    {
        reaction: "Flugverkehr limitieren",
        cost: 5,
        impacts: [{param: "co2e", minValue: -0.01, maxValue: -0.01}, {
            param: "animalSpecies",
            minValue: 100,
            maxValue: 1000
        }, {param: "waterLevel", minValue: 1, maxValue: 5}, {param: "temperature", minValue: -1, maxValue: -2}],
        triggers: [flood]
    },
    {
        reaction: "Nichts machen",
        cost: 0,
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
        cost: 14,
        impacts: [{param: "afforestation", minValue: -4, maxValue: -10}, {
            param: "co2e",
            minValue: -0.02,
            maxValue: -0.02
        }]
    },
    {
        reaction: "Etwas unterstützen",
        cost: 7,
        impacts: [{param: "afforestation", minValue: -2, maxValue: -7}, {
            param: "co2e",
            minValue: -0.01,
            maxValue: -0.01
        }]
    },
    {reaction: "Nichts machen", cost: 0}
]

var worldWar1Reactions = [
    {
        reaction: "Städte wieder aufbauen",
        cost: 15,
        impacts: [{param: "population", minValue: 16000000, maxValue: 18000000}, {
            param: "afforestation",
            minValue: 2,
            maxValue: 3
        }, {param: "co2e", minValue: 0.01, maxValue: 0.03}], startingYear: [1914], endingYear: [1918]
    },
    {
        reaction: "Ärztliche Hilfe bereitstellen",
        cost: 10,
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
        cost: 15,
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
        cost: 10,
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
        cost: 8,
        impacts: [{param: "afforestation", minValue: -2, maxValue: -4}, {
            param: "co2e",
            minValue: -0.01,
            maxValue: -0.03
        }]
    },
    {
        reaction: "Abholzung regulieren",
        cost: 4,
        impacts: [{param: "afforestation", minValue: 1, maxValue: 3}, {param: "co2e", minValue: -0.01, maxValue: -0.02}]
    },
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "afforestation", minValue: 2, maxValue: 5}]},
]

var hurricaneReactions = [
    {reaction: "Evakuieren", cost: 4, impacts: [{param: "population", minValue: 2000, maxValue: 20000}, {param: "afforestation", minValue: 1, maxValue: 2}]},
    {reaction: "Bergungsteam schicken", cost: 3, impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {param: "afforestation", minValue: 1, maxValue: 2}]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 4000, maxValue: 40000}, {param: "afforestation", minValue: 1, maxValue: 2}]}
]


var hurricane = {eventMessage: "Ein Hurricane verwüstet einige Regionen", reactions: hurricaneReactions}
var pestInfestation = {eventMessage: "Eine Schädlingsplage führt zu Ernteausfällen und Hungersnöten", reactions: pestInfestationReactions}
var earthquake = {eventMessage: "Ein Erdbeben lässt viele Gebäude einstürzen. Es werden Nachbeben erwartet", reactions: earthquakeReactions}
var tsunami = {eventMessage: "Ein Tsunami kommt auf die Küste zu", reactions: tsunamiReactions}
var drought = {eventMessage: "Es herrscht eine starke Dürre", reactions: droughtReactions}
var bushFire = {eventMessage: "In vielen Regionen kommt es zu Waldbränden", reactions: bushFireReactions}
var flood = {eventMessage: "Es kommt in einigen Regionen zu Überflutungen", reactions: floodReactions}
var vulcanicEruption = {eventMessage: "Ein Vulkan bricht aus", reactions: vulcanicEruptionReactions}
var pandemic = {eventMessage: "Die Inzidenzen einer neuen Krankheit steigt stark. Die Lage verschlimmert sich zu einer Pandemie", reactions: pandemicReactions}
var oilTankerExplosion = {eventMessage: "Ein Öltanker ist auf dem Ozean explodiert. Viele Tonnen Öl verbreiten sich im Wasser", reactions: oilTankerExplosionReactions}
var tornado = {eventMessage: "Ein Tornado verwüstet einige Regionen", reactions: tornadoReactions}
var war = {eventMessage: "Es bricht ein Krieg aus", reactions: warReactions}
var meltingPoles = {eventMessage: "Die Polkappen schmelzen immer schneller", reactions: meltingPolesReactions}
var natureConservationDay = {eventMessage: "Es ist Naturschutztag", reactions: natureConservationDayReactions}
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
