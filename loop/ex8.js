// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

let num = prompt("Digite sua idade")

while(num < 18){
    num = prompt("Digite sua idade")
} 

alert("Você é maior de idade")