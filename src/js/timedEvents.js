let worldWar1Reactions = [
    {
        reaction: "Städte wieder aufbauen",
        cost: 15 * Math.pow(10,6),
        impacts: [{
            param: "population", minValue: 16000000, maxValue: 18000000}, {
            param: "afforestation", minValue: 2, maxValue: 3
        }]
    },
    {
        reaction: "Ärztliche Hilfe bereitstellen",
        cost: 10 * Math.pow(10,6),
        impacts: [{
            param: "population", minValue: 15000000, maxValue: 17500000}, {
            param: "afforestation", minValue: 3, maxValue: 4
        }]
    },
    {
        reaction: "Nichts machen",
        cost: 0,
        impacts: [{
            param: "population", minValue: 16000000, maxValue: 18000000}, {
            param: "afforestation", minValue: 3, maxValue: 4
        }]
    }
]

let worldWar2Reactions = [
    {
        reaction: "Städte wieder aufbauen",
        cost: 15 * Math.pow(10,6),
        impacts: [{
            param: "population", minValue: 57000000, maxValue: 70000000}, {
            param: "afforestation", minValue: 4, maxValue: 5
        }]},
    {
        reaction: "Ärztliche Hilfe bereitstellen",
        cost: 10 * Math.pow(10,6),
        impacts: [{
            param: "population", minValue: 55000000, maxValue: 68000000}, {
            param: "afforestation", minValue: 5, maxValue: 6
        }]},
    {
        reaction: "Nichts machen",
        cost: 0,
        impacts: [{
            param: "population", minValue: 57000000, maxValue: 70000000}, {
            param: "afforestation", minValue: 5, maxValue: 6
        }]}
]

let cleanAirActReactions = [
    {
        reaction: "Vertragsbedingungen vollständig erfüllen",
        cost: 7 * Math.pow(10,6),
        impacts: [{
            param: "temperature", minValue: 1, maxValue: 1
        }]},
    {
        reaction: "Vertragsbedingungen teilweise erfüllen",
        cost: 10 * Math.pow(10,6),
        impacts: [{
            param: "population", minValue: 6000, maxValue: 10000}, {
            param: "afforestation", minValue: 2, maxValue: 2
        }]},
    {
        reaction: "Vertragsbedingungen nicht erfüllen",
        cost: 0,
        impacts: [{
            param: "population", minValue: 10000, maxValue: 12000}, {
            param: "afforestation", minValue: 3, maxValue: 4
        }]}
]

let montrealProtocolReactions = [
    {
        reaction: "FCKW-Verbot vollständig umsetzen",
        cost: 10 * Math.pow(10,6),
        impacts: [{
            param: "temperature", minValue: 1, maxValue: 1}, {
            param: "populationGrowthRate", minValue: 0.002, maxValue: 0.004
            }]},
    {
        reaction: "FCKW-Verbot teilweise umsetzen",
        cost: 6 * Math.pow(10,6),
        impacts: [{
            param: "population", minValue: 6000, maxValue: 10000}, {
            param: "afforestation", minValue: 2, maxValue: 2}, {
            param: "populationGrowthRate", minValue: 0.001, maxValue: 0.003
            }]},
    {
        reaction: "FCKW-Verbot nicht umsetzen",
        cost: 0,
        impacts: [{
            param: "population", minValue: 10000, maxValue: 12000}, {
            param: "afforestation", minValue: 3, maxValue: 4}, {
            param: "populationGrowthRate", minValue: -0.002, maxValue: -0.005
        }]}
]