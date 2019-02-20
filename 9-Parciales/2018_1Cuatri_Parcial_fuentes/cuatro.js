function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var resto;
	var suma;

	numeroUno=prompt("Por favor ingrese el primer numero:");
	numeroDos=prompt("Por favor ingrese el segundo numero:");
	

	if (numeroUno == numeroDos)

		{
			alert(numeroUno+numeroDos);
		}

		else
		{

			numeroUno=parseInt(numeroUno);
			numeroDos=parseInt(numeroDos);
			resto=numeroUno-numeroDos;
			suma=numeroUno+numeroDos;

					if (numeroUno>numeroDos)
					{
						alert(resto);
					}
			
						else
						{
							alert(suma);
						}
		

		}


}
