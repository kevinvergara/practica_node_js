/*function extraer(opcion) {
	var index = process.argv.indexOf(opcion);

	if (index === -1) {
		return false;
	}else{
		return process.argv[index + 1];
	}	
}

var nombre = extraer("-nombre");
console.log("el nombre es: " + nombre);
//--------------------------------------------------

process.stdout.write("cual es el apellido \n");
process.stdin.on("data", function(data) {
	process.stdout.write("nombre completo: " + nombre +" "+ data + "\n");
	process.exit();
});*/

//----------------------------------------
process.stdout.write("sumar numeros, terminar proceso con '.' :");

var suma = 0;

process.stdin.on("data",function(data){
	if (data.toString().trim() == ".") {
		process.exit();
	}else{
		suma += parseInt(data.toString().trim());
	}
});

process.on("exit",function(argument) {
	process.stdout.write("la suma es: " + suma + "\n");
});