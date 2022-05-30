function calcular() {
	var campo1 = document.getElementById('campo1');
	var campo2 = document.getElementById('campo2');
	var campoTotal = document.getElementById('campoTotal');

	var valorCampo1 = parseFloat(campo1.value);
	var valorCampo2 = parseFloat(campo2.value);

	campoTotal.value = valorCampo1 + valorCampo2;
}