function mostrar()
{
	var dia;
	var mensaje=""

	dia=prompt("Por favor ingrear un dia de la semana:");

	switch (dia)
	{
		case "sabado":
		case "domingo":
		mensaje="buen finde";
		break

		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
		mensaje="a trabajar";
		break;

		default:
		mensaje="el dian no es valido";
	}
if (mensaje !="") 
{
	alert(mensaje);
}

}
