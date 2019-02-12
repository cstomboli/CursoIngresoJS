function mostrar()
{
var precio;
var descuento;
var precioConDescuento;
var precioFinal

precio=prompt("Por favor ingrese el precio");
descuento=prompt("Por favor ingrese el descuento");

precio=parseInt(precio);
descuento=parseInt(descuento);

precioConDescuento=precio*descuento;
precioFinal=precio-precioConDescuento;

document.getElementById('elPrecioFinal').value=precioFinal;
}
