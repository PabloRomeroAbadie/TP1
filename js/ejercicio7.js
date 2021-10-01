let numero1 = parseInt(prompt("ingrese un primer numero"))
let numero2 = parseInt(prompt("ingrese un segundo numero"))
let numero3 = parseInt(prompt("ingrese un tercer numero"))

if(numero1> numero2 && numero1> numero3){
    document.write("numero " + numero1 + " es mayor");
}else if(numero2> numero1 && numero2> numero3){
        document.write("numero " + numero2 + " es mayor");
    }else if(numero3> numero1 && numero3> numero2){
        document.write("numero " + numero3 + " es mayor");
    }

  

