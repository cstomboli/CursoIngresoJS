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
