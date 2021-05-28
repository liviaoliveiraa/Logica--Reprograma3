/* 5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
b) Deverá ser possível passar 2 números para a operação escolhida
c) Deverá retornar o resultado e imprimir no console */



function calculadora(operacao, numero1, numero2){

    switch(operacao){
        case 'soma':
            return numero1+=numero2

        case 'divisao':
            return numero1/=numero2
            
        case 'multiplicacao':
            return numero1*=numero2
            

        case 'subtracao':
            return numero1-=numero2
            
        default:
            console.log('Escolha uma operação aritimética válida')   
    }

}

console.log(calculadora('multiplicacao', 10, 2))

