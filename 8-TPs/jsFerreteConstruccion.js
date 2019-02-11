/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var suma;
var alambre;

largo=Largo.value;
ancho=Ancho.value;
largo=parseInt(largo);
ancho=parseInt(ancho);

suma=largo+ancho;
alambre=suma*3;

alert("La cantidad de alambre a comprar es: "+alambre);
}
function Circulo () 
{
	
}
function Materiales () 
{
var cemento;
var cal;
var cementoNecesario;
var calNecesaria;

cemento=Largo.value;
cal=Ancho.value;
cemento=parseInt(cemento);
cal=parseInt(cal);

cementoNecesario=cemento*2;
calNecesaria=cal*3;

alert("Se necesitan "+cementoNecesario+ " bolsas de cemento y "+calNecesaria+" bolsas de cal");

}