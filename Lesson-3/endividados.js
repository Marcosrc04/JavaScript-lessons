function endividados(renda, gastos) {
    if (renda > gastos) {
        return 'Está no AZUL'
    } else {
        return 'Está no VERMELHO'
    }
}

const isabela = endividados(7000, 4000)
const erick = endividados(3000, 4000)

console.log(erick)
console.log(isabela)


const DigaMeuNome = () => {
    console.log("Erick voce consegue!")
}

DigaMeuNome()


const divida = (salario, divida) => {
    if (salario > divida) {
        return 'Sobrou dinheiro :D'
    } else {
        return 'Sobrou nem saudades ;-;'
    }
}

const erick2 = divida(1600,2000)
const isabela2 = divida(1900, 1500)


console.log(erick2)
console.log(isabela2)

divida()