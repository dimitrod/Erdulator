var earthquakeReactions = [
    {
        reaction: "Bergungsteam schicken",
        cost: 2 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: []
    },
    {
        reaction: "Notunterkünfte errichten",
        cost: 5 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 8000, maxValue: 80000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: []
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 9000, maxValue: 90000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: []
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
        triggers: []
    },
    {
        reaction: "Frühwarnsystem errichten",
        cost: 5 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: []
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 3
        }],
        triggers: []
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
        triggers: []
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 2000, maxValue: 20000}, {
            param: "afforestation",
            minValue: 3,
            maxValue: 4
        }, {param: "waterLevel", minValue: -1, maxValue: -2}],
        triggers: []
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
        triggers: []
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
        triggers: []
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
        triggers: []
    },
    {
        reaction: "Rettungskräfte schicken",
        cost: 3 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 2000, maxValue: 20000}, {
            param: "temperature",
            minValue: 1,
            maxValue: 1
        }, {param: "afforestation", minValue: 4, maxValue: 8}],
        triggers: []
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 6000, maxValue: 60000}, {
            param: "temperature",
            minValue: 1,
            maxValue: 1
        }, {param: "afforestation", minValue: 4, maxValue: 8}],
        triggers: []
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
        triggers: []
    },
    {
        reaction: "Flugverkehr limitieren",
        cost: 5 * Math.pow(10,6),
        impacts: [{param: "co2e", minValue: -0.01, maxValue: -0.01}, {
            param: "animalSpecies",
            minValue: 100,
            maxValue: 1000
        }, {param: "waterLevel", minValue: 1, maxValue: 5}, {param: "temperature", minValue: -1, maxValue: -2}],
        triggers: []
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "animalSpecies", minValue: 100, maxValue: 1000}, {
            param: "waterLevel",
            minValue: 1,
            maxValue: 5
        }, {param: "temperature", minValue: -1, maxValue: -2}],
        triggers: []
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
var countrys = ["Afghanistan", "Ägypten", "Albanien", "Algerien", "Andorra", "Angola", "Antigua und Barbuda", "Äquatorialguinea", "Argentinien", "Armenien", "Aserbaidschan", "Äthiopien",
    "Australien", "Bahamas", "Bahrain", "Bangladesch", "Barbados", "Belarus", "Belgien", "Belize", "Benin", "Bhutan", "Bolivien", "Bosnien und Herzegowina", "Botswana", "Brasilien", "Brunei",
    "Bulgarien", "Burkina Faso", "Burundi", "Chile", "China", "Costa Rica", "Dänemark", "Deutschland", "Dominica", "Dominikanische Republik", "Dschibuti", "Ecuador", "El Salvador", "Elfenbeinküste",
    "Eritrea", "Estland", "Eswatini", "Fidschi", "Finnland", "Frankreich", "Gabun", "Gambia", "Georgien", "Ghana", "Grenada", "Griechenland", "Großbritannien", "Guatemala", "Guinea", "Guinea-Bissau",
    "Guyana", "Haiti", "Honduras", "Indien", "Indonesien", "Irak", "Iran", "Irland", "Island", "Israel", "Italien", "Jamaika", "Japan", "Jemen", "Jordanien", "Kambodscha", "Kamerun", "Kanada",
    "Kap Verde", "Kasachstan", "Katar", "Kenia", "Kirgisistan", "Kiribati", "Kolumbien", "Komoren", "Kongo (Demokratische Republik)", "Kongo (Republik)", "Kroatien", "Kuba", "Kuwait", "Laos",
    "Lesotho", "Lettland", "Libanon", "Liberia", "Libyen", "Liechtenstein", "Litauen", "Luxemburg", "Madagaskar", "Malawi", "Malaysia", "den Malediven", "Mali", "Malta", "Marokko", "Marshallinseln",
    "Mauretanien", "Mauritius", "Mexiko", "Mikronesien", "Moldawien", "Monaco", "Mongolei", "Montenegro", "Mosambik", "Myanmar", "Namibia", "Nauru", "Nepal", "Neuseeland", "Nicaragua", "Niederlande",
    "Niger", "Nigeria", "Nordmazedonien", "Nordkorea", "Norwegen", "Oman", "Österreich", "Pakistan", "Palau", "Panama", "Papua-Neuguinea", "Paraguay", "Peru", "Philippinen", "Polen", "Portugal", "Ruanda",
    "Rumänien", "Russland", "Salomonen", "Sambia", "Samoa", "San Marino", "Saudi-Arabien", "Schweden", "Schweiz", "Senegal", "Serbien", "Seychellen", "Sierra Leone", "Simbabwe", "Singapur", "Slowakei",
    "Slowenien", "Somalia", "Spanien", "Sri Lanka", "St. Kitts und Nevis", "St. Lucia", "St. Vincent und die Grenadinen", "Südafrika", "Sudan", "Südsudan", "Suriname", "Syrien", "Tadschikistan",
    "Taiwan", "Tansania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad und Tobago", "Tschad", "Tschechien", "Tunesien", "Türkei", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "Ungarn",
    "Uruguay", "Usbekistan", "Vanuatu", "Vatikanstadt", "Venezuela", "den Vereinigten Arabischen Emiraten", "den Vereinigten Staaten von Amerika", "Vietnam", "Zentralafrikanische Republik"]
var continents = ["Asien", "Europa", "Australien", "Nordamerika", "Südamerika", "Indien"]
var rainforests = ["Amazonas-Regenwald", "Kongobecken-Regenwald", "Sundarbans-Regenwald", "Regenwald von Neuguinea", "Regenwald des westlichen Ghana", "Atlantic Forest",
    "Valdivianischer Regenwald", "Regenwald von Borneo", "Regenwald von Sumatra", "Madagaskar-Regenwald"]
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