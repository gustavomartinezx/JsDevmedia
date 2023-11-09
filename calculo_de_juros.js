import input from 'readline-sync';

console.log("Aplicação de juros \n");
let valor = input.question("Informe o valor devido: ");
let dias_atraso = input.question("Informe quantos dias atrasou o pagamento: ");
let divida;

if(valor <= 0){
    console.log("O valor tem que ser maior que 0!");
} else {
    if(dias_atraso <= 15){
        divida = Number(valor) * 1.05;
        console.log("Valor original da dívida: "+ valor);
        console.log("Dias de atraso: "+dias_atraso);
        console.log("Taxa de juros: 5%");
        console.log("Valor total com juros: "+ divida);
    } else if(dias_atraso > 15){
        divida = Number(valor) * 1.1;
        console.log("Valor original da dívida: "+ valor);
        console.log("Dias de atraso: "+dias_atraso);
        console.log("Taxa de juros: 5%");
        console.log("Valor total com juros: "+ divida);
    }
}