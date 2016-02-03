$(document).ready(function() {
	
	/* MouseOver y MouseOut
	================================================= */

	$("#caja1").mouseover(function(event) {
		$(this).css('background-color', '#E1ED8F');
	});

	$("#caja1").mouseout(function(event) {
		$(this).css('background-color', '#FFFFFF');
	});

	/* Hover
	================================================= */

	$("#caja2").hover( dentro , fuera);

	function dentro(){
		$(this).css('background-color', '#E1ED8F');
	}

	function fuera(){
		$(this).css('background-color', '#FFFFFF');
	}

	/* MouseMove
	================================================= */

	$(document).mousemove(function(event) {
		$("#x").text('Coordenada en X : ' + event.clientX);
		$("#y").text('Coordenada en Y : ' + event.clientY);
	});


	/* MouseUp - MouseDown
	================================================= */

	$("#btn_bg").mousedown(function(event) {
		$("body").css('background-color', '#9EE8C9');
	});

	$("#btn_bg").mouseup(function(event) {
		$("body").css('background-color', '#DEDEDE');
	});

	/* DoubleClick
	================================================= */

	$("#btn_mostrar").dblclick(function(event){
		$("#contenido").css('display', 'block');
	});

	$("#btn_ocultar").dblclick(function(event){
		$("#contenido").css('display', 'none');
	});

	/* Focus - Blur
	================================================= */

	$("#user").focus(function(event) {
		$("#user").attr('value', '');
	});

	$("#user").blur(function(event) {
		$("#user").attr('value', 'Usuario');
	});

});