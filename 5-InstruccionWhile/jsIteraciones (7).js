function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta	=="si")	
	{
		numero=prompt("ingrese numero");
		contador=contador+1;
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		respuesta=prompt("ingrese si para continuar");

	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN