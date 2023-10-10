startPage = document.getElementById("startPage")
gamePage = document.getElementById("gamePage")
slider = document.getElementById("quizAmountSlider")
sliderValue = document.getElementById("sliderValue")

function sliderInput(value){
    // gets called on every slider change
    sliderValue.innerHTML=value
    console.log("hallo")
    switch (value){
        case "1":
            console.log("green")
            slider.style.accentColor = "red"
            break
        case "2":
            slider.style.accentColor = "orange"
            break
        case "3":
            slider.style.accentColor = "green"
            break
    }
}

function quizConfig() {
    amount = parseInt(sliderValue.innerHTML);
    console.log(amount);
}

function configure(){
    //executed when start-button is clicked
    quizConfig()
    startPage.style.display="none"
    gamePage.style.display="block"
}

function neuStart(){

}