let earthquakeReactions = [
    {
        reaction: "Bergungsteam schicken",
        cost: 2 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        }],
        triggers: []
    },
    {
        reaction: "Notunterkünfte errichten",
        cost: 5 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 8000, maxValue: 80000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        }],
        triggers: []
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 9000, maxValue: 90000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        }],
        triggers: []
    }
]

let tsunamiReactions = [
    {
        reaction: "Evakuieren",
        cost: 4 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 10000, maxValue: 20000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        }],
        triggers: []
    },
    {
        reaction: "Rettungsteams schicken",
        cost: 3 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 15000, maxValue: 50000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        }],
        triggers: []
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        }],
        triggers: []
    }
]

let droughtReactions = [
    {
        reaction: "Aufforsten",
        cost: 3 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 2000, maxValue: 10000}, {param: "waterLevel", minValue: -1, maxValue: -2}],
        triggers: []
    },
    {
        reaction: "Lebensmittel bereitstellen",
        cost: 4 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        }, {param: "waterLevel", minValue: -1, maxValue: -2}],
        triggers: []
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 2000, maxValue: 20000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        }, {param: "waterLevel", minValue: -1, maxValue: -2}],
        triggers: []
    }
]

let bushFireReactions = [
    {
        reaction: "Brand bekämpfen",
        cost: 3 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 1500, maxValue: 15000}, {
            param: "temperature",
            minValue: 0.2,
            maxValue: 0.2
        }, {param: "animalSpecies", minValue: 100, maxValue: 1000}, {
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
            param: "temperature",
            minValue: 0.2,
            maxValue: 0.2
        }, {param: "animalSpecies", minValue: 500, maxValue: 5000}, {
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
            param: "temperature",
            minValue: 0.2,
            maxValue: 0.2
        }, {param: "animalSpecies", minValue: 500, maxValue: 5000}, {
            param: "afforestation",
            minValue: 2,
            maxValue: 3
        }],
        triggers: []
    }
]

let floodReactions = [
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
            minValue: 1,
            maxValue: 2
        }],
        triggers: []
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        }],
        triggers: []
    }
]

let vulcanicEruptionReactions = [
    {
        reaction: "Evakuieren",
        cost: 4 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {
            param: "temperature",
            minValue: 0.2,
            maxValue: 0.2
        }, {param: "afforestation", minValue: 3, maxValue: 5}],
        triggers: []
    },
    {
        reaction: "Rettungskräfte schicken",
        cost: 3 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 2000, maxValue: 20000}, {
            param: "temperature",
            minValue: 0.2,
            maxValue: 0.2
        }, {param: "afforestation", minValue: 3, maxValue: 5}],
        triggers: []
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 6000, maxValue: 60000}, {
            param: "temperature",
            minValue: 0.2,
            maxValue: 0.2
        }, {param: "afforestation", minValue: 3, maxValue: 5}],
        triggers: []
    }
]

let pandemicReactions = [
    {
        reaction: "Lockdown anordnen",
        cost: 2 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 1000, maxValue: 10000}]
    },
    {
        reaction: "Maskenpflicht anordnen", 
        cost: Math.pow(10, 6), 
        impacts: [{param: "population", minValue: 1500, maxValue: 15000}]},
    {
        reaction: "Nichts machen", 
        cost: 0, 
        impacts: [{param: "population", minValue: 10000, maxValue: 100000}]}
]

let oilTankerExplosionReactions = [
    {
        reaction: "Öl abfischen",
        cost: 4 * Math.pow(10,6),
        impacts: [{param: "afforestation", minValue: 0, maxValue: 1}]
    },
    {
        reaction: "Tanker bergen",
        cost: 2 * Math.pow(10,6),
        impacts: [{param: "afforestation", minValue: 1, maxValue: 2}]
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "afforestation", minValue: 1, maxValue: 2}]
    }
]

let tornadoReactions = [
    {
        reaction: "Evakuieren",
        cost: 4 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 1000, maxValue: 10000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        },]
    },
    {
        reaction: "Rettungskräfte schicken",
        cost: 3 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        },]
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 8000, maxValue: 80000}, {
            param: "afforestation",
            minValue: 1,
            maxValue: 2
        },]
    },
]

let warReactions = [
    {
        reaction: "Waffenstillstand aushandeln",
        cost: 8 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 10000, maxValue: 1000000},
        {param: "animalSpecies", minValue: 100, maxValue: 1000}]
    },
    {
        reaction: "Wehrpflicht einführen",
        cost: 10 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 20000, maxValue: 2000000}, 
        {param: "animalSpecies", minValue: 200, maxValue: 2000}]
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 50000, maxValue: 5000000},
        {param: "animalSpecies", minValue: 200, maxValue: 2000}]
    }
]

let pestInfestationReactions = [
    {
        reaction: "Großflächig mit Pestiziden bekämpfen",
        cost: 8 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}]
    },
    {
        reaction: "nötige Waren importieren",
        cost: 6 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 5000, maxValue: 50000}]
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{param: "population", minValue: 8000, maxValue: 80000}]
    }
]

let meltingPolesReactions = [
    {
        reaction: "Elektroenergien fördern",
        cost: 7 * Math.pow(10,6),
        impacts: [{param: "waterLevel", minValue: 1, maxValue: 1}, {param: "temperature", minValue: -0.3, maxValue: -0.5}],
        triggers: []
    },
    {
        reaction: "Flugverkehr limitieren",
        cost: 5 * Math.pow(10,6),
        impacts: [{param: "waterLevel", minValue: 1, maxValue: 1}, {param: "temperature", minValue: -0.2, maxValue: -0.4}],
        triggers: []
    },
    {
        reaction: "Nichts machen",
        cost: 0 * Math.pow(10,6),
        impacts: [{
            param: "waterLevel",
            minValue: 2,
            maxValue: 2
        }, {param: "temperature", minValue: -0.1, maxValue: -0.2}],
        triggers: []
    },
]

let natureConservationDayReactions = [
    {
        reaction: "Stark unterstützen",
        cost: 14 * Math.pow(10,6),
        impacts: [{param: "afforestation", minValue: -7, maxValue: -14}, {param: "temperature", minValue: -0.3, maxValue: -0.6}, {param: "waterlevel", minValue: -3, maxValue: -5}]
    },
    {
        reaction: "Etwas unterstützen",
        cost: 7 * Math.pow(10,6),
        impacts: [{param: "afforestation", minValue: -5, maxValue: -10}, {param: "temperature", minValue: -0.2, maxValue: -0.3}, {param: "waterlevel", minValue: -1, maxValue: -3}]
    },
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "nothing", minValue: 0, maxValue: 0}]}
]

let deforestationReactions = [
    {
        reaction: "Naturschutzgebiete einrichten",
        cost: 8 * Math.pow(10,6),
        impacts: [{param: "afforestation", minValue: -2, maxValue: -4}, {param: "temperature", minValue: -0.2, maxValue: -0.4}]
    },
    {
        reaction: "Abholzung regulieren",
        cost: 4 * Math.pow(10,6),
        impacts: [{param: "afforestation", minValue: 1, maxValue: 3}, {param: "temperature", minValue: -0.1, maxValue: -0.3}]
    },
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "afforestation", minValue: 2, maxValue: 5}]},
]

let hurricaneReactions = [
    {reaction: "Evakuieren", cost: 4 * Math.pow(10,6), impacts: [{param: "population", minValue: 2000, maxValue: 20000}, {param: "afforestation", minValue: 1, maxValue: 2}]},
    {reaction: "Bergungsteam schicken", cost: 3 * Math.pow(10,6), impacts: [{param: "population", minValue: 3000, maxValue: 30000}, {param: "afforestation", minValue: 1, maxValue: 2}]},
    {reaction: "Nichts machen", cost: 0, impacts: [{param: "population", minValue: 4000, maxValue: 40000}, {param: "afforestation", minValue: 1, maxValue: 2}]}
]

let oceans = ["Pazifischen Ozean", "Atlantischen Ozean", "Mittelmeer", "Schwarzen Meer", "Indischen Ozean", "Roten Meer", "Toten Meer", "Arktischen Ozean", "Antarktischen Ozean"]
let countrys = ["Afghanistan", "Ägypten", "Albanien", "Algerien", "Andorra", "Angola", "Antigua und Barbuda", "Äquatorialguinea", "Argentinien", "Armenien", "Aserbaidschan", "Äthiopien",
    "Australien", "Bahamas", "Bahrain", "Bangladesch", "Barbados", "Belarus", "Belgien", "Belize", "Benin", "Bhutan", "Bolivien", "Bosnien und Herzegowina", "Botswana", "Brasilien", "Brunei",
    "Bulgarien", "Burkina Faso", "Burundi", "Chile", "China", "Costa Rica", "Dänemark", "Deutschland", "Dominica", "Dominikanische Republik", "Dschibuti", "Ecuador", "El Salvador", "Elfenbeinküste",
    "Eritrea", "Estland", "Eswatini", "Fidschi", "Finnland", "Frankreich", "Gabun", "Gambia", "Georgien", "Ghana", "Grenada", "Griechenland", "Großbritannien", "Guatemala", "Guinea", "Guinea-Bissau",
    "Guyana", "Haiti", "Honduras", "Indien", "Indonesien", "Irak", "Iran", "Irland", "Island", "Israel", "Italien", "Jamaika", "Japan", "Jemen", "Jordanien", "Kambodscha", "Kamerun", "Kanada",
    "Kap Verde", "Kasachstan", "Katar", "Kenia", "Kirgisistan", "Kiribati", "Kolumbien", "Komoren", "Kongo (Demokratische Republik)", "Kongo (Republik)", "Kroatien", "Kuba", "Kuwait", "Laos",
    "Lesotho", "Lettland", "Libanon", "Liberia", "Libyen", "Liechtenstein", "Litauen", "Luxemburg", "Madagaskar", "Malawi", "Malaysia", "den Malediven", "Mali", "Malta", "Marokko", "Marshallinseln",
    "Mauretanien", "Mauritius", "Mexiko", "Mikronesien", "Moldawien", "Monaco", "Mongolei", "Montenegro", "Mosambik", "Myanmar", "Namibia", "Nauru", "Nepal", "Neuseeland", "Nicaragua", "Niederlande",
    "Niger", "Nigeria", "Nordmazedonien", "Nordkorea", "Norwegen", "Oman", "Österreich", "Pakistan", "Palau", "Panama", "Papua-Neuguinea", "Paraguay", "Peru", "Philippinen", "Polen", "Portugal", "Ruanda",
    "Rumänien", "Russland", "Salomonen", "Sambia", "Samoa", "San Marino", "Saudi-Arabien", "Schweden", "Schweiz", "Senegal", "Serbien", "den Seychellen", "Sierra Leone", "Simbabwe", "Singapur", "Slowakei",
    "Slowenien", "Somalia", "Spanien", "Sri Lanka", "St. Kitts und Nevis", "St. Lucia", "St. Vincent und die Grenadinen", "Südafrika", "Sudan", "Südsudan", "Suriname", "Syrien", "Tadschikistan",
    "Taiwan", "Tansania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad und Tobago", "Tschad", "Tschechien", "Tunesien", "Türkei", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "Ungarn",
    "Uruguay", "Usbekistan", "Vanuatu", "Vatikanstadt", "Venezuela", "den Vereinigten Arabischen Emiraten", "den Vereinigten Staaten von Amerika", "Vietnam", "der Zentralafrikanischen Republik"]
let continents = ["Asien", "Europa", "Australien", "Nordamerika", "Südamerika", "Indien"]
let rainforests = ["Amazonas-Regenwald", "Kongobecken-Regenwald", "Sundarbans-Regenwald", "Regenwald von Neuguinea", "Regenwald des westlichen Ghana", "Atlantic Forest",
    "Valdivianischer Regenwald", "Regenwald von Borneo", "Regenwald von Sumatra", "Madagaskar-Regenwald"]
