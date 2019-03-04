function mostrar()
{
	var precio;
	var descuento;
	var precioConDescuento;

	precio=prompt("Ingrese el precio");
	descuento=prompt("Ingrese el descuento");

	precioConDescuento=precio-descuento;

	document.getElementById('elPrecioFinal').value=precioConDescuento;





}
