//cuantas veces  cada numero, creamos 10 contadores, de 1 a 10.

function mostrar()
{
	var contador;
	var contador=0;
	var numeroRandom;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;
	
	

	for (  ; contador<1000; )
	{
		numeroRandom=Math.floor((Math.random() * 10) + 1);
		
		contador++;
		
		//console.log(numeroRandom);

		switch (numeroRandom)

		{
			case 1:
			contador1++;
			break;
			
			case 2:
			contador2++;
			break;
			
			case 3:
			contador3++;
			break;
			
			case 4:
			contador4++;
			break;
			
			case 5:
			contador5++;
			break;
			
			case 6:
			contador6++;
			break;
			
			case 7:
			porcen=contador7/contador*100;
			if(porcen>6)
			{
				continue;
				contador--;
			}
			contador7++;
			break;
			
			case 8:
			contador8++;
			break;
			
			case 9:
			contador9++;
			break;
			
			case 10:
			contador10++;
			break;

		}


		

	} 


	console.log("El 1 salio:" + contador1 + " veces " + contador1/contador*100 + " % ");
	console.log("El 2 salio:" + contador2 + " veces " + contador2/contador*100 + " % ");
	console.log("El 2 salio:" + contador2 + " veces " + contador2/contador*100 + " % ");
	console.log("El 3 salio:" + contador3 + " veces " + contador3/contador*100 + " %");
	console.log("El 4 salio:" + contador4 + " veces " + contador4/contador*100 + " %");
	console.log("El 5 salio:" + contador5 + " veces " + contador5/contador*100+ " %");
	console.log("El 6 salio:" + contador6 + " veces " + contador6/contador*100+ " %");
	console.log("El 7 salio:" + contador7 + " veces " + contador7/contador*100+ " % ");
	console.log("El 8 salio:" + contador8 + " veces " + contador8/contador*100+ " % ");
	console.log("El 9 salio:" + contador9 + " veces " + contador9/contador*100+ " %");
	console.log("El 10 salio:" + contador10 + " veces " + contador10/contador*100+ " %");
	
	suma=contador10+contador9+contador8+contador7+contador6+contador5+contador4+contador3+contador2+contador1;
	console.log(suma);




}

