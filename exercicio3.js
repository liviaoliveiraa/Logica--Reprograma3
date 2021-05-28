//3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
//Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

/* let parametro1 = 5
let parametro2 = 50
let divisao = parametro1 / parametro2 */

function dividindo(divisao){

    let parametro1 = 5
    let parametro2 = 50
    let divisao = parametro1 /= parametro2
    
    if(divisao %= 0){
        console.log((dividindo)('É par'))
    } else {
        console.log((dividindo)('É impar'))
    }

    return divisao

}