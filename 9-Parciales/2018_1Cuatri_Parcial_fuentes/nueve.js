function mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var respuesta="si";
	var contadorTemperaturaPar=0;
	var maximoPeso;
	var marcaMaximoPeso;
	var flag=false;
	var contadorProductos=0;
	var promedioPeso;
	var contador=0;
	var acumulador=0;
	var minPeso;
	var marcaMinPeso;

	while (respuesta== "si")
	{
		animal=prompt("Ingrese un animal del zoologico");
		peso=prompt("Ingrese peso");
		peso=parseInt(peso);
		while (peso<1 || peso>1000)
		{
			peso=prompt("Reingrese peso");	
			
		}
		temperatura=prompt("Ingrese temperatura");
	
		while (temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("Reingrese temperatura");	
		}
		respuesta=prompt("desea ingresar otro prodcuto: si o no");
		if (temperatura%2==0) 
		{
			contadorTemperaturaPar=contadorTemperaturaPar+1;
		}
		if (flag==false || peso>maximoPeso) 
		{
			maximoPeso=peso;
			marcaMaximoPeso=marca;
			maximoPeso=parseInt(maximoPeso);
			
		}
		if (flag==false || peso<minPeso) 
		{
			minPeso=peso;
			marcaMinPeso=marca;
			minPeso=parseInt(minPeso);
			flag=true;
		}
		if (temperatura<0) 
		{
			contadorProductos++;
		}
		contador ++;
		acumulador=acumulador+peso;	

		

	}

	promedioPeso=acumulador/contador;

	document.write(" : " +  + " <br>");
	document.write(": " +  + " <br>");
	document.write(": " +  + " <br>");
	document.write(": " +  + " <br>");
	document.write(": " +  + "  : " + );
}
