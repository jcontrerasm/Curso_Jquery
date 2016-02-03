$(document).ready(function() {

	/* Hide - Show (Ocultar - Mostrar)
	================================================= */

	$("#mostrar1").click(function(event) {
		$("#mensaje").show('slow');
	});

	$("#ocultar1").click(function(event) {
		$("#mensaje").hide('slow');
	});

	$("#mostrar2").click(function(event) {
		$("#mensaje").show('fast');
	});

	$("#ocultar2").click(function(event) {
		$("#mensaje").hide('fast');
	});

	/* FadeOut - FadeIn (Degradado)
	================================================= */

	$("#btn_in1").click(function(event) {
		$("#saludo").fadeIn('slow');
	});

	$("#btn_out1").click(function(event) {
		$("#saludo").fadeOut('slow');
	});

	$("#btn_in2").click(function(event) {
		$("#saludo").fadeIn('fast');
	});

	$("#btn_out2").click(function(event) {
		$("#saludo").fadeOut('fast');
	});

	/* FadeTo
	================================================= */

	$("#btn_1").click(function(event) {
		// 1 = 100%  &&  0.5 = 50%
		$("#texto").fadeTo('slow' , 0.8); 
	});

	$("#btn_2").click(function(event) {
		$("#texto").fadeTo('slow' , 0.3);
	});

	/* Toggle
	================================================= */

	$("#btn_accion").click(function(event) {
		$("#accion").toggle('slow');
	});

	/* SlideDown - SlideUp
	================================================= */

	$("#btn_slideup").click(function(event) {
		$("#slide").slideUp('slow')
	});

	$("#btn_slidedown").click(function(event) {
		$("#slide").slideDown('slow');
	});

	/* Animate
	================================================= */
	$("#btn_animate").click(function(event) {
		$("#animacion").animate({
			width: 200,
			height: 100,
		}, 'fast');
		$("#animacion").animate({
			width: 70,
			height: 200,
			opacity: 0.4,
			marginLeft: 200
		}, 'slow');
		$("#animacion").animate({
			width: 500,
			height: 40,
			opacity: 1
		}, 2000); // en mili-segundos 2000 = 2s
		$("#animacion").animate({
			width: 300,
			height: 40,
			marginLeft: 0,
		}, 'slow');
	});

});