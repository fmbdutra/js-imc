var pacientes = document.querySelectorAll(".paciente");
console.log(paciente);

for (var i =  0; i < pacientes.length; i++) {
	console.log(pacientes[i]);

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var alturaEhValida = validaAltura(altura);
	var pesoEhValido = validaPeso(peso);

	var alturaInvalida = "Altura inválida!";
	var pesoInvalido = "Peso inválido!";

	if(!pesoEhValido){
		console.log("Peso inválido");
		//pesoEhValido = false;
	    tdImc.textContent = pesoInvalido;
	    paciente.classList.add("paciente-invalido");
	}

	if(!alturaEhValida){
		console.log("Altura inválida");
	    //alturaEhValida = false;
	    tdImc.textContent = alturaInvalida;
	    paciente.classList.add("paciente-invalido");
	}

	if (pesoEhValido && alturaEhValida){
		var imc = calculaImc(peso, altura);	
		tdImc.textContent = imc;
	}

	function calculaImc(peso, altura) {
	    var imc = 0;

	    imc = peso / (altura * altura);

	    return imc.toFixed(2);
	}
}

function validaPeso(peso){
	if (peso >= 0 && peso < 1000){
		return true;
	} else{
		return false;
	}
}
function validaAltura(altura){
	if (altura >= 0 && altura < 3){
		return true;
	} else{
		return false;
	}
}
