function mostrar()
{
 var laHora;
 var mensaje="";

if (laHora>19 && laHora<24)
    {
    	alert("Es de noche");
	}

if (laHora>0 && laHora<6)
	{
    	alert("Es de noche");
	}

else

	{

			switch (laHora)

			{
				case "7":
				case "8":
				case "9":
				case "10":
				case "11":
				mensaje="Es de mañana";
				break;

				case "12":
				case "13":
				case "14":
				case "15":
				case "16":
				case "17":
				case "18":
				case "19":
				mensaje="Es de tarde";
				break;

				default:
				mensaje="La hora no existe";
				break;


			}

	
	}

if (mensaje != " ")
	{
	alert(mensaje);
	}

}
