function mostrar()
{
	var letra;
	var numero;
	var respuesta="si";
	var contador=0; //NO ESTA EN USO
	var resto;
	var contadorPares=0;
	var contadorImpares=0;
	var contadorCeros=0;
	var contadorPositivos=0;
	var acumuladorPositivos=0;
	var promedio;
	var acumuladorNegativos=0;
	var flag=false;
	var numeroMaximo;
	var letraMaximo;
	var numeroMinimo;
	var letraMinima;


	while(respuesta=="si")
	{
		letra=prompt("Por favor ingrese una letra");
		numero=prompt("Por favor ingrese un numero entre -100 y 100");
		while(numero<-100 || numero>100)
		{
			numero=prompt("Numero incorrecto, por favor reingrese");
		}
		numero=parseInt(numero);
		respuesta=prompt("Desea ingresar otro numero?");
		contador++;
		resto=numero%2;

		if (resto==0) 
		{
			contadorPares=contadorPares+1;
		}
		else
		{
			contadorImpares=contadorImpares+1;
		}
		if (numero==0) 
		{
			contadorCeros=contadorCeros+1;
		}
		if (numero>0) 
		{
			contadorPositivos=contadorPositivos+1;
			acumuladorPositivos=acumuladorPositivos+numero;
		}
		if (numero<0) 
		{
			acumuladorNegativos=acumuladorNegativos+numero;
		}
		if (flag==false || numero>numeroMaximo) 
		{
			numeroMaximo=numero;
			letraMaximo=letra;
		}
		if (flag== false || numero<numeroMinimo) 
		{
			numeroMinimo=numero;
			letraMinima=letra;
			flag=true;
		}

	}

	promedio=acumuladorPositivos/contadorPositivos;
document.write("La cantidad de numeros pares es: "+contadorPares+" <br>");
document.write("La cantidad de numeros impares es: "+contadorImpares+" <br>");
document.write("La cantidad de ceros ingresados es: "+contadorCeros+" <br>");
document.write("El promedio de los numeros positivos ingresados es: "+promedio+" <br>");
document.write("La suma de todos los numeros negativos ingresados es: "+acumuladorNegativos+" <br>");
document.write("El numero Maximo es: "+numeroMaximo+" y la letra del maximo es "+letraMaximo+"<br>");
document.write("El numero Minimo es: "+numeroMinimo+" y la letra del minimo es "+letraMinima+"<br>");



}
