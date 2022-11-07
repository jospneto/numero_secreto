window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

const respostaUser = document.getElementById('chute')

recognition.addEventListener('result', (evento) => {
    const valorReposta = evento.results[0][0].transcript
    respostaUser.innerHTML = `
        <div>Você disse</div>
        <span class="box">${valorReposta}</span>
    `
    verificaReposta(valorReposta)
})

recognition.addEventListener('end', () => recognition.start())

