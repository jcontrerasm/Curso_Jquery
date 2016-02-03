$(document).ready(function() {

	/* PRIMER MODULO
	================================================= */

	$("#titulo").click(function(event) {
		$("#titulo").css('color', '#315CB4');
		$("#titulo").css('font-size', '2.5rem');
		$("#titulo").css('background-color', '#7DC197');
	});

	/* SEGUNDO MODULO
	================================================= */
	
	$("#boton").click(function(event) {
		$(".primarios").css('background-color', '#E2F15F');
	});

	$("h2").click(function(event) {
		$("h2").css('background-color', '#ED4E55');
	});

	/* TERCER MODULO
	================================================= */

	$("h2").click(function(event) {
		$("h2").css('background-color', '#ED4E55');
	});

	$("p").click(function(event) {
		$(this).css('background-color', '#41CECC');
	});

	/* CUARTO MODULO
	================================================= */

	$("#revelar").click(function(event) {
		$("[href]").css('display', 'block');
	});

});