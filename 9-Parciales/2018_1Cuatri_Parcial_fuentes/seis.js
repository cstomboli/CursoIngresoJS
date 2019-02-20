function mostrar()
{
 var hora;
 var mensaje="";

hora=laHora.value;
hora=parseInt(hora);


if (hora>19 && hora<=24)
    {
    	alert("Es de noche");
	}

if (hora>0 && hora<6)
	{
    	alert("Es de noche");
	}
// case :
//if ()

		else

	{

			switch (hora)

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
