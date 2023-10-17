let investmentCost = 5*10**6
let investments = [
    {name: "Bäume pflanzen", impact: "afforestation", amount: 10, cost: investmentCost},
    {name: "Prämie für Geburt von Kindern", impact: "population", amount: 1*10**9, cost: investmentCost}
]

function checkBudgetForInvestment() {
    investments.forEach((investment, index) =>{
        button = document.getElementById("investment" + index).getElementsByTagName("button")[0]
        button.disabled = investment.cost > budget 
    })
}

function loadInvestments(){
    let investmentsWrapper = document.getElementById("investments")
    investments.forEach((investment, index)=>{
        investmentsWrapper.innerHTML += "<div id='investment" + index + "' class='upgradeWrapper'></div>"
        let investmentWrapper = document.getElementById("investment" + index)
        investmentWrapper.innerHTML+= "<span>" + investment.name + "</span>"
        // investmentWrapper.innerHTML+= "<div class='infoContainer'>&#x1F6C8<div class=' + upgradeInfo'>" + investment.info + "</div></div>"
        investmentWrapper.innerHTML+= "<button onclick='buyInvestment(" + index + ")'>" + convertNum(investmentCost,1) + "</button>"
    })
    checkBudgetForInvestment()
    investmentsWrapper.style.display = "none"
}

function buyInvestment(index) {
    let investment = investments[index]
    updateBudget(-investment.cost)
    if(investment.impact == "population") population += investment.amount
    else if(investment.impact == "afforestation") afforestation += investment.amount
    else if(investment.impact == "temperature") temperature += investment.amount
    else if(investment.impact == "waterlevel") waterlevel += investment.amount
    updateAttributes()
}