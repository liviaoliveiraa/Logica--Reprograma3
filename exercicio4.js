/* 4 - Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 
    a) números de 1 a 100  
    b) quando chegar no número 50 interrompa a instrução e pare o loop 
    c) quando chegar no número 50 pule a instrução  */
    

   for(let num = 1; num <=100; num++){
        console.log(num)
    } 


    for(let num = 1; num <=100; num++){
        if(num === 51){
            break
        }
        console.log(num)
    } 


    for(let num = 1; num <=100; num++){
        if(num === 50){
            continue        
        }
        console.log(num)   
    }
