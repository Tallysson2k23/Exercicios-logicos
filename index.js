//EX:1

//const { Console } = require("console");

    //console.log("Hello Word");

//EX:2

    //const prompt = require ("prompt-sync")();
    //var nome = prompt ("Digite seu nome");
    //console.log("Seu nome é: " , nome)


//EX: 3

    //const prompt = require ("prompt-sync")();
    //var num1 = parseFloat (prompt ("Digite um número: "));
    //var num2 = parseFloat (prompt ("Digite segundo número: "));
     //   console.log(num1+num2)

//EX:4

    const prompt = require ("prompt-sync")();
    var idade = parseFloat (prompt ("Digite sua idade: "));
    if (idade >=18){
        console.log("Voçe é maior de idade!");
    }else{
        console.log("Voçe é menor de idade!");
    }
    


