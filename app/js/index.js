const colors = require('colors');

const taxa = 0.12;
var meses = 12;
var MesAtual = 0;
var Investimento = 20000;
var index = 0;

const NomeMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "junho", "julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

while(MesAtual != meses) {

    var redimento = (Investimento*taxa);
    var Investimento = redimento + (Investimento + 500); 


    console.log(`Mês de ${NomeMes[index]} rendeu `,`R$${redimento.toFixed(2)}`.green);
    index++
    MesAtual++
};

var Total = redimento + Investimento;

console.log(`Seu Retorno anual é de:`, `R$${Total.toFixed(2)}`.green)