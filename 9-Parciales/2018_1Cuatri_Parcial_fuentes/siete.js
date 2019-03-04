function mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var contadorVarones=0;
	var acumulador=0;
	var promedio;
	var notaMasBajas;
	var sexoNotaMasBaja;
	var flag=0;
	
	while(contador<5)
	{

		nota=prompt("Por favor ingrese la nota")
		while 	( nota<1 || nota>10 || isNaN(nota))
		{
		nota=prompt("Nota invalida, reingrese la nota")
		}
		sexo=prompt("Por favor ingrese sexo: f o m");
		while (sexo!="f" && sexo!="m") 
		{
		sexo=prompt("Sexo invalido por favor reingrese sexo: f o m");	
		}	
		nota=parseInt(nota);	
		contador=contador+1;
		acumulador=acumulador+nota;
		if(flag==0 || nota<notaMasBajas)
		{
			notaMasBajas=nota;
			sexoNotaMasBaja=sexo;
			flag=1;
		}
		if (nota>=6 && sexo=="m") 
		{
			contadorVarones++;
		}
	}

	promedio=acumulador/contador;
	
	document.write("El promedio de las notas es "+promedio+ "<br>");
	document.write("La nota mas baja es " +notaMasBajas+ "y el sexo de la nota mas baja es " + sexoNotaMasBaja+ "<br>");
	document.write("La cantidad de varones que la nota fue mayor a 6, fueron "+contadorVarones+ "<br>");
	


}
