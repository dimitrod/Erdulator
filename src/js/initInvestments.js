let investmentCost = 10*10**6
let investments = [
    {name: "Bäume pflanzen", impact: "afforestation", amount: 10, info: "Pflanze einmal ganz viel Bäume, um die Bewaldung hoch zu halten", timesLeft: 3},
    //{name: "Prämie für Geburt von Kindern", impact: "population", amount: 1*10**9, cost: investmentCost, info: "Bevor du keine Menschen mehr auf der Erde hast, locke die Leute mit Geld an, um sich zu vermehren!"},
    {name: "Wasserlevel senken", impact: "waterlevel", amount: -1.0, info: "Wasserlevel senken. Keine Ahnung wie", timesLeft: 3},
    {name: "Temperatur senken", impact: "temperature", amount: -0.5, info: "Temperatur senken. Auch keine Ahnung wie", timesLeft: 3}
]

function loadInvestments(){
    let investmentsWrapper = document.getElementById("investments")
    investments.forEach((investment, index)=>{
        investmentsWrapper.innerHTML += "<div id='investment" + index + "' class='upgradeWrapper'></div>"
        let investmentWrapper = document.getElementById("investment" + index)
        investmentWrapper.innerHTML+= "<span>" + investment.name + "</span>"
        investmentWrapper.innerHTML += "<div class='infoContainer'>&#x1F6C8<div class='upgradeInfo'>" + investment.info + "</div></div>"
        investmentWrapper.innerHTML+= "<button class='nes-btn is-warning' onclick='buyInvestment(" + index + ")'>" + convertNum(investmentCost,1) + " (" + investment.timesLeft + " übrig)" + "</button>"
    })
    checkInvestments()
    investmentsWrapper.style.display = "none"
}

function buyInvestment(index) {
    let investment = investments[index]
    investment.timesLeft--
    updateBudget(-investmentCost)
    if(investment.impact == "population") population += investment.amount
    else if(investment.impact == "afforestation") afforestation += investment.amount
    else if(investment.impact == "temperature") temperature += investment.amount
    else if(investment.impact == "waterlevel") waterLevel += investment.amount
    updateAttributes()
}

function checkInvestments(params) {
    investments.forEach((investment, index) => {
        button = document.getElementById("investment" + index).getElementsByTagName("button")[0]
        if(budget >= investmentCost && investment.timesLeft > 0) button.disabled = false
        else button.disabled = true
        button.innerHTML = convertNum(investmentCost,1) + " (" + investment.timesLeft + " übrig)"
    })
}