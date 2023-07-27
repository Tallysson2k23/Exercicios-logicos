//EX: 12 - Escreva um programa que receba uma lista de números 
//e retorne o maior e o menor valor


const prompt = require("prompt-sync")();
var lista = [];

for (i=0;num!=="Fim";i++){
    var num = prompt ("Digite um número: ");
    lista.push(num)
}
console.log(lista)
var maior = lista[0];
var menor = lista[0];

for (num of lista){
    if(parseFloat(num)>parseFloat(maior)){
        maior=num;
    }else{
        if(parseFloat(num)<parseFloat(menor)){
            menor=num;
        }
    }
}


console.log("o maior número é:",maior,".O menor é:",menor);