var calificacion = parseInt(prompt("ingrese la calificacion"))
switch (calificacion) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        alert("su nota es F")
        break;
    case 6:
    case 7:
        alert("su nota es D")
        break;
    case 8:
        alert("su nota es C")
        break;
    case 9:
        alert("su nota es B")
        break;
    case 10:
        alert("su nota es A")
        break;
    default:
        alert("la nota no es valida")
        break;
}