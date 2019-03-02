function mostrar()
{
var precio;
var descuento;
var precioConDescuento;


precio=prompt("Por favor ingrese el precio");
descuento=prompt("Por favor ingrese el descuento");
precio=parseInt(precio);
descuento=parseInt(descuento);

precioConDescuento=precio-(precio*descuento)/100;


document.getElementById('elPrecioFinal').value=precioConDescuento;
}
