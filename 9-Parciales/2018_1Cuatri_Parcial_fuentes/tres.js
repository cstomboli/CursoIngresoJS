function mostrar()
{
var precio;
var descuento;
var precioConDescuento;
var precioFinal

precio=prompt("Por favor ingrese el precio");
descuento=prompt("Por favor ingrese el descuento");
//NO PARSEO LOS NUMEROS Y EL DESCUENTO LO ESCRIBO CON
//CERO COMA!

precioConDescuento=precio*descuento;
precioFinal=precio-precioConDescuento;

document.getElementById('elPrecioFinal').value=precioFinal;
}
