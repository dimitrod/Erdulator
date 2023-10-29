let investmentCost = 10*10**6
let investments = [
    {name: "Bäume pflanzen", impact: "afforestation", amount: 5, info: "Durch diese Investition werden einheimische Bäume und Pflanzen in Regionen gepflanzt. Dadurch erhöhst du deine Bewaldung und sorgst dafür, dass C02 aus der Luft gefiltert wird. Außerdem bilden Wälder ein Ökosystem, das die Bodenqualität erhöht und viel Wasser aufnehmen kann.", timesLeft: 3},
    {name: "Wasserlevel senken", impact: "waterlevel", amount: -0.8, info: "Durch das Ausbaggern des Meeresboden und Schaffen von Flüssen kann der Meeresspiegel gesenkt werden. Dafür müssen unmengen an Baggern Tag und Nacht baggern.", timesLeft: 3},
    {name: "Temperatur senken", impact: "temperature", amount: -0.5, info: "Durch Geoengineering können Sonnenstrahlen am Eindringen in die Atmosphäre gehindert werden, wodurch sich die Erde weniger nicht erwärmt.Schwefel-Aerosole sollen in die Stratosphäre geschleudert werden, wo sie sich mit Wasserteilchen verbinden und die Sonnenstrahlen reflektieren.", timesLeft: 3},
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