var sID = setTimeout(function() {
	console.log("corriendo");
},5000)

clearTimeout(sID);

//-------------

var valor = 0;

var iID = setInterval(function() {
	valor++;
	console.log(valor)
	if(valor === 5){
		clearInterval(iID);
	}
}, 2000)