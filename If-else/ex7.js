// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do 
// valor que ele pague. Faça um programa para loja, que solicite o valor 
// total da compra ao usuário e assim, aplique um desconto de acordo 
// com o valor total da compra. Siga a tabela:

// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.


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