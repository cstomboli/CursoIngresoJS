/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

var primerNumero;
var porcentaje;
var sueldoConAumento;

//primerNumero=document.getElementByid(sueldo).value; (sueldo)con comillas simples!!
primerNumero=sueldo.value; //una vez que valido el id, solo uso la variable
primerNumero=parseInt(primerNumero);

//sueldo*20/100 o;
porcentaje=primerNumero*0.10;
//resultado=sueldo*1.10;
sueldoConAumento=primerNumero+porcentaje;

document.getElementById('resultado').value=sueldoConAumento;

}
