function mostrar()
{
		var planeta;
		var mensaje="";

		planeta=prompt("Por favor ingrese un planeta");

		switch (planeta)

			{
				case "tierra":
				mensaje="Aca vivimos";
				break;

				case "mercurio":
				case "venus":
				mensaje="aca hace mas calor";
				break;
				
				default:
				mensaje=" aca hace mas frio";


			}

if (mensaje != "")
	{
		alert(mensaje);
	}
			
}
