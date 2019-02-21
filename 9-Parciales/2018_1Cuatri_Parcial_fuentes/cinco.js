//Cada habitacion de un hotel tiene un precio, hay promociones segun el tipo de pago,
// si es con tarjeta visa un 10%, si es por paypal un 15%, por mercadoPago un 10%, efectivo
//20%, cualquier otro medio solo un 5%.
// Si compraste el paquete "todoincluido" y pagas con paypal se te suma un 10% al descuento.
//Si pagas en efectivo, tenes varias opciones, el paquete "solodesayunos" te suma un 10% al descuento,
//si el paquete es "todoincluido" te suma un 15% y para el resto de los paquete no tiene descuento adicional.

function mostrar()
{
		var valorHabitacion;
		var medioDePago;
		var descuento;	
		var pequete1;
		var paquete2;
		

		valorHabitacion	= prompt ("Ingrese su habitacion por favor:");
		medioDePago	=prompt("Ingrese su medio de pago por favor:");	
		paquete=prompt("Por favor ingrese su paquete: 1- Todo incluido 2- Solo desayuno")	
		
		

		switch (medioDePago)
			{
				case "visa":
				case "mercadopago":
					descuento=valorHabitacion*0.90;	
					alert("El valor es:"+descuento);	
					break;

				case "paypal":
										
					switch (paquete)
					{
						case "paquete1":
						descuento=descuento*0.75;
						alert("El valor es"+descuento);
						break;
						default:
						descuento=valorHabitacion*0.15;			

					}


				case "efectivo":
					descuento=valorHabitacion*0.80;
												
						switch (paquete)
						{
							case "paquete1":
							descuento2=descuento*0.85;
							alert("El valor es" +descuento);
							break;	
							case "paquete2":
							descuento2=descuento*0.90;
							alert("El valor es"+descuento2);
							break;		
						}

				default:
						descuento=valorHabitacion*0.95;
						alert("El valor es"descuento);
						break;		
						 		



			}


			
}
