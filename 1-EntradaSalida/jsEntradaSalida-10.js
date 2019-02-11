/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
var valor;
var descuento;
var valorConDescuento;

valor=importe.value;
valor=parseInt(valor);

descuento=valor*0.25;
valorConDescuento=valor-descuento;

document.getElementById('resultado').value=valorConDescuento;
}
