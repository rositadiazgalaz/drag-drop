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

elemDestino.addEventListener("dragenter", function(e){
	e.preventDefault();}, false);

elemDestino.addEventListener("dragover", function(e){
	e.preventDefault();}, false);

elemDestino.addEventListener("drop", soltar, false);

elemOrigen.addEventListener("dragend", terminar, false);

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




window.addEventListener("load", comenzar, false);