const menorValor = 1
const maiorValor = 1000

const numeroSecreto = gerarAleatorio()

function gerarAleatorio(){
    return (
        parseInt(Math.random() * maiorValor + 1)
    )
}

const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

console.log('Número secreto: ',numeroSecreto)