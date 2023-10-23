upgradeWindow = document.getElementById("upgradeWindow")
upgradeWindowButton = document.getElementById("upgradeWindowButton")
gamePage = document.getElementById("gamePage")
theMusicPlayer = document.getElementById("musicPlayer")
starWrapper = document.getElementById("starWrapper")
gamePageBudgetWrapper = Array.from(gamePage.getElementsByClassName("budgetChangeWrapper"))[0]

function openUpgradeWindow(){
    budgetChangeWrapper = Array.from(document.getElementsByClassName("budgetChangeWrapper"))
    upgradeWindow.style.display= "block"
    gamePage.style.filter = "blur(5px)"
    starWrapper.style.filter = "blur(5px)"
    theMusicPlayer.style.filter = "blur(5px)"
    gamePage.style.userSelect = "none"
    gamePage.style.pointerEvents = "none"
    budgetChangeWrapper.forEach(bcw=>{
        bcw.innerHTML=""
    })
   gamePageBudgetWrapper.style.display = "none"
}
function closeUpgradeWindow(){
    budgetChangeWrapper = Array.from(document.getElementsByClassName("budgetChangeWrapper"))
    upgradeWindow.style.display= "none"
    gamePage.style.filter = "none"
    starWrapper.style.filter = "none"
    theMusicPlayer.style.filter = "none"
    gamePage.style.userSelect = "all"
    gamePage.style.pointerEvents = "all"
    budgetChangeWrapper.forEach(bcw=>{
        bcw.innerHTML=""
    })
    gamePageBudgetWrapper.style.display = "inline"
}

function upgradeWindowCategory(category, btnid) {
    Array.from(upgradeWindow.getElementsByClassName("category")).forEach(wrapper => {
        	wrapper.style.display = "none"
            let nav = upgradeWindow.getElementsByTagName("nav")[0]
            Array.from(nav.getElementsByTagName("button")).forEach(button => {
                button.disabled = false
            })
    })
    document.getElementById(category).style.display = "block"
    document.getElementById(btnid).disabled = true
}


function buyUpgrade(index){
    upgrade = upgrades[index]
    cost = upgrade.cost
    upgrade.currentLevel++
    updateBudget(-cost)

    upgrade.impacts.forEach(impact => {
        updateGrowthRate(impact.name, impact.influence)
    })

    upgradeWrapper = document.getElementById(upgrade.id)
    Array.from(upgradeWrapper.getElementsByClassName("level" + upgrade.currentLevel))[0].style.backgroundColor = "green"
    /*if (upgrade.currentLevel == maxLevel)document.getElementById(upgrade.id).getElementsByTagName("button")[0].disabled=true*/
}

upgradeWindowButton.addEventListener("mousedown", function() {
    upgradeWindowButton.style.backgroundImage = "url(resource/upgrade_new_pressed.png)";
  });
  
  upgradeWindowButton.addEventListener("mouseup", function() {
    upgradeWindowButton.style.backgroundImage = "url(resource/upgrade_new.png)";
  });


  
  

