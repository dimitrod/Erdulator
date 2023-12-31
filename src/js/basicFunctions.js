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
	checkUpgrades()
	checkInvestments()
	budgetText = convertNum(Math.abs(amount), 1) + "€"
	budgetCheck()
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

function calculateColor(value, minValue, maxValue) {
	if(minValue > maxValue){
		[minValue, maxValue] = [maxValue, minValue] 

		value = maxValue - Math.abs(value) 
	} 
	if(value > maxValue) value = maxValue
	if(value < minValue) value = minValue
    const normalizedValue = (value - minValue) / (maxValue - minValue)
    const hue = 120 * (1-normalizedValue)
    return `hsl(${hue}, 100%, ${(50-((1-normalizedValue)*25))}%)`
}


function resetElementScroll(){
	var scrollableElement = document.getElementsByClassName("overflowWrapper")

	for (const element of scrollableElement) {
		element.scrollTop = 0
	  }

}