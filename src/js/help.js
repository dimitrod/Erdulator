helpWindow = document.getElementById("helpWindow")

function openHelpWindow(){
    helpWindow.style.display="block"
    upgradeWindow.style.display="none"
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

function helpWindowCategory(category, btnid) {
    Array.from(helpWindow.getElementsByClassName("category")).forEach(wrapper => {
        wrapper.style.display = "none"
        let nav = helpWindow.getElementsByTagName("nav")[0]
        Array.from(nav.getElementsByTagName("button")).forEach(button => {
            button.disabled = false
        })
    })
    document.getElementById(category).style.display = "block"
    document.getElementById(btnid).disabled = true
}

function loadHelp(){
    helpText.forEach(part => {
        document.getElementById(part.name).innerHTML+=part.text
    })
}