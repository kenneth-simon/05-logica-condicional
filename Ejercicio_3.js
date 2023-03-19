var num1 = parseInt (prompt("Dame el numero 1: "));
var num2 = parseInt (prompt("Dame el numero 2: "));
var num3 = parseInt (prompt("Dame el numero 3: "));
var mayor;

if(num1 >= num2 && num1 >= num3) {
    mayor = num1;
    alert("El numero mayor es " + num1);
}
else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
    alert("El numero mayor es " + num2);
}
else {
    mayor = num3;
    alert("El numero mayor es " + num3);
}