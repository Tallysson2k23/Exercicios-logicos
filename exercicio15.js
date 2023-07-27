
//Exercício 15:Faça um programa que simule um jogo de adivinhação, 
//onde o computador escolhe um número e o usuário tenta adivinhar


const prompt = require("prompt-sync")()
var numaleatorio = Math.floor(Math.random() * (100 - 1+1)) + 1;
console.log("Tente acertar o número de 1 a 100: ")
var num1 = prompt("Tente um número: ")
    if (num1===numaleatorio){
        console.log("Você acertou! O número é: ",numaleatorio)
    }else{
        if (num1>=numaleatorio-2 && num1<=numaleatorio+2){
            console.log("Está bem quente")
        }else{
            if (num1>=numaleatorio-4 && num1<=numaleatorio+4){
                console.log("Está quente")
            } else{
                console.log("Está frio")
            }
        }
    }
var num2 = num1
while(num1*1!==numaleatorio*1){

    num1 = prompt("Tente outro número: ")
    if(num1*1===numaleatorio*1){
        console.log("Você acertou!!! O número é: ",numaleatorio)
    }else{

        if (Math.abs(num1*1-numaleatorio*1)<=2){
            console.log("Está bem quente")
            num2=num1;
        }else{
            if (Math.abs(num1*1-numaleatorio*1)>Math.abs(num2*1-numaleatorio*1)){
                console.log("Está esfriando")
                num2=num1;
            }else{
                console.log("Está esquentando")
                num2=num1
            }
        }
    }
}