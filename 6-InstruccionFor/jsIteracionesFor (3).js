function mostrar()
{

//var repetciones = prompt("ingrese el número de repeticiones");
var numeroIngresado;
	var numeroAnterior;
	var recorrido;
	var acumulador;

	numeroIngresado=prompt("por favor ingrese un numero:");
	numeroIngresado=parseInt(numeroIngresado);

		for (numeroAnterior= numeroIngresado - 1; numeroAnterior>0;numeroAnterior-- ) 
		{
		
			if (numeroIngresado % numeroAnterior==0) 
			{
				
				acumulador=acumulador+numeroAnterior;
			}
			
		}

			if (acumulador==numeroIngresado) 
			{
					console.log("Es un numero perfecto.");
			}
	



}//FIN DE LA FUNCIÓN