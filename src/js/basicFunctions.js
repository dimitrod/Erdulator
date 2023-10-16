function convertNum(i, y){
	if(y==0){
		if(i >= 1000000000) return Math.round(i/1000000000) + " Mrd"
		if(i >= 1000000) return Math.round(i/1000000) + " Mio"
		if(i >= 1000) return Math.round(i/1000) + " Tsd"
	}
	if(i >= 1000000000) return (i / 1000000000).toFixed(y) + " Mrd"
	if(i >= 1000000) return (i / 1000000).toFixed(y) + " Mio"
	if(i >= 1000) return (i / 1000).toFixed(y) + " Tsd"
	return i
}

function updateBudget(amount){
	budgetChangeWrapper = Array.from(document.getElementsByClassName("budgetChangeWrapper")) // erst hier, weil
	budget += amount
	checkBudgetForUpgrade()
	budgetText = convertNum(Math.abs(amount), 1) + "€"
	if (amount < 0){
		budgetChangeWrapper.forEach((bcw, index) =>{
			bcw.innerHTML = "<span class='budgetChange' style='color: #fc4903;'>" + "-" + budgetText + "</span>"
			budgetElems[index].innerHTML = convertNum(budget,1) + " €"
		})
	}
	else if (amount > 0){
		budgetChangeWrapper.forEach((bcw, index) =>{
			bcw.innerHTML = "<span class='budgetChange' style='color: #D4AF37;'>" + "+" + budgetText + "</span>"
			budgetElems[index].innerHTML = convertNum(budget,1) + " €"
		})
	}
}
