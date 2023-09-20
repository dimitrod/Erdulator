function convertNum(i, y){
	if(y==0){
		console.log("0")
		if(i >= 1000000000) return (i/1000000000).floor + " Mrd"
		if(i >= 1000000) return (i/1000000).floor + " Mio"
		if(i >= 1000) return (i/1000).floor + " Tsd"
	}
	if(i >= 1000000000) return (i/1000000000).toFixed(y) + " Mrd"
	if(i >= 1000000) return (i/1000000).toFixed(y) + " Mio"
	if(i >= 1000) return (i/1000).toFixed(y) + " Tsd"
	return i
}