var elemOrigen, elemDestino;

function comenzar(){
// una forma de hacer la variable universal es quitando el var
//var elemOrigen = document.getElementById("imagen"); 
// es decir 
elemOrigen = document.getElementById("imagen"); 

/* dragstart se desencadena cuando se comienza a 
arrastrar un objeto */
//ejemplo
/*elemOrigen.addEventListener("dragstart", function(){
	alert("comenzó el evento");
}, false); */

/* dragend se desencadena cuando se termina de arrastrar
 el objeto independiente de donde se suelte el objeto 
  y con drag se dispara mientras esté en movimiento el
   objeto*/
   // ejemplo
/*elemOrigen.addEventListener("dragend", function(){
	alert("se termino de arrastrar");
}, false); */
elemOrigen.addEventListener("dragstart", comienzaArrastrar, false);

// una forma de hacer la variable universal es quitando el var
// var elemDestino = document.getElementById("zonaDestino");
// es decir 
elemDestino = document.getElementById("zonaDestino");
	// dragenter
 /*elemDestino.addEventListener("dragenter", function(e){
	e.preventDefault();}, false); */

elemDestino.addEventListener("dragover", function(e){
	e.preventDefault();}, false);

elemDestino.addEventListener("drop", soltar, false);

elemOrigen.addEventListener("dragend", terminar, false);

elemDestino.addEventListener("dragenter", entrar, false);

elemDestino.addEventListener("dragleave", salir, false);

}


function comienzaArrastrar (e){

	var codigo = "<img src ='"+ elemOrigen.getAttribute("src")+"'>";

	e.dataTransfer.setData("Text",codigo);
}


function soltar (e){

e.preventDefault();

elemDestino.innerHTML=e.dataTransfer.getData("Text");

}

function terminar (e){
	var elemento = e.target;
	elemento.style.visibility="hidden";
}

function entrar (e){
	/* preventDefault resetea el compartamiento por defecto del ordenador*/
	e.preventDefault();
	elemDestino.style.background="#7DEA87";
}

function salir (e){

	e.preventDefault();

	// para cambiar el color de fondo de la zona de destino 
	//cuando el mouse sale de la zona
	//elemDestino.style.background="#F5E0E0";

	// borrar la zona de destino cuando salgo la imagen de la zono destino
	elemDestino.style.visibility="hidden";
}



window.addEventListener("load", comenzar, false);