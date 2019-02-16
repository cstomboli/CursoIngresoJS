function mostrar()
{
//tomo la edad  
	var LaEdad;

	laEdad=edad.value;
	laEdad=parseInt(laEdad);

	//Esta es la mejor forma, mas rapida!!
	if (laEdad > 17) 

	{
		alert("Es mayor de edad");

	}
	else
	{
		if (laEdad > 12)
		{
			alert("Es adolescente");
		}
		else
		{
			alert("Es un niño");
		}

	}


	 /*
var mensaje;
en vez de escribir aler, pones mensaje!
alert(mensaje);
	 */

	//Pero tambien se puede hacer asi.



/*
	if (laEdad >17)
	{
		alert("Es mayor de edad");
	}
	
	if (laEdad >12 && laEdad <17)
	{ 
		alert("Es adolescente");
	}

	if (laEdad <13)
	{
		alert("Es un niño");	
	}

*/


}//FIN DE LA FUNCIÓN