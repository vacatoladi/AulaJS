// Escreva um programa que solicita ao usuário um número de 1 a 7 representando
// um dia da semana e exibe o nome correspondente a esse dia. Considere 
// que 1 representa segunda-feira, 2 representa terça-feira e assim por diante

let dia = prompt("Digite o dia da semana")

switch (dia) {
    case "1" :
        alert("Segunda-Feira");
        break;
    case "2" :
        alert("Terça-Feira");
        break;
    case "3" :
        alert("Quarta-Feira");
        break;
    case "4" :
        alert("Quinta-Feira");
        break;
    case "5" :
        alert("Sexta-Feira");
        break;
    case "6" :
        alert("Sabado");
        break;
    case "7" :
        alert("Domingo");
        break;
}