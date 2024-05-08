// Escreva um programa que solicita o ano de nascimento de uma pessoa 
// e verifica se ela é maior de 18 anos. Exiba uma mensagem indicando 
// se a pessoa é maior de idade ou não.

function ano() {
    let birth = parseFloat(prompt("Digite o ano de nascimento"))

    let yold = (2024 - birth)
    
    if (!birth) {
        alert("Você não digitou seu ano de nascimento")
        ano()
    } else {
        if (yold >= 18) {
            alert("Você é maior de idade")
        } else {
            alert("Você é menor de idade")
        }
    }
}

ano()