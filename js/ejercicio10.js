let numero = prompt("ingrese un numero")

if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    document.write("es divisible por 2, 3, 5 o 7")
}else{
    document.write("no es divisible ni por 2, ni por 3, ni por 5, ni por 7")
}