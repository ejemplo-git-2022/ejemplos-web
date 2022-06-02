function calcular() {
	var campo1 = document.getElementById('campo1');
	var campo2 = document.getElementById('campo2');
	var campoTotal = document.getElementById('campoTotal');
	var campoOperacion = document.getElementById('campoOperacion');
	
	var valorCampoOperacion = campoOperacion.value;
	var valorCampo1 = parseFloat(campo1.value);
	var valorCampo2 = parseFloat(campo2.value);
	var total = 0;
	
	if(valorCampoOperacion == 'sumar') {
		total = valorCampo1 + valorCampo2;
	} else if(valorCampoOperacion == 'restar') {
		total = valorCampo1 - valorCampo2;
	} else if(valorCampoOperacion == 'multiplicar') {
		total = valorCampo1 * valorCampo2;
	} else if(valorCampoOperacion == 'dividir') {
		total = valorCampo1 / valorCampo2;
	}
	
	campoTotal.value = total;
}