var campos = [
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){
	
	// AVISA PRO JS PARA REMOVER O COMPORTAMENTO DEFAULT DA SUBMISSÃO DO FORMULÁRIO 
	// QUE SERIA O DE RECARREGAR OU REDIRECIONAAR A PAGINA
	event.preventDefault();

	var tr = document.createElement('tr');

	campos.forEach(function(campo) {

		var td = document.createElement('td');
		td.textContent= campo.value;
		tr.appendChild(td);
	});

	var tdVolume = document.createElement('td');
	tdVolume.textContent = campos[1].value * campos[2].value;
	tr.appendChild(tdVolume);

	tbody.appendChild(tr);


	// LIMPANDO O FORM
	campos[0].value = '';
	campos[1].value = 1;
	campos[2].value = 0;
	campos[0].focus();

});
