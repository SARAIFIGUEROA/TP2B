var precioarticulo = parseInt(prompt("ingrese el costo del articulo"))
if (precioarticulo > 1000) {
    alert("su comision es del 20%")
} else {
    if (precioarticulo >= 200) {
        alert("su comision es del 15%")
    } else {
        if (precioarticulo >= 100) {
            alert("su comision es del 12%")
        } else {
            if (precioarticulo > 0) {
                alert("su comision es del 10%")
            } else {
                alert("Error: monto incorrecto o nulo")
            }
        }
    }
}