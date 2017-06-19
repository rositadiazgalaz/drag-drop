function comenzar(){

var elemOrigen = document.getElementById("imagen"); 
/* dragstart se desencadena cuando se comienza a 
arrastrar un objeto */
//ejemplo
elemOrigen.addEventListener("dragstart", function(){
	alert("comenzó el evento");
}, false);

/* dragend se desencadena cuando se termina de arrastrar
 el objeto independiente de donde se suelte el objeto 
  y con drag se dispara mientras esté en movimiento el
   objeto*/
   // ejemplo
/*elemOrigen.addEventListener("dragend", function(){
	alert("se termino de arrastrar");
}, false); */

}




window.addEventListener("load", comenzar, false);