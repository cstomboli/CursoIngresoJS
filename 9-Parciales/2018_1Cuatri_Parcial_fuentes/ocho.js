function mostrar()
{
	var letra;
	var numero;
	var respuesta="si";
	var contador=0;
	var acumuladorPositivos=0;
	var contadorPositivos=0;
	var resto;
	var contadorPar=0;
	var contadorImpar=0;
	var contadorCeros=0;
	var promedioPositivos;
	var acumumuladorNegativos=0;
	var suma;
	var flag=0;
	var numeroMaximo;
	var letraMaxima;
	var numeroMasBajo;
	var letraMasbaja;

	while(respuesta=="si")
	{
		letra=prompt("Por favor ingrese una letra");
		numero=prompt("Por favor ingrese un numero entre -100 y 100");

		while(numero<-100 || numero>100)
		{
			numero=prompt("numero incorrecte, reingrese numero");
			
		}
		numero=parseInt(numero);
		respuesta=prompt("ingrese si para continuar");
		contador++;
		resto=numero%2;

		if (resto==0) 
		{
			contadorPar=contadorPar+1;
			
		}
		else
		{
			contadorImpar=contadorImpar+1;
		}

		if (numero==0) 
		{
			contadorCeros=contadorCeros+1;
		}
		if (numero>0) 
		{
			acumuladorPositivos=acumuladorPositivos+numero;
			contadorPositivos=contadorPositivos+1;
			
		}
		if (numero<0) 
		{
				acumumuladorNegativos=acumumuladorNegativos+numero;
		}
		if(flag==0 || numero>numeroMaximo)
		{
			numeroMaximo=numero;
			letraMaxima=letra;
		}
		if (flag==0 || numero<numeroMasBajo) 
		{
			numeroMasBajo=numero;
			letraMasbaja=letra;
			flag=1;
		}

	}
			if(contadorPositivos>0)
			{
				promedioPositivos=acumuladorPositivos/contadorPositivos;	
			}
			else
			{
				document.write("no se ingresaron positivos");
			}

		document.write("La cantidad de numeros par es " +contadorPar+ "<br>");
		document.write("La cantidad de numeros impar es "+contadorImpar+ "<br>");
		document.write("Se ingresaron " +contadorCeros+ "ceros"+"<br>");
		document.write("El promedio es " +promedioPositivos+ "<br>");
		document.write("La suma es" +acumumuladorNegativos+ "<br>");
		document.write("El numero maximo es " +numeroMaximo+ " y la letra maxima es " +letraMaxima+ " y el numero mas bajo es " +numeroMasBajo+ " y la letra mas baja es " +letra);


		

}