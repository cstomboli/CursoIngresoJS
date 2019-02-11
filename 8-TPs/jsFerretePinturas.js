/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
var temperatura;
var aCentigrados;

temperatura=Temperatura.value;
temperatura=parseInt(temperatura);

aCentigrados=temperatura/32;

alert(+temperatura+ "  Fahrenheit son " +aCentigrados+ "  centigrados");

}

function CentigradosFahrenheit () 
{
var temperatura;
var aFahrenheit;

temperatura=Temperatura.value;
temperatura=parseInt(temperatura);

aFahrenheit=temperatura*32;

alert(+temperatura+ "  centigrados son " +aFahrenheit+ "  Fahrenheit");	
}
