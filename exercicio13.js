//EX:13 - Faça um programa que verifique se uma palavra é um palindromo 
//(se pode ser lide da mesma forma de trás para frente).
const prompt = require("prompt-sync")();
var nome = prompt("Nome para saber se é um palindromo: ")
//console.log(nome[0])
var matriz_nome=[];
for(letra of nome){
    //console.log(letra)
    matriz_nome.push(letra)
}

var matriz_nome_contrario = [];
for(i=matriz_nome.length-1;i>=0;i=i-1){
    matriz_nome_contrario.push(matriz_nome[i])
}

var palindromo=true
for(i=0;i<matriz_nome.length;i++){
    if(matriz_nome[i]!==matriz_nome_contrario[i]){
        palindromo=false
    }
}
if (palindromo===true){
    console.log("é palíndromo")
    
}else{
    console.log("não é palíndromo")
}