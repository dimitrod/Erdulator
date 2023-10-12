maxLevel = 3

upgrades = [
    {
        id:"renewableEnergies",
        name: "ErneuerbareEnergien",
        cost: 2*10**9,
        costFactor: 2,
        impacts:[
            {
                name: "co2e",
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
        cost: 10**9,
        costFactor: 1,
        impacts:[
            {
                name: "afforestation",
                influence: "high",
            },
            {
                name: "co2e",
                influence: "mid"
            },
        ],
        currentLevel: 0,
        info: "weniger Tierhaltung = weniger Abholzung"
    }
]

function loadUpgrades(){
    upgradeWindow = document.getElementById("upgradeWindow")
    upgrades.forEach((upgrade, index)=>{
        upgradeWindow.innerHTML += "<div id='" + upgrade.id + "' class='upgradeWrapper'></div>"
        upgradeWrapper = document.getElementById(upgrade.id)
        upgradeWrapper.innerHTML+= "<span>" + upgrade.name + "</span>"
        upgradeWrapper.innerHTML+= "<div class='infoContainer'>&#x1F6C8<div class=' + upgradeInfo'>" + upgrade.info + "</div></div>"
        upgradeWrapper.innerHTML+= "<button onclick='buyUpgrade(" + index + ")'>" + convertNum(upgrade.cost,1) + "</button>"
    })
}

loadUpgrades()