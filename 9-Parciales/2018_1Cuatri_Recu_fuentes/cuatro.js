function mostrar()
{
	var numeroUno;
	var numeroDos;
	var division;
	var sumar;

	numeroUno=prompt("Por favor ingrese el primer numero:");
	numeroDos=prompt("Por favor ingrese el segundo numero:");

	if (numeroUno==numeroDos)
	{
		alert(numeroUno+numeroDos);	
	}

		else
		{
			numeroUno=parseInt(numeroUno);
			numeroDos=parseInt(numeroDos);
			
			sumar=numeroUno+numeroDos;

			if (numeroUno>numeroDos)
			{
				alert(division=numeroUno/numeroDos);
			}
			else
			{
				alert(sumar);
				if (sumar<50) 
				{

					alert("la suma es " + sumar + " y es menor a 50");
				}
			}

		}

}
