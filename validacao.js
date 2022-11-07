function verificaReposta(valorReposta){
    const numeroFalado = parseInt(valorReposta)

    if(eUmNumero(numeroFalado)){
        respostaUser.innerHTML += '<div>Valor inválido!</div>'
    }

    if(estaNoIntervalo(numeroFalado)){
        respostaUser.innerHTML += `<div>valor inválido! O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if(numeroFalado == numeroSecreto){
        document.body.innerHTML = `<h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar_novamente" class="btn-jogar">Jogar novamente</button>`
    }else if(numeroFalado > numeroSecreto){
        respostaUser.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i></div>'
    }else if(numeroFalado == 'Game Over'){
        respostaUser.innerHTML += '<div>GAMER OVER!</div>'
    }
    else{
        respostaUser.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i></div>'
    }
}

function eUmNumero(numero){
    return Number.isNaN(numero)
}

function estaNoIntervalo(numero){
   return numero > maiorValor || numero< menorValor
}

document.body.addEventListener('click', (evento) => {
    if(evento.target.id === 'jogar_novamente'){
        window.location.reload()
    }
})
