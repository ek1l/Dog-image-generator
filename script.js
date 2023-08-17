const botaoDeGerar = document.querySelector('#gerar')
const link = `https://api.thecatapi.com/v1/images/search?limit=1`
const divGerar = document.querySelector('#generator')

const clicouGerou = async () => {
    divGerar.innerHTML = ''
    const pegarResposta = await fetch(link)
    const [{ url }] = await pegarResposta.json()
    const criarImg = document.createElement('img')
    criarImg.src = url
    divGerar.appendChild(criarImg)
    console.log(url)

}

botaoDeGerar.addEventListener('click', clicouGerou)