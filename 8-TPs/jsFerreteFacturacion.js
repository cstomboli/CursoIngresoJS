/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var primerPrecio;
var segundoPrecio;
var tercerPrecio;
var sumar;

primerPrecio=PrecioUno.value;
segundoPrecio=PrecioDos.value;
tercerPrecio=PrecioTres.value;
primerPrecio=parseInt(primerPrecio);
segundoPrecio=parseInt(segundoPrecio);
tercerPrecio=parseInt(tercerPrecio);

sumar=primerPrecio+segundoPrecio+tercerPrecio;

alert(sumar);


}
function Promedio () 
{
var primerPrecio;
var segundoPrecio;
var tercerPrecio;
var sumar;
var promedio;

primerPrecio=PrecioUno.value;
segundoPrecio=PrecioDos.value;
tercerPrecio=PrecioTres.value;
primerPrecio=parseInt(primerPrecio);
segundoPrecio=parseInt(segundoPrecio);
tercerPrecio=parseInt(tercerPrecio);

sumar=primerPrecio+segundoPrecio+tercerPrecio;	
promedio=sumar/3;

alert(promedio);

}


function PrecioFinal () 
{

var primerPrecio;
var segundoPrecio;
var tercerPrecio;
var sumar;
var iva;
var precioFinal;

primerPrecio=PrecioUno.value;
segundoPrecio=PrecioDos.value;
tercerPrecio=PrecioTres.value;
primerPrecio=parseInt(primerPrecio);
segundoPrecio=parseInt(segundoPrecio);
tercerPrecio=parseInt(tercerPrecio);

sumar=primerPrecio+segundoPrecio+tercerPrecio;
iva=sumar*0.21;
precioFinal=sumar+iva;

alert(precioFinal);


	
}