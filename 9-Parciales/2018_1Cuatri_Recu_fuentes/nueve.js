function mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var respuesta="si";
	var contadorTemperatura=0;
	var flag=true;
	var animalMaspesado;
	var pesoMayor;
	var temperaturaAnimal;
	var temperaturaGrados=0;
	var contador=0;
	var acumulador=0;
	var promedio;
	var pesoMenorGrados;
	var pesoMayorGrados;

	while(respuesta=="si")
	{
		animal=prompt("Ingrese animal");
		peso=prompt("ingrese peso");
		while(peso<1 || peso>100)
		{
			peso=prompt("Peso INCORRECTO, reingrese");
		}
		peso=parseInt(peso);
		temperatura=prompt("Ingrese temperatura");
		while(temperatura<-30 || temperatura>30)
		{
			temperatura=Prompt("Temp INCORRECTO, reingrese");
		}
		temperatura=parseInt(temperatura);
		
		respuesta=prompt("Desde ingresar otro animal");

		if(temperatura%2==0)
		{
			contadorTemperatura=contadorTemperatura+1;
		}
		if (flag==true || peso>pesoMayor) 
		{
			pesoMayor=peso;
			animalMaspesado=animal;
			temperaturaAnimal=temperatura;
		}
		if (temperatura<0)
		{
			temperaturaGrados=temperaturaGrados+1;

			if (flag==true  || peso>pesoMayorGrados) 
			{
				pesoMayorGrados=peso;

			}
			if (flag==true  || peso<pesoMenorGrados) 
			{
				pesoMenorGrados=peso;
				flag=false;
			}
		}

		contador=contador+1;
		acumulador=acumulador+peso;

	}
	promedio=acumulador/contador;
	document.write("Cantidad temperatura par: "+contadorTemperatura+" <br>");
	document.write("Animal mas pesado: "+animalMaspesado+" y temperatura "+temperaturaAnimal+" <br>");
	document.write("Animal 0 grados: "+temperaturaGrados+" <br>");
	document.write("Promedio peso de todos los animales: "+promedio+" <br>");
	document.write("Peso maximo a cero grados: "+pesoMayorGrados+"y minimo" +pesoMenorGrados+" <br>");

	
		

	

	


}
