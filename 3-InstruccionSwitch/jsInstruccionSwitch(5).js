function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

//alert (laHora);
var mensaje= " ";
switch (laHora)

	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
		mensaje="Es de mañana";
		break;

	
	}
	

if (mensaje != " ")
	{
	alert(mensaje);
	}


}//FIN DE LA FUNCIÓN