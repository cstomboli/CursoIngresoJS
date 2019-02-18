/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var numeroLamparas;
 	var marcaDeLamparas;
 	var precio;
 	var precioTotal;
 	var descuento;
 	var precioFinal;
 	var importeFinal;
 	var ingresos;
 	var ingresosFinal;

 	numeroLamparas=Cantidad.value;
 	marcaDeLamparas=Marca.value;
 	precioFinal=precioDescuento.value;

 	numeroLamparas=parseInt(numeroLamparas);

 	precio=35;

 	if (numeroLamparas>=6)

 		{
 			descuento=0.5;

 		}
	else
 	
 	{		
 		if (numeroLamparas==5 && marcaDeLamparas== "ArgentinaLuz")

 			{
 				descuento=0.4;
 			}
 		if (numeroLamparas==5 && marcaDeLamparas != "ArgentinaLuz" )

 			{
 				descuento=0.3;
 			}
 	}

 	if (numeroLamparas==4)

 	{
 			if ( marcaDeLamparas=="ArgentinaLuz" || marcaDeLamparas == "FelipeLamparas")

 			{
 				descuento=0.25;
 			}
 			else 
 			{
 				descuento=0.20;
 			}

 	}
 	
 	if (numeroLamparas==3) 

 	{
 			if (marcaDeLamparas == "ArgentinaLuz" )
 			{
 				descuento=0.15; //error en el resultado del descuento.
 			}
 			if (marcaDeLamparas == "FelipeLamparas" )
 			{
 				descuento=0.10;
 			}
 			else
 			{
 				descuento=0.5;
 			}

 	}

 	precioTotal=numeroLamparas*precio;

 	precioFinal=precioTotal*descuento;
 	importeFinal=precioTotal-precioFinal;

 	document.getElementById('precioDescuento').value=importeFinal;

 	if (precioFinal > 120) //sale si pongo 7 en lamparas

		{
			ingresos=importeFinal*0.1;
 			ingresosFinal=importeFinal-ingresos;
 		
 			alert("IIBB Usted pago " + ingresosFinal + " siendo " + ingresos + " el impuesto que pago "); // No tira el alert
		} 	
 		
 	




}
