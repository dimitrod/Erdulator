function budgetCheck() {
    document.getElementById("reaction1").disabled = false
    document.getElementById("reaction2").disabled = false
    document.getElementById("reaction3").disabled = false
    if (currentEvent.reactions[0].cost > budget) {
        document.getElementById("reaction1").disabled = true
    }
    if (currentEvent.reactions[1].cost > budget) {
        document.getElementById("reaction2").disabled = true
    }
    if (currentEvent.reactions[2].cost > budget) {
        document.getElementById("reaction3").disabled = true
    }
    if (budget <= 0) {
        budget = 0
        document.getElementById("reaction1").disabled = true
        document.getElementById("reaction2").disabled = true
    }
}

function afforestationCheck() {
    if (afforestation < 0) {
        afforestation = 0
    }
    else if (afforestation > 100) {
        afforestation = 100
    }
}

function attributeCheck() {
    afforestationCheck()
    budgetCheck()
}
