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

	var pesoEhValido = true;
	var alturaEhValida = true;

	var alturaInvalida = "Altura inválida!";
	var pesoInvalido = "Peso inválido!";

	if (peso <= 0 || peso >= 400) {
	    console.log(pesoInvalido);
	    var pesoEhValido = false;
	    tdImc.textContent = pesoInvalido;
	    paciente.classList.add("paciente-invalido");
	}

	if (altura <= 0 || altura >= 3.50) {
	    console.log(alturaInvalida);
	    var alturaEhValida = false;
	    tdImc.textContent = alturaInvalida;
	    paciente.classList.add("paciente-invalido");
	}

	if (pesoEhValido && alturaEhValida){
		var imc = peso / (altura * altura);	
		tdImc.textContent = imc.toFixed(2);
	}
}	