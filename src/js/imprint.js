imprintWindow = document.getElementById("imprintWindow")

function openImprintWindow(){
    imprintWindow.style.display="block"
    upgradeWindow.style.display="none"
    gamePage.style.filter = "blur(5px)"
    starWrapper.style.filter = "blur(5px)"
    theMusicPlayer.style.filter = "blur(5px)"
    gamePage.style.userSelect = "none"
    gamePage.style.pointerEvents = "none"
}
function closeImprintWindow(){
    imprintWindow.style.display="none"
    gamePage.style.filter = "none"
    starWrapper.style.filter = "none"
    theMusicPlayer.style.filter = "none"
    gamePage.style.userSelect = "all"
    gamePage.style.pointerEvents = "all"
}

function imprintWindowCategory(category, btnid) {
    Array.from(imprintWindow.getElementsByClassName("category")).forEach(wrapper => {
        wrapper.style.display = "none"
        let nav = imprintWindow.getElementsByTagName("nav")[0]
        Array.from(nav.getElementsByTagName("button")).forEach(button => {
            button.disabled = false
        })
    })
    document.getElementById(category).style.display = "block"
    document.getElementById(btnid).disabled = true
}

function loadImprint(){
    imprintText.forEach(part => {
        document.getElementById(part.name).innerHTML+=part.text
    })
}