$(document).ready(function() {

	/* QUINTO MODULO
	================================================= */

	$("#btn1").click(function(event) {
		alert($("#texto").text());
	});

	$("#btn2").click(function(event) {
		$("#texto").text('Este es el texto nuevo');
	});

	/* SEXTO MODULO
	================================================= */

	$("#btn3").click(function(event) {
		alert($("#tabla").attr('border'));
	});

	$("#btn4").click(function(event) {
		$("#tabla").attr('border', '4');
	});

	$("#btn5").click(function(event) {
		$("#tabla").removeAttr('border');
	});

	/* SEPTIMO MODULO
	================================================= */

	$("#agregar").click(function(event) {
		$("#article").addClass('articulo1');
	});

	$("#eliminar").click(function(event) {
		$("#article").removeClass('articulo1');
	});

	/* OCTAVO MODULO
	================================================= */

	$("#btn_form").click(function(event) {
		$("#formulario").html(
			'<form action="">' +
				'<div class="form-group">' +
					'<label for="">Ingrese sus datos</label><br>' +
					'<input class="form-control" type="text" placeholder="Ingresar nombre"/><br>' +
					'<input class="form-control" type="text" placeholder="Ingrese su email"><br>' +
					'<button type="submit" class="btn btn-primary">Enviar</button>' +
				'</div>' +
			'</form>'
			);
	});

	/* NOVENO MODULO
	================================================= */

	$("#agregar_antes").click(function(event) {
		$("#manzana").before(
			'<li>Pera</li>'
			);
	});

	$("#agregar_despues").click(function(event) {
		$("#manzana").after(
			'<li>Pera</li>'
			);
	});


});