var antiguedad = parseInt(prompt("ingrese la cantidad de años en la tienda"))
var sueldo = parseFloat(prompt("ingrese su sueldo actual"))
if (antiguedad>4 || sueldo<2000 ) {
    alert("el bono asignado es de: $"+sueldo*1.25)
} else {
    alert("el bono asignado es de: $"+sueldo*1.20)
}