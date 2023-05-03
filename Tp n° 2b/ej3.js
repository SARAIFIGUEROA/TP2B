var tarifa = parseInt(prompt("ingrese la cantidad de horas que estuvo estacionado"))
if (tarifa>0 && tarifa<=2) {
    alert("el costo total del estacionamiento es: $"+tarifa*5)
} else {
    if (tarifa>2 && tarifa<=5) {
        alert("el costo total del estacionamiento es: $"+tarifa*4)
    } else {
        if (tarifa>5 && tarifa<=10) {
            alert("el costo total del estacionamiento es: $"+tarifa*3)
        } else {
            if (tarifa>10) {
                alert("el costo total del estacionamiento es: $"+tarifa*2)
            } else {
                alert("error")
            }
        }
    }
}