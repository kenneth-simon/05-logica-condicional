var g_celsius;
var g_fahrenheit;
var grados_convertidos;

g_fahrenheit = parseInt (prompt ("Ingrese los grados Fahrenheit"));
g_celsius = (g_fahrenheit - 32) * 5/9;
grados_convertidos = g_celsius;
alert (g_fahrenheit + " grado(s) Fahrenheit, en Celsius son " + grados_convertidos + " Grados");