function mostrar()
{
 var hora;
 var mensaje="";

hora=laHora.value;
hora=parseInt(hora);
   

// case :
//if ()

	

			switch (hora)

			{
				
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				mensaje="Es de mañana";
				break;

				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
				case 20:
				case 21:
				case 22:
				case 23:
				case 24:
				mensaje="Es de noche";
				if (hora>19 || hora>24)
				{
					mensaje="a dormir";
				}
				break;

				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				mensaje="Es de noche";
				break;		
				
				default:
				mensaje="La hora no existe";
				break;


			}



	
	

if (mensaje != " ")
	{
	alert(mensaje);
	}


}
