function mostrar()
{
	var marca;
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

	while (respuesta== "si")
	{
		marca=prompt("Ingrese marca");
		peso=prompt("Ingrese peso");
		while (peso<1 || peso>100)
		{
			peso=prompt("Reingrese peso");	
		}
		temperatura=prompt("Ingrese temperatura");
		while (temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("Reingrese temperatura");	
		}
		if (temperatura%2==0) 
		{
			contadorTemperaturaPar++;
		}
		if (flag==false || peso>maximoPeso) 
		{
			maximoPeso=peso;
			marcaMaximoPeso=marca;
			
		}
		if (flag==false || peso<minPeso) 
		{
			peso=minPeso;
			flag=true;
		}
		if (temperatura<0) 
		{
			contadorProductos++;
		}
		
		contador ++;
		acumulador=acumulador+peso;	

		respuesta=prompt("desea ingresar otro prodcuto: si o no");

	}

	promedioPeso=acumulador/contador;

	document.write(contadorTemperaturaPar);
	document.write(maximoPeso + marcaMaximoPeso);
	document.write(contadorProductos);
	document.write(promedioPeso);
	document.write(maximoPeso + minPeso);
}
document.write("la temperatura es:  " + contadorTemperaturaPar + " <br>");