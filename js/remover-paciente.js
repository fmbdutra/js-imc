var pacientes = document.querySelectorAll(".paciente");

/*
pacientes.forEach(function(paciente){
	paciente.addEventListener("dblclick", function(){
		console.log("Fui clicado com um duplo clique");
		this.remove();
	});
});
//console.log(pacientes);

*/

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(){
	/*
	var alvoEvento = event.target;
	var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover

	paiDoAlvo.remove();
	*/

	event.target.parentNode.remove();
})


