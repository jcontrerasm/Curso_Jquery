<?php
	
	if(isset($_GET["numero1"]) && isset($_GET["numero2"])) {
		echo "El resultado es: " . ($_GET["numero1"] * $_GET["numero2"]);
	}
	
	if(isset($_POST["numero3"])){
		echo "El numero resultante es: " . $_POST['numero3'] * 5;
	}
	
