
function mostrar()
{
var ancho;
var largo;
var medidas;
var perimetro;

ancho=prompt("Por favor ingrese el ancho");
largo=prompt("Por favor ingrese el largo");

ancho=parseInt(ancho);
largo=parseInt(largo);

medidas=ancho+largo;
perimetro=medidas*2;

alert("El perimetro es: "+perimetro);


}
