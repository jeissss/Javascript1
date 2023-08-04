//Datos de entrada
let valor_compra = prompt("Ingrese el valor de su compra: ")

//Datos de salida
let totalUnaCuota = valor_compra

let totalDosCuotas = (parseFloat(valor_compra) * 1.05)
let valor_2_cuotas = (parseFloat(totalDosCuotas) / 2)

let totalSeisCuotas = (parseFloat(valor_compra) * 1.40)
let valor_6_cuotas = (parseFloat(totalSeisCuotas) / 6)  


console.log("Una cuota de : $" + totalUnaCuota)
console.log("Dos cuotas de : $" + valor_2_cuotas + " Total: $" + totalDosCuotas)
console.log("Seis cuotas de : $" + valor_6_cuotas + " Total: $" + totalSeisCuotas)






