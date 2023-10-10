function budgetCheck() {
    let button1 = document.getElementById("reaction1");
    let button2 = document.getElementById("reaction2");
    let button3 = document.getElementById("reaction3");
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    if (currentEvent.reactions[0].cost > budget) {
        button1.disabled = true;
    }
    if (currentEvent.reactions[1].cost > budget) {
        button2.disabled = true;
    }
    if (currentEvent.reactions[2].cost > budget) {
        button3.disabled = true;
    }
    if (budget <= 0) {
        budget = 0;
        button1.disabled = true;
        button2.disabled = true;
    }
}

function afforestationCheck() {
    if (afforestation < 0) {
        afforestation = 0;
    }
    else if (afforestation > 100) {
        afforestation = 100;
    }
}

function attributeCheck() {
    afforestationCheck()
    budgetCheck()
}
