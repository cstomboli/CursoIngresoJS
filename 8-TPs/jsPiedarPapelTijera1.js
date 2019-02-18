/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var usuario;

function comenzar()
{
	var opcion;

	usuario=prompt("Ingrese un numero");

	opcion=Math.floor((Math.random() * 3) + 1);
	console.log(opcion);

	eleccionMaquina=1;


}//FIN DE LA FUNCIÓN
function piedra()
{
if (usuario==1)
	{
		alert("Empate");
	}	

	if (usuario ==2);

	{
		alert("Ganaste");
	}






}//FIN DE LA FUNCIÓN
function papel()
{


}//FIN DE LA FUNCIÓN
function tijera()
{
	

}//FIN DE LA FUNCIÓN