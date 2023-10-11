upgradeWindow = document.getElementById("upgradeWindow")
gamePage = document.getElementById("gamePage")
starWrapper = document.getElementById("starWrapper")

function openUpgradeWindow(){
    upgradeWindow.style.display= "block"
    gamePage.style.filter = "blur(5px)"
    starWrapper.style.filter = "blur(5px)"
    gamePage.style.userSelect = "none"
    gamePage.style.pointerEvents = "none"
}
function closeUpgradeWindow(){
    upgradeWindow.style.display= "none"
    gamePage.style.filter = "none"
    starWrapper.style.filter = "none"
    gamePage.style.userSelect = "all"
    gamePage.style.pointerEvents = "all"
}

function buyUpgrade(index){
    upgradeCost = "-" + convertNum(upgrades[index].cost, 1) + " €"
    rewardElem.innerHTML = "<span id='budgetChange' style='color: #fc4903;'>" + upgradeCost + "</span>"
}

