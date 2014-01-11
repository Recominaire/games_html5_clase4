Q.scene("nivel1", function(stage) {

	var mapa = stage.collisionLayer(new Q.Mapa());
	mapa.configurar();

	stage.insert(new Q.UI.Text({
		label : "Puntaje",
		x : 500,
		y : 30,
		size : 20,
		color : "red",
		family : "Fascinate Inline"
	}));

});

Q.scene("perdiste", function(stage) {

	var boton = stage.insert(new Q.UI.Button({
		x : 300,
		y : 150,
		fill : "red",
		fill : "#CCCCCC",
		fontColor : "white",
		label : "Volver a Jugar"
	}));

	stage.insert(new Q.UI.Text({
		x : 300,
		y : 60,
		size : 60,
		color : "#FFEE00",
		label : "Game Over",
		family : "Fascinate Inline"
	}));

	boton.on("click", function() {

		Q.clearStages();
		iniciarJuego();
	});

});
