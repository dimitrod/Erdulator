maxLevel = 5
let upgradesLeft = 0

upgrades = [
    {
        id:"renewableEnergies",
        name: "Erneuerbare Energien",
        cost: 5*10**6,
        costFactor: 2,
        impacts:[
            {
                name: "waterlevel",
                influence: "low"
            },
            {
                name: "temperature",
                influence:"low"
            }
        ],
        currentLevel: 0,
        info: "Erneuerbare Energien sind dope.",
    },
    {
        id:"veganProducts",
        name: "Vegane Produkte entwickeln",
        cost: 5*10**6,
        costFactor: 1,
        impacts:[
            {
                name: "afforestation",
                influence: "high",
            },
            {
                name: "waterlevel",
                influence: "mid"
            },
        ],
        currentLevel: 0,
        info: "weniger Tierhaltung = weniger Abholzung"
    },
    {
        id:"veganProducts1",
        name: "Vegane Produkte entwickeln",
        cost: 5*10**6,
        costFactor: 1,
        impacts:[
            {
                name: "afforestation",
                influence: "high",
            },
            {
                name: "waterlevel",
                influence: "mid"
            },
        ],
        currentLevel: 0,
        info: "weniger Tierhaltung = weniger Abholzung"
    },
    {
        id:"veganProducts2",
        name: "Vegane Produkte entwickeln",
        cost: 5*10**6,
        costFactor: 1,
        impacts:[
            {
                name: "afforestation",
                influence: "high",
            },
            {
                name: "waterlevel",
                influence: "mid"
            },
        ],
        currentLevel: 0,
        info: "weniger Tierhaltung = weniger Abholzung"
    },
    {
        id:"veganProducts3",
        name: "Vegane Produkte entwickeln",
        cost: 5*10**6,
        costFactor: 1,
        impacts:[
            {
                name: "afforestation",
                influence: "high",
            },
            {
                name: "waterlevel",
                influence: "mid"
            },
        ],
        currentLevel: 0,
        info: "weniger Tierhaltung = weniger Abholzung"
    },
    {
        id:"veganProducts4",
        name: "Vegane Produkte entwickeln",
        cost: 5*10**6,
        costFactor: 1,
        impacts:[
            {
                name: "afforestation",
                influence: "high",
            },
            {
                name: "waterlevel",
                influence: "mid"
            },
        ],
        currentLevel: 0,
        info: "weniger Tierhaltung = weniger Abholzung"
    }
]
function checkUpgrades(){
    upgrades.forEach(upgrade =>{
        button = document.getElementById(upgrade.id).getElementsByTagName("button")[0]
        button.disabled = upgrade.cost > budget || upgrade.currentLevel >= maxLevel || upgradesLeft == 0
    })
}
function loadUpgrades(){
    upgradesWrapper = document.getElementById("upgradesWrapper")
    upgrades.forEach((upgrade, index)=>{
        upgradesWrapper.innerHTML += "<div id='" + upgrade.id + "' class='upgradeWrapper'></div>"
        upgradeWrapper = document.getElementById(upgrade.id)
        upgradeWrapper.innerHTML+= "<span>" + upgrade.name + "</span>"
        upgradeWrapper.innerHTML+= "<div class='infoContainer'>&#x1F6C8<div class='upgradeInfo'>" + upgrade.info + "</div></div>"
        upgradeWrapper.innerHTML+= "<button class='nes-btn is-warning' onclick='buyUpgrade(" + index + ")'>" + convertNum(upgrade.cost,1) + "</button>"
        loadLevels(upgrade)
    })
    checkUpgrades()
    document.getElementById("upgradeButton").disabled = true
    document.getElementById("upgradesLeft").innerHTML = upgradesLeft
}

function loadLevels(upgrade){
    width = 1/maxLevel * 100 + "%"
    upgradeWrapper.innerHTML += "<div class='levelWrapper'></div>"
    levelWrapper = Array.from(upgradeWrapper.getElementsByClassName("levelWrapper"))[0]
    for (let i = 1; i < maxLevel+1; i++) {
        levelWrapper.innerHTML += "<div class='level" + i + "' style='width: " + width + "'></div>"
    }
}