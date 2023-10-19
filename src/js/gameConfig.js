startPage = document.getElementById("startPage")
gamePage = document.getElementById("gamePage")
slider = document.getElementById("quizAmountSlider")
sliderValue = document.getElementById("sliderValue")

function sliderInput(value) {
    // gets called on every slider change
    sliderValue.innerHTML=value
    switch(value) {
        case "1":
            slider.style.background = "red"
            break
        case "2":
            slider.style.background = "orange"
            break
        case "3":
            slider.style.background = "green"
            break
    }
}

function quizConfig() {
    amount = parseInt(sliderValue.innerHTML)
}

function configure() {
    //executed when start-button is clicked
    quizConfig()
    startPage.style.display="none"
    gamePage.style.display="block"
}

function neuStart(){

}
