//1 - crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".

for(let numero = 10; numero <=60; numero+=5) {
    if(numero === 35 || numero === 45){
        console.log('Pulou')
        continue
    }

    console.log(numero)
}




