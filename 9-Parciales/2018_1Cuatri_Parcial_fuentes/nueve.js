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
		marca=prompt("Ingrese una marca");
		peso=prompt("Ingrese peso");
		
		while (peso<1 || peso>100)
		{
			peso=prompt("Reingrese peso");	
			
		}
		peso=parseInt(peso);
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
		}
		if (flag==false || peso<minPeso) 
		{
			minPeso=peso;			
			flag=true;
		}
		if (temperatura<0) 
		{
			contadorProductos=contadorProductos+1;
		}
		contador=contador+1;
		acumulador=acumulador+peso;	

		

	}

	promedioPeso=acumulador/contador;

	document.write("temperatura Pares: " +contadorTemperaturaPar+ " <br>");
	document.write("Marca prodcuto mas pesado: " +marcaMaximoPeso+ " <br>");
	document.write("Cantidad productos a 0 grados: " +contadorProductos+ " <br>");
	document.write("Promedio de peso: " +promedioPeso+ " <br>");
	document.write("Peso maximo: "+maximoPeso+" peso minimo: "+minPeso+" <br>");
}
