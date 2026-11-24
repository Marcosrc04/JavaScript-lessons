function DigaQualquerNome(nome) {
    console.log(nome)
}

DigaQualquerNome("Isabela")
DigaQualquerNome("Erick")
DigaQualquerNome("Eliel")
DigaQualquerNome("Erika")
DigaQualquerNome("Pudim")
DigaQualquerNome("nick")

function soma(numero1, numero2) {
    const resultado = numero1 + numero2
    console.log(resultado)
}
soma(5, 7)
soma(50, 70)
soma(100, 140)
soma(200, 280)


function soma(n1, n2) {
    const resultado = n1 + n2
    return resultado
}

const ResultadoDaSoma = soma(76, 94)

console.log(ResultadoDaSoma)


function estaEndividado(receita, gastos) {
    if(receita > gastos) {
        return 'Sua renda esta Otima!'
    } else {
        return 'Você esta no Vermelho!'
    }
}

const Erick = estaEndividado(2200, 1400)
const isabela = estaEndividado(5000, 7000)

console.log(isabela)
console.log(Erick)