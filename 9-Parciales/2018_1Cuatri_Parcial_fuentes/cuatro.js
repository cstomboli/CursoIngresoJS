function mostrar()
{
	var precio1;
	var precio2;
	var precio3;
	var precio4;
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

	if (precio1<precio2 || precio3<precio4)	

			{

			}	

			if (precio2<precio4)
			{
				alert(precio4);
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


}
