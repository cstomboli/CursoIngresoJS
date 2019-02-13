function mostrar()
{

	var precio;
	var recargo;
	var precioFinal;

	precio=prompt("Por favor ingrese el precio del producto:");
	precio=parseInt(precio);

	recargo=precio*0.1;

	precioFinal=precio+recargo;

	alert("El precio del producto en efectivo es: "+ precio + ", con tarjeta tiene un recargo del 10% que seria: " + recargo + ", costandole al final: "+ precioFinal + " ");


} 
