function PraticaTeste(){
    let n1 = Number(prompt('Informe o 1º números.'));
    let n2 = Number(prompt('Informe o 2º número.'));
    var igualdade;
    var soma = n1 + n2;
    var somaResp;
   


    if(n1 === n2){
         igualdade = n1,'e',n2,' São iguais';
    } else { 
        igualdade = n1,'e',n2,' Não são iguais';

    }
    if (soma > 10 && soma < 20){
        somaResp = 'que é maior que 10 e menor que 20.';
    } else if (soma < 10){
        somaResp =  'que é menor que 10 e menor que 20.';
    }else if (soma > 20)  {
        somaResp =  'que é maior que 10 e maior que 20.';
    }
    
console.log(`Entradas: ${n1} e ${n2}\nSua soma é ${soma} ${somaResp} `);
}



PraticaTeste();