function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	
	while 	(contador<5)
		
		
		{
			numero=prompt("ingrese numero");
			contador=contador+1;
			numero=parseInt(numero);
			acumulador=acumulador+numero;
		}





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
													//en vez de 5  puedo poner la palabra contador.	
										//acumulador suma variable
										//contador suma literal				
}//FIN DE LA FUNCIÓN						