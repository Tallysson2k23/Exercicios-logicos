//EX: 10 - Faça um programa que converts graus Celsius para Fahrenheit.

    const prompt = require("prompt-sync")();
        var celsius = parseFloat (prompt ("Informa a temperatura em Celsius: "));
        var fahrenheit = (9*celsius/5) + 32 ;
            console.log("Temperatura em graus Fahrenheit = ", 
            fahrenheit);
    