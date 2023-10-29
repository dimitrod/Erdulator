maxLevel = 5
let upgradesLeft = 0

upgrades = [
    {
        id:"renewableEnergies",
        name: "Erneuerbare Energien",
        cost: 10*10**6,
        costFactor: 2,
        impacts:[
            {
                name: "waterlevel",
                influence: "mid"
            },
            {
                name: "temperature",
                influence:"mid"
            }
        ],
        currentLevel: 0,
        info: "Der Großteil der Treibhausgasemissionen stammt aus der Energieproduktion. Durch den Umstieg auf erneuerbare Energien werden diese Emissionen drastisch gesenkt. Der Meeresspiegel steigt durch die höheren Temperaturen, wodurch sich das Wasser ausdehnt und Gletscher schmelzen. In diesen Küstengebieten leben derzeit 40 % der Weltbevölkerung, die 35 % des weltweiten BIP erwirtschaften, und gefährdet sind vor allem Entwicklungsländer mit ihren stetig wachsenden Megastädten in Flussdeltas"
    },
    {
        id:"veganProducts",
        name: "Entwicklung von veganen Produkten fördern",
        cost: 4*10**6,
        costFactor: 1,
        impacts:[
            {
                name: "afforestation",
                influence: "high",
            },
            {
                name: "waterlevel",
                influence: "low"
            },
            {
                name: "temperature",
                influence: "low"
            }
        ],
        currentLevel: 0,
        info: "Die Produktion tierischer Produkte, insbesondere Fleisch und Milch, erzeugt erhebliche Treibhausgasemissionen, hauptsächlich Methan und Lachgas. Außerdem erfordert die Tierhaltung erhebliche Mengen an Land, Wasser und Futtermitteln, um die Tiere zu füttern. Für den Anbau von Futtermitteln wie z.B. Soja wird der Regenwald massiv abgeholzt."
    },
    {
        id:"biologicalFarming",
        name: "biologische Landwirtschaft fördern",
        cost: 5*10**6,
        costFactor: 1,
        impacts:[
            {
                name: "afforestation",
                influence: "low",
            },
            {
                name: "waterlevel",
                influence: "low"
            },
            {
                name: "temperature",
                influence: "low"
            }
        ],
        currentLevel: 0,
        info: "Die biologische Landwirtschaft erwendet nachhaltige Anbaumethoden, die den Boden und die Wasserressourcen weniger belasten. Der Einsatz von synthetischen Pestiziden und chemischen Düngemitteln ist stark eingeschränkt oder verboten, was die Verschmutzung von Boden und Wasser reduziert und Arten schützt. Da keine Pestzidie und anorganische Düngemittel verwendet werden, wird die energieintensive Produktion dieser Mittel vermieden. Das alles macht diese Form der Landwirtschaft nachhaltig."
    },
    {
        id:"alternativePackaging",
        name: "alternative Verpackungen entwickeln",
        cost: 4*10**6,
        costFactor: 1,
        impacts:[
            {
                name: "afforestation",
                influence: "low",
            },
            {
                name: "temperature",
                influence: "low"
            },
        ],
        currentLevel: 0,
        info: "Der Abfälle verschmutzen die Luft, die Böden und das Wasser. Sie gefährden dadurch die Gesundheit. Das meiste Abfallplastik wird verbrannt, wodurch Schadstoffe und Treibhausgase in die Luft geraten. Alternative Verpackungen sind meist biologisch abbaubar und sind somit Teil des Ökosystems."
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
    upgradesRightWrapper = document.getElementById("upgradeRightWrapper")
    upgrades.forEach((upgrade, index)=>{
        upgradesWrapper.innerHTML += "<div id='" + upgrade.id + "' class='upgradeWrapper'></div>"
        upgradeWrapper = document.getElementById(upgrade.id)
        upgradeWrapper.innerHTML+= "<span>" + upgrade.name + "</span>"
        upgradeInfo = upgrade.id + "Info"
        upgradeIcon = upgrade.id + "Icon"
        upgradesRightWrapper.innerHTML+= "<div id='" + upgradeInfo + "' class='upgradeWindowInfo'>" + upgrade.info + "</div" //div führ den Infotext vom Upgrade
        upgradeWrapper.innerHTML+= "<div id='" + upgradeIcon + "'>&#x1F6C8</div>" //div mit dem InfoIcon
        infoIcon = document.getElementById(upgradeIcon)
        console.log(infoIcon)
        infoIcon.onclick = function (){
            console.log("lalal")
        }
        /*infoIcon.onmouseover = function (){
            document.getElementById(upgradeInfo).style.display="block"
        }*/
        /*infoIcon.addEventListener("mouseover", function(){console.log("lalla")})*/
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