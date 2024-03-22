/*
function mayorDeDosNumeros() {
    var primerNumero = prompt("Ingrese un numero");
    var segundoNumero = prompt("Ingrese un numero");
    if(primerNumero>=segundoNumero){
        return primerNumero;
    }else{
        return segundoNumero;
    }
}

function mayorDe2NumerosMejorado(){
    const primerNumero = prompt("Ingrese un numero");
    const segundoNumero = prompt("Ingrese un numero");
    var numeroMayor;
    if(primerNumero>=segundoNumero) numeroMayor = primerNumero;
    else numeroMayor = segundoNumero;
    return numeroMayor;
}

function MayorDeDiezNumerosPedidosAlUsuario(){
    var mayorNumero = -999999;
    for(var i = 0;i<2;i++){
        const numeroIngresado = prompt("Ingrese un numero");
        if(numeroIngresado > mayorNumero){
            mayorNumero = numeroIngresado;
        }
    }
    return mayorNumero;
}

function mayorDeNumerosPedidosAlUsuario(){
    var mayorNumero = -999999;
    const cantidadNumerosAIngresar = prompt("Ingrese la cantidad de numeros a comparar");
    for(var i = 0;i< cantidadNumerosAIngresar;i++){
        const numeroIngresado = prompt("Ingrese un numero");
        if(numeroIngresado > mayorNumero){
            mayorNumero = numeroIngresado;
        }
    }
    return mayorNumero;
}

const conjuntoDeNumeros = [1,2,3,4,5,6,7,8,9,10];
const valorDeLaQuintaPosicion = conjuntoDeNumeros[4];

function mayorDelConjuntoDeNumeros(numeros){
    var mayorNumero = -999999;
    for(var i = 0;i< numeros.length;i++){
        const numeroDeLaPosicion = numeros[i];      
        if(numeroDeLaPosicion > mayorNumero){
            mayorNumero = numeroDeLaPosicion;
        }
    }
    return mayorNumero;
}
    var otroConjuntoDeNumeros = [100,500,650,150,-90,900,1500];
 function mayorDelConjuntoHastaPrimerNegativo(numeros){
    var i = 0;
    var numeroMayor;
    while(otroConjuntoDeNumeros.length > i && otroConjuntoDeNumeros[i]>0){
        if(numeroMayor<otroConjuntoDeNumeros[i] || numeroMayor == null){
            numeroMayor = numeroMayor<otroConjuntoDeNumeros[i];    
        }
        i++;
    }
    return numeroMayor;
} */

// 2. Dados 50 números enteros, informar el promedio de los mayores que 100 y la suma de los menores que –10 por pantalla.

/* const cualquierconjuntoDeNumeros = [200,-156,800,-500,700,-190];

function promedioDeMayoresA100YSumaDeMenoresAMenos10(numeros){
    var promedioMayoresA100 = 0;
    var contadorMayorA100 = 0;
    var sumaDeMayoresA100 = 0 ;
    var sumaDeMenoresAMenos10 = 0;
    for(var i = 0; i < cualquierconjuntoDeNumeros.length;i++){
        if(cualquierconjuntoDeNumeros[i]<-10){
            sumaDeMenoresAMenos10 += cualquierconjuntoDeNumeros[i];
        }
        if(cualquierconjuntoDeNumeros[i]>100){
            sumaDeMayoresA100 += cualquierconjuntoDeNumeros[i];
            contadorMayorA100++;
        }
    }
    promedioMayoresA100 = sumaDeMayoresA100/contadorMayorA100;
    console.log("El promedio de los mayores a 100 es " + promedioMayoresA100 + " y la suma de los menores a -10 es " + sumaDeMenoresAMenos10);
}

promedioDeMayoresA100YSumaDeMenoresAMenos10(cualquierconjuntoDeNumeros); */

// 4. Dado un valor numérico entero m, determinar e imprimir un listado con los m primeros múltiplos de 3 que no sean múltiplos de 5.

/* function imprimirMultiplosDeM(m){
    var i = 1;
    var contador = 0;
    while(contador < m){
        if(i%3 == 0 && !(i%5 == 0)){
            console.log(i);
            contador++;  
        }
        i++;
    }
}   */

//imprimirMultiplosDeM(10);

//12
/* const valoresMonetarios = [1000,500,200,100,50,20,10,5,2,1];
const billetesUsados = [0,0,0,0,0,0,0,0,0,0];
function pagarMonto(valor){
    var monto = 0;
    var i = 0;
    var j = 0;
    while(monto != valor){
    if((valoresMonetarios[i] + monto) <= valor){
        monto += valoresMonetarios[i]; 
        billetesUsados[j]++;
        if(monto == valor) console.log("Se usaron " + billetesUsados[i] + " billetes de " + valoresMonetarios[i]);
    } else{
        if(billetesUsados[i]>0)console.log("Se usaron " + billetesUsados[i] + " billetes de " + valoresMonetarios[i]);
        i++;
        j++;
    } 
    }
    console.log("Para llegar a " + valor);
}

pagarMonto(25799);
 */

// 9
/* function funcionPow(base,potencia){
    var acum = 0;
    if(base == 1) acum = potencia;
    else if(potencia == 1) acum = base;
     else if(potencia == 0) acum = 1;
    else {
        for(var i = 0; i<potencia;i++){
           if(i==0) acum = base
           else acum *= base;
        }
       }   
       return acum;
}

console.log(funcionPow(5,3));  */

// 10
/* function isNumeroPrimo(numero){
    var esPrimo;
    if((numero % 2 != 0) && (numero % 3 != 0)) esPrimo = true;
    else esPrimo = false;
    return esPrimo;
}
console.log(isNumeroPrimo(17));  */

// 13
/* function mostrarMenu(){
  console.log("1) Aplicar suma");
  console.log("2) Aplicar resta");
  console.log("3) Transformar a numero romano");
  console.log("4) Potenciar");   
}

function elegirOpcion(numero, opc){
    switch(opc){
        case 1: 
    }
}
 */
// 15
/* const matriz = [[3,5,6],[2,8,4],[1,6,8]];
function multiplicarMatrizYMostrar(multiplicador){
    for(var i = 0; i < matriz.length;i++){
        for(var j = 0; j < matriz[i].length; j++){
            console.log(matriz[i][j] * multiplicador + "\t" );
        }
        console.log("");
    }
}

multiplicarMatrizYMostrar(2); */

// Crear una funcion que reciba una cadena como parametro y devuelva el string invertido
 const cadena = "hola";
/*
function invertirCadena(palabra){
    invertido = "";
    for(var i = palabra.length-1; i>=0;i--){
        invertido += palabra[i];
    }
    return invertido;
}

console.log(invertirCadena(cadena)); */

// Crear una funcion que reciba un string como parametro y que cuente la cantidad de vocales que contiene 
/* function contarVocales(palabra){
    const vocales = ["a","e","i","o","u"];
    var contadorVocales = 0;
    var j = 0;
    for(var i=0;i<palabra.length;i++){
        do{
            if(palabra[i] == vocales[j]) contadorVocales++;
            j++;
        }while(palabra[i] != vocales[j-1] && (j-1)<vocales.length);
    }
    return contadorVocales;
} 

console.log(contarVocales(cadena));
 */
// Funcion que determine si una palanbra se lee igual de derecha a izquierda
/* function esPalindromo(palabra){
    var palindromo = false;
    invertido = "";
    for(var i = palabra.length-1; i>=0;i--){
        invertido += palabra[i];
    }
    if(invertido == palabra) palindromo = true;
    return palindromo;
}
console.log(esPalindromo("menem")); */

// Sacar el factorial de un numero
/* function devolverFactorial(numero){
    var factorial = 0;
    for(let i = 1;i<numero;i++){
        factorial = i*(i+1);
    }
    return factorial;
}
console.log(devolverFactorial(4)); */

// Dado un array devolver el numero que mas se repitio, si hay colision que devuelva cualquiera
const numerosPrueba = [1,2,3,4,1,1,2,2,2,4,4,6,7,9];

function devolverNumeroMayor(numeros){
    let numeroMayor = 0;
    for(let i = 0;i<numeroMayor.length;i++){
        if(numeros[i]>numeroMayor) numeroMayor = numeros[i];
    }
    return numeroMayor;
}

function devolverNumeroMasRepetido(numeros){
    let contadores = [];
    let numeroMasRepetido = null;
    for(let i=0;i<numeros.length;i++){
        for(let j = 0; j<numeros.length;j++){
            if(numeros[i] == numeros[j]){
                contadores.push(0);
                contadores[i]++;
            }
        }
    }
    numeroMasRepetido = devolverNumeroMasRepetido(contadores);
    return numeroMasRepetido;
}


console.log(devolverNumeroMasRepetido(numerosPrueba));
// Crear una funcion que reciba una palabra y una letra y devuelva la cantidad de veces que aparece la letra en la palabra