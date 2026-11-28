const valorReal = document.querySelector("input")

const converter = () => {
    document.querySelector("h1").style.color = "<blue></blue>"

    document.querySelector("input").style.border = "none"
    
    const valorConvertido = valorReal.value / 5

    alert(`O valor convertido para dolar é ${valorConvertido}`)
}