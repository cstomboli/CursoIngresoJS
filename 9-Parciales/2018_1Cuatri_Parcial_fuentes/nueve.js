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
	var marcaMinPeso;

	while (respuesta== "si")
	{
		marca=prompt("Ingrese marca");
		peso=prompt("Ingrese peso");
		while (peso<1 || peso>100)
		{
			peso=prompt("Reingrese peso");	
			peso=parseInt(peso);
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

		respuesta=prompt("desea ingresar otro prodcuto: si o no");

	}

	promedioPeso=acumulador/contador;

	document.write("Las temperaturas par son : " + contadorTemperaturaPar + " <br>");
	document.write("La marca del producto mas pesado es: " + marcaMaximoPeso + " <br>");
	document.write("La cantidad de prodcutos que se conservan a menos de 0 grados son: " + contadorProductos + " <br>");
	document.write("El promedio de peso es: " + promedioPeso + " <br>");
	document.write("El peso maximo es: " + maximoPeso + " y el peso minimo es : " + minPeso);
}
