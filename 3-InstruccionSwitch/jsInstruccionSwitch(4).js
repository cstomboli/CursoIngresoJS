function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
var mensaje= " ";
switch (mesDelAño)

		{
			case "Enero": 
			case "Marzo":
			case "Mayo":
			case "Julio":
			case "Agosto":
			case "Octubre":
			case "Diciembre":
			mensaje="Tiene 31 dias";
			break;
			
			case "Febrero":
			mensaje="Tiene 28 dias";
			break;

		
			case "Abril":
			case "Junio":
			case "Septiembre":
			case "Noviembre":
			mensaje="Tiene 30 dias";
			break;

		}

if (mensaje != " ")
	{
	alert(mensaje);
	}
	



}//FIN DE LA FUNCIÓN