function mostrar()
{
var precio;
var descuento;
var descuentoDePrecio;
var precioFinal;

precio=prompt("Por favor indique el precio:");
descuento=prompt("Por favor indique el porcentaje de descuento:");
//NO PARSEO LOS NUMEROS!!

descuentoDePrecio=precio*descuento;
precioFinal=precio-descuentoDePrecio;

document.getElementById('elPrecioFinal').value=precioFinal;
}
