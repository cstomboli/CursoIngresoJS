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
			division=numeroUno/numeroDos;
			sumar=numeroUno+numeroDos;

			if (numeroUno>numeroDos)
			{
				alert(division);
			}
			else
			{
				alert(sumar);
			}

		}

}
