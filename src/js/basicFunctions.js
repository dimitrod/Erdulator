function convertNum(i, y){
	if(y==0){
		if(i >= 1000000000) return Math.round(i/1000000000) + " Mrd"
		if(i >= 1000000) return Math.round(i/1000000) + " Mio"
		if(i >= 1000) return Math.round(i/1000) + " Tsd"
	}
	if(i >= 1000000000) return (i/1000000000).toFixed(y) + " Mrd"
	if(i >= 1000000) return (i/1000000).toFixed(y) + " Mio"
	if(i >= 1000) return (i/1000).toFixed(y) + " Tsd"
	return i
}
