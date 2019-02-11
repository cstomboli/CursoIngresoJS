
function mostrar()
{
var ancho;
var largo;
var medidas;
var perimetro;

ancho=prompt("Por favor indique el ancho");
largo=prompt("Por favor indique el largo");
ancho=parseInt(ancho);
largo=parseInt(largo);

medidas=largo+ancho;
perimetro=medidas*2;

alert(perimetro);
}
