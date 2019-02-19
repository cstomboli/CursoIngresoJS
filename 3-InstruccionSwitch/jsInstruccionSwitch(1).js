function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje= " ";
switch (mesDelAño)

		{
			case "Enero": 
				 
			
				mensaje="Que comiences bien el año";
			break;
			

			case "Marzo":
		
				mensaje="a clases";
			break;
			
			case "Julio":
			
				mensaje="Se vienen las vacaciones";
			break;
			
			case "Diciembre":
			
				mensaje="Felices Fiestas";
			break;
		
		}
//si no pongo el if, y solo pongo el alert,
// muestra un mrensaje
//vacio por casa mes!!
if (mensaje != " ")
	{
	alert(mensaje);
	}
}//FIN DE LA FUNCIÓN