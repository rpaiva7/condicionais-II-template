
// EXERCÍCIO if e if
/* Vocês foram contratados para criar um personagem para o Labank. Vamos verificar se o dependente do usuáro tem entre 13 e 17 anos para aprovar a solicitação de cartão de crédito vinculado. Faremos de duas formas:
 1. Utilizando ifs aninhados 
 2. Utilizando um operador lógico para unir duas operações relacionais. 

 Caso o número esteja entre 13 e 17, imprima: "Seu dependente já pode ter um cartão de crédito vinculado ao seu",
 Caso o número não esteja entre 13 e 17, imprima: "Consulte outras possibilidades do Labank" */


// Usando if's aninhados

//let idadeDependente = 13

/*if (idadeDependente >= 13){
   if(idadeDependente <= 17){
       console.log('Seu dependente já pode ter um cartão de crédito vinculado ao seu');
   } else { 
       console.log('Seu dependente já pode ter um cartão de crédito próprio'); 
   }
} else { 
    console.log('Consulte outras possibilidades do Labank');
}*/

// Usando operadores lógicos

/*if(idadeDependente >= 13 && idadeDependente <= 17){
   console.log('Seu dependente já pode ter um cartão de crédito vinculado ao seu'); 
 
} else { 
   console.log('Consulte outras possibilidades do Labank');
}*/

// EXERCÍCIO if ternário
/* Faça uma última verificação neste número, para verificar se o número é exatamente 13. 
Caso seja 13, imprima "A idade do dependente é 13 e já pode ter um cartão".
Caso não seja, imprima "Verifique as opções possíveis".
Utilize um if ternário para resolver.*/

//idadeDependente === 13 ? console.log('A idade do dependente é 13 e já pode ter um cartão') : console.log('Verifique as opções possíveis');

// EXERCÍCIO switch-case
/* A Labank gostou muito do seu trabalho e quer implementar um serviço de escolha do cartão pelo ramal telefônico.
  1 para 'Fácil'
  2 para 'Black'
  3 para 'Platinum'
  4 para 'Master Gold'
  E caso não seja nenhuma dessas opções, a mensagem deve ser 'Escolha uma das quatro opções disponíveis'. */

/* let cartao = Number(prompt('Solicitação de cartão de crédito. Escolha uma opção: \n 1 - Fácil \n 2 - Black \n 3 - Platinum \n 4 - Master Gold'))

switch(cartao){
  case 1:
      console.log('Cartão Fácil adquirido.');
      break;
  case 2:
      console.log('Cartão Black adquirido.');
      break;
  case 3:
      console.log('Cartão Platinum adquirido.');
      break;
  case 4: 
      console.log('Cartão Master Gold adquirido.');
      break;
  default:
      console.log('Escolha uma das quatro opções disponíveis');
} */

// EXERCÍCIO DE FIXAÇÃO
/* 1. Crie um código que receba um número por prompt e  verifique se um número é divisível por 2 e por 3. Faça isso:
 a. Utilizando ifs aninhados
 b. Utilizando um operador lógico para unir duas operações relacionais */

let numero = Number(prompt('Insira um número divisível por 2 e por 3'))

/*if (numero % 2 === 0){
   if (numero % 3 === 0){
     console.log('Boaaa, seu número é divisível por 2 e por 3!');
   }
}else{
     console.log('Não foi dessa vez, tente novamente.');
}*/

if (numero % 2 === 0 && numero % 3 === 0) {
    console.log('Maravilha, seu número é divisível por 2 e por 3!')
    numero === 30 ? console.log('UFA, ACERTEI!!!') : console.log('Não foi dessa vez :(')
      switch (numero) {
        case 6:
            console.log('Seu número é', numero, 'mas não é a resposta correta!');
            break;
        case 12:
            console.log('Seu número é', numero, 'mas não é a resposta correta!');
            break;
        case 18:
            console.log('Seu número é', numero, 'mas não é a resposta correta!');
            break;
        case 24:
            console.log('Seu número é', numero, 'mas não é a resposta correta!');
            break;
        case 30:
            console.log('UFA, ACERTEI!!! O número é 30');
            break;
        default:
            console.log('O número é maior que 30 ou menor que 6');
}
    }else{
        console.log('Que pena, tente novamente');
      }

/* 2. Dentro do if anterior, crie um if ternário que imprima um número surpresa que deve ser 30:
      - Caso o número seja 30, imprima no console "UFA, ACERTEI!".
      - Caso não seja, imprima "não foi dessa vez :(". */

/* 3. Ainda no exercício anterior, crie estrutura de sc que verifique se o número é seis, doze, dezoito, vinte e quatro ou trinta e imprima uma mensagem diferente para cada número.
Caso não seja nenhum deles, imprima o número é maior que 30 ou menor que 6*/