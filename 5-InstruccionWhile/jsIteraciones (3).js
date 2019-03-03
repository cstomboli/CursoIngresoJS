function mostrar()
{
	var contador=0;
	
	var clave = prompt("ingrese el número clave.");

	while (clave != "utn750")

		{
			alert("Clave incorrecta, Intente nuevamente");
			contador++;
			clave = prompt("Reingrese el número clave.");
			
			
		}
		if (contador==3) 
			{
				alert("Retire tu tarjeta de lu}nes a viernes");
			}
	alert("Bienvenido");

}//FIN DE LA FUNCIÓN
