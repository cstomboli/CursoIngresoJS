/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
var nombre;

nombre=prompt("Por favor indique su nombre: ");

document.getElementById(elNombre).value=nombre;

//dentro de document.get.. no es necesario poner el id Entre comillas 
//simples. NO SON NECESARIAS LAS COMILLAS


}

