$(document).ready(function() {

	/* Load
	================================================= */

	$("a").click(function(event) {
		var pagina = $(this).attr('href');
		$("#msj").load(pagina);
		return false; //Hace que no se redireccione
	});

	/* GET - POST
	================================================= */

	//GET
	
	$("#enviar1").click(function(event) {
		var valor_n1 = $("#n1").val();
		var valor_n2 = $("#n2").val();

		$.get('archivos_php/calcular.php', { numero1: valor_n1, numero2: valor_n2 } , function(data) {
			$("#resultado_get").text(data);
		});
		return false;
	});
	
	//POST

	$("#enviar2").click(function(event) {
		var valor_n3 = $("#n3").val(); //val() para obtener el valor
		$.post('archivos_php/calcular.php' , { numero3: valor_n3 } , function(data) {
			$("#resultado_post").text(data);
		});
		return false;
	});

	/* Metodo AJAX completo
	================================================= */

	$("#enviar_anio").click(function(event) {
		var valor_anio = $("#anio").val();
		$.ajax({
			url: 'archivos_php/ajax.php',
			type: 'POST',
			dataType: 'html',
			data: {anio: valor_anio},
			async: true,
			contentType: "application/x-www-form-urlencoded",
		})
		.done(function() {
			$("#mostrar_anio").text("Cargando");
		})
		.fail(function() {
			$("#mostrar_anio").text("Problemas en el servidor");
		})
		.always(function(datos) {
			$("#mostrar_anio").text(datos);
		});
		return false;
	});

});