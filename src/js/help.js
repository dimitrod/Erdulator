helpWindowUW = document.getElementById("helpWindowUW")
helpWindow = document.getElementById("helpWindow")

function openHelpWindowUW(){
    helpWindow.style.display="block"
    upgradeWindow.style.display="none"
}
function closeHelpWindowUW(){
    helpWindow.style.display="none"
    upgradeWindow.style.display="block"
}

function openHelpWindow(){
    helpWindow.style.display="block"
    gamePage.style.filter = "blur(5px)"
    starWrapper.style.filter = "blur(5px)"
    theMusicPlayer.style.filter = "blur(5px)"
    gamePage.style.userSelect = "none"
    gamePage.style.pointerEvents = "none"
}
function closeHelpWindow(){
    helpWindow.style.display="none"
    gamePage.style.filter = "none"
    starWrapper.style.filter = "none"
    theMusicPlayer.style.filter = "none"
    gamePage.style.userSelect = "all"
    gamePage.style.pointerEvents = "all"
}