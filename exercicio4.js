

//EX:4

const prompt = require ("prompt-sync")();
var idade = parseFloat (prompt ("Digite sua idade: "));
if (idade >=18){
    console.log("Voçe é maior de idade!");
}else{
    console.log("Voçe é menor de idade!");
}