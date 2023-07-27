//EX: 11 - Escreva um programa que receba uma lista de números
// e imprima apenas os números pares.

const prompt=require("prompt-sync")();
console.log("Digite os números de um a um dando enter, quando quiser parar digite 'fim'")
var num2=[]
for(var i=0;num!=="fim";i++){
    var num=prompt(" ");
    num2.push(num)
 //   console.log(num2)
}
console.log("Resultado:")
for(numero of num2){
    if(numero!=="fim" && parseFloat(numero)%2==0){
        console.log(numero)
        
    }
}