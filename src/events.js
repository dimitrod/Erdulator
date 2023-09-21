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

var pestInfestation = {eventMessage: "Schädlingsplage", reactions: pestInfestationReactions}
var earthquake = {eventMessage: "Erdbeben", reactions: earthquakeReactions}
var tsunami = {eventMessage: "Tsunami", reactions: tsunamiReactions}
var drought = {eventMessage: "Dürre", reactions: droughtReactions}
var bushFire = {eventMessage: "Waldbrand", reactions: bushFireReactions}
var flood = {eventMessage: "Überflutung", reactions: floodReactions}
var vulcanicEruption = {eventMessage: "Vulkanausbruch", reactions: vulcanicEruptionReactions}
var pandemic = {eventMessage: "Pandemie", reactions: pandemicReactions}
var oilTankerExplosion = {eventMessage: "Öltanker explodiert", reactions: oilTankerExplosionReactions}
var tornado = {eventMessage: "Tornado", reactions: tornadoReactions}
var war = {eventMessage: "Krieg", reactions: warReactions}
var meltingPoles = {eventMessage: "Polkappenschmelze", reactions: meltingPolesReactions}
var natureConservationDay = {eventMessage: "Naturschutztag", reactions: natureConservationDayReactions}

var commonEvents = [earthquake, tsunami, drought, bushFire, flood, oilTankerExplosion, tornado, natureConservationDay]
var rareEvents = [vulcanicEruption, pandemic, war, pestInfestation, meltingPoles]
var currentEvent = undefined
