maxLevel = 5

upgrades = [
    {
        id:"renewableEnergies",
        name: "Erneuerbare Energien",
        cost: 2*10**6,
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
        cost: 10**6,
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
function checkBudgetForUpgrade(){
    upgrades.forEach(upgrade =>{
        button = document.getElementById(upgrade.id).getElementsByTagName("button")[0]
        button.disabled = upgrade.cost > budget || upgrade.currentLevel >= maxLevel
    })
}
function loadUpgrades(){
    upgradeWindow = document.getElementById("upgradeWindow")
    upgrades.forEach((upgrade, index)=>{
        upgradeWindow.innerHTML += "<div id='" + upgrade.id + "' class='upgradeWrapper'></div>"
        upgradeWrapper = document.getElementById(upgrade.id)
        upgradeWrapper.innerHTML+= "<span>" + upgrade.name + "</span>"
        upgradeWrapper.innerHTML+= "<div class='infoContainer'>&#x1F6C8<div class=' + upgradeInfo'>" + upgrade.info + "</div></div>"
        upgradeWrapper.innerHTML+= "<button onclick='buyUpgrade(" + index + ")'>" + convertNum(upgrade.cost,1) + "</button>"
        loadLevels(upgrade)
    })
    checkBudgetForUpgrade()
}

function loadLevels(upgrade){
    width = 1/maxLevel * 100 + "%"
    upgradeWrapper.innerHTML += "<div class='levelWrapper'></div>"
    levelWrapper = Array.from(upgradeWrapper.getElementsByClassName("levelWrapper"))[0]
    for (let i = 1; i < maxLevel+1; i++) {
        levelWrapper.innerHTML += "<div class='level" + i + "' style='width: " + width + "'></div>"
    }
}