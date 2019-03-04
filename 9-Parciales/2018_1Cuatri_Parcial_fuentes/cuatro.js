function mostrar()
{
	var primerNumero;
	var segundoNumero;
	var resta;
	var suma;

	primerNumero=prompt("ingrese primer Numero");
	segundoNumero=prompt("ingrese segundo Numero");

	if (primerNumero==segundoNumero) 
	{
		alert(primerNumero+segundoNumero);
	}
	else
	{
		primerNumero=parseInt(primerNumero);
		segundoNumero=parseInt(segundoNumero);

		if (primerNumero>segundoNumero) 
		{
			resta=primerNumero-segundoNumero;
			alert(resta);
		}
		else
		{
			suma=primerNumero+segundoNumero;
			alert(suma);
		}
	}
if (suma>10) 
{
	alert("La suma es " +suma+ " y supero el 10");
}

}



	/*
	var precio1;
	var precio2;
	var precio3;
	var precio4;
	var precioMayor
	var total;
	var descuento;
	var recargo;


	precio1=prompt("Por favor ingrese el primer precio");
	precio2=prompt("Por favor ingrese el segundo precio");
	precio3=prompt("Por favor ingrese el tercer precio");
	precio4=prompt("Por favor ingrese el cuarto precio");

	precio1=parseInt(precio1);		
	precio2=parseInt(precio2);	
	precio3=parseInt(precio3);	
	precio4=parseInt(precio4);

	total=precio1+precio2+precio3+precio4;	

	if (precio1>=precio2 && precio1>=precio3 && precio1>=precio4)	
	{precioMayor=precio1;}	
	else
		{	if (precio2>=precio3 && precio2>=precio4) 
			{precioMayor=precio2;}
			else
			{
				if (precio3>=precio4) 
				{precioMayor=precio3;}
			
				else
				{
				precioMayor=precio4;
				}
			}		
		}


				

	if (total>100)
			{
				descuento=total*0.9;
				alert(descuento);
			}		
				else
				{
					if (total>50 && total<100)
					{
						descuento=total*0.95;
						alert(descuento);
					}

					else 
					{
						if (total<50)
						{
							recargo=total*1.15;
							alert(recargo);	
						}		
					

					}	


				}

	total=total*recargo;
	alert("El mayor es: "+precioMayor+ " y el total es: "+ total +" ".);

}


*/
		
			



