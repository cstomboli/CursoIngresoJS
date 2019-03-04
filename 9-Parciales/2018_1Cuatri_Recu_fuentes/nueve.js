function mostrar()
{
	var nombre;
	var peso;
	var temperatura;
	var contador=0;
	var acumulador=0
	var respuesta="si";
	

	nombre=prompt("Ingrese un animal del zoologico");
	peso=prompt("ingrese el peso del mismo entre 1 y 1000");
	peso=parseInt(peso);
	temperatura=prompt("Ingrese la temperatura entre -30 y 30");
	temperatura=parseInt(temperatura);

	for (; respuesta=="si" ; ) 
	{
		respuesta=prompt("ingrese si para terminar");

		prompt("Ingrese un animal del zoologico");
		prompt("ingrese el peso del mismo entre 1 y 1000");
		peso=parseInt(peso);
		temperatura=prompt("Ingrese la temperatura entre -30 y 30");
		temperatura=parseInt(temperatura);
		

	}

	document.write(nombre);


}
