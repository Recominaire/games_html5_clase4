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


Q.scene('endGame',function(stage) {
  var box = stage.insert(new Q.UI.Container({
    x: Q.width/2, y: Q.height/2, fill: "rgba(0,0,0,0.5)"
  }));
  
  var button = box.insert(new Q.UI.Button({ x: 0, y: 0, fill: "#CCCCCC",
                                           label: "Play Again" }))         
  var label = box.insert(new Q.UI.Text({x:10, y: -10 - button.p.h, 
                                        label: "stage.options.label" }));
  button.on("click",function() {
    Q.clearStages();
    Q.stageScene('level1');
  });
  box.fit(20);
});

Q.scene("perdiste2", function(stage) {

	
	var contenedor = stage.insert(new Q.UI.Container({
		x : Q.width / 2,
		y : Q.height / 2,
		fill : "rgba(254,254,254,0.5)"
	}));

	var boton = contenedor.insert(new Q.UI.Button({
		x : 0,
		y : 0,
		fill : "red",
		//fontColor : "white",
		label : "Volver a Jugar"
	}));

	contenedor.insert(new Q.UI.Text({
		x : 10,
		y : -70,
		size : 60,
		color : "#FFEE00",
		label : "Game Over",
		family : "Fascinate Inline"
	}));

	boton.on("click", function() {

		Q.clearStages();
		//Q.stageScene("nivel1");
		iniciarJuego();
	});

}); 