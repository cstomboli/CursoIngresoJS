function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var boton;
	
	boton=FormIngreso.value;

	boton=Math.floor((Math.random() * 10) + 1);
	console.log(boton);

	if(boton>8)

		{ 
			alert("EXCELENTE");
		}

	if (boton>4 && boton<9)
		
		{
			alert("APROBO");
		}

	else
		
		{
			alert("Vamos, la proxima se puede");
		}
	

}//FIN DE LA FUNCIÓN