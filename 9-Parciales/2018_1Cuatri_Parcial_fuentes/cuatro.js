function mostrar()
{
	var precioDelProducto;
	var precioDelProducto2;
	var cantidadDePrendas;
	var total;
	var descuentoPorPrendas;
	var descuentoFinalPorPrendas;
	var descuento1;
	var descuentoFinal;
	var descuentoTotalPagoEnEfectivo;
	var recargo;
	var recargoFinal;

	/*
		var suma

		precioDelProducto=prompt("Por favor ingrese el precio del producto");
		precioDelProucto2=prompt("Por favor ingrese el precio del producto");
		cantidadDePrendas=prompt("Por favor ingrese la cantidad de prendas:");

		precioDelProducto=parseInt(precioDelProducto);
		precioDelProducto2=parseInt(precioDelProducto2);
		cantidadDePrendas=parseInt(cantidadDePrendas);

		suma=precioDelProducto+precioDelProducto2;
		descuentoPorPrendas=suma*0.1;
		descuentoFinalPorPrendas=suma-descuentoPorPrendas,

		descuento1=suma*1.5;
		descuentoFinal=suma-descuentoPorPrendas-descuento1; //Esto es si paga en EFECTIVO




	*/

	precioDelProducto=Producto.value;
	precioDelProducto2=Producto2.value;
	cantidadDePrendas=Cantidad.value;

	precioDelProducto=parseInt(compra);
	precioDelProducto2=parseInt(compra2);

	total=efectivo;

	descuentoPorPrendas=total*0.1;
	descuentoFinalPorPrendas=total-descuentoporprendas;

	descuento1=pago*0.15;
	descuentoFinal=pago-descuento;

	descuentoTotalPagoEnEfectivo=total-descuentoporprendas-descuento1;

	recargo=pago*0.1;
	recargoFinal=pago+recargo;
 
 /*

	if (cantidadDePrendas>1)

 		{
			
			if (precioDelProducto>1999 && total=efectivo)

				{ 
					alert("Tiene un 25% de descuento");
				}


 		}

	else
		{
			alert("El recargo es de un 10%");
		}


 */
	

}
