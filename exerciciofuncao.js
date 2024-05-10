// Fazer um menu de exercicios utilizando o exemplo dado em aula
// Criar um menu, onde é possível executar 6 dos exercícios anteriores.
// Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário poderá escolher qual exercicio ele quer visualizar.

// O usuário deverá digitar 0 para sair do menu.f


function compra(){

    let ValorCompra = parseFloat(prompt("Digite apenas o numero do valor da sua compra"))

    if (ValorCompra >= 200) {
        let desconto = ValorCompra * 0.2
        let valorfinal = ValorCompra - desconto
        alert("Você recebeu 20% de desconto e vai pagar " + valorfinal + "R$")
    } else if (ValorCompra >= 100) {
        let desconto = ValorCompra * 0.1
        let valorfinal = ValorCompra - desconto
        alert("Você recebeu 10% de desconto e vai pagar " + valorfinal + "R$")
    } else {
        alert("Você não recebeu desconto e vai pagar " + ValorCompra + "R$")
    }

}

function indicepeso(){

    let altura = parseFloat(prompt("Digite sua altura em metros (Ex: '1.70')"))
    let peso = parseFloat(prompt("Digite seu peso"))
    
    let imc = peso / (altura * altura)
    
    console.log(imc)
    
    if (imc >= 40) {
        alert("Obesidade Grau 3")
    } else if (imc >= 35) {
        alert("Obesidade grau 2")
    } else if (imc >= 30) {
        alert("Obesidade grau 1")
    } else if (imc >= 25) {
        alert("Sobrepeso")
    } else if (imc >= 18.5) {
        alert("Peso normal")
    } else {
        alert("Abaixo do peso")
    }

}

function tabuada(){

    let num = parseFloat(prompt("Digite um número para saber sua tabuada até o 10"))

    nummax = num * 10
    
    
    for(num2 = num; num2 <= nummax; num2 += num) {
        console.log(num + " X " + (num2 / num) + " = " + num2)
    }

}

function fibonacci(){

    let num1 = 1, num2 = 1, num;

    for (let contagem = 1; contagem <= 10; contagem++) {
        console.log(num1);
        num = num1 + num2;
        num1 = num2;
        num2 = num;
    } 

}

function countto0(){
    
    let num = prompt("Digite um numero")

    while(num >= 0){
        console.log(num)
        num--
    }

}

function diadasemana(){

    let dia = prompt("Digite um número de 1 a 7 para ver seu respectivo dia")

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
        default:
            diadasemana()
            break;
    }

}

function start(){
    
    let menu = prompt("Digite qual exercicio você deseja ver:\n\n1 - Calcule a porcetagem do desconto de sua compra\n2 - Calcule o Indice de massa corporal\n3 - Saiba a tabuada até o 10 de qualquer numero escolhido\n4 - Veja os primeiros 10 numeros da sequência de Fibonacci\n5 - Escolha um numero para ver sua contagem regressiva até o 0\n6 - Veja o dia respectivo do número da semana que escolher\n\n0 - Para fechar o menu")
    
    switch (menu) {
        case "0" :
            alert("Tchau")
            break;
        case "1" :
            console.clear();
            compra()
            start()
            break;
        case "2" :
            console.clear();
            indicepeso()
            start()
            break;
        case "3" :
            console.clear();
            tabuada()
            start()
            break;
        case "4" :
            console.clear();
            fibonacci()
            start()
            break;
        case "5" :
            console.clear();
            countto0()
            start()
            break;
        case "6" :
            console.clear();
            diadasemana()
            start()
            break;
        default:
            alert("Digite 0 para sair do menu")
            start()
            break;
    }

}

start()