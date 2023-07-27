

//EX:4 - Crie um programa que receba a idade de uma pessoa e informe so ela
// é maior ou menor de idade.



const prompt = require ("prompt-sync")();
var idade = parseFloat (prompt ("Digite sua idade: "));
if (idade >=18){
    console.log("Voçe é maior de idade!");
}else{
    console.log("Voçe é menor de idade!");
}