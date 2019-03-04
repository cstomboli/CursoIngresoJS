function mostrar()
{
	var laHora;
	var mensaje="";

	laHora=document.getElementById('laHora').value;

if (laHora>0 && laHora<6)
	{
    	mensaje="Es de noche";
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

				case "20":
				case "21":
				case "22":
				case "23":
				case "24":		
				mensaje="Es de noche";
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
	
if (laHora>19 && laHora<24) 
{
	alert("a dormir");
}	


}
