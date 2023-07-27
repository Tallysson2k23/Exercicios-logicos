
//EX: 5 -Faça um programa que verifique se um número é par ou impar

const prompt = require ("prompt-sync")();
var num1 = prompt ("Digite um número: ");
if (num1%2===0){
    console.log("Seu número é par");
}else{
    console.log("Seu numero é impar!");
}