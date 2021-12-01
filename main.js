let InputValue = document.querySelector('#ValorReal')
const BtnConvert = document.querySelector('#Btn')
const BtnClean = document.querySelector('.delete')
let resultado = document.querySelector('.resultado')
let html = document.querySelector('h2.title')
let options = document.querySelectorAll('.menuitem')

let OptEuro = document.querySelector('li.euro')
let OptDolar = document.querySelector('li.dolar')
let OptBRL = document.querySelector('li.brl')
let OptLibra = document.querySelector('li.libra')

// conversao do dia 17/11/2021 as 00:10
let BTC_BRL = 0
let BTC_Dolar = 0
let BTC_Libra = 0
let BTC_Euro = 0

const url = 'https://blockchain.info/ticker'

fetch(url)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    BTC_BRL = result.BRL.last
    BTC_Dolar = result.USD.last
    BTC_Euro = result.EUR.last
    BTC_Libra = result.GBP.last
  })

// function recupererPrix() {
//   let requete = new XMLHttpRequest()
//   requete.open('GET', url)

//   requete.responseType = 'json'
//   requete.send()

//   requete.onload = function () {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//       if (requete.status === 200) {
//         let reponse = requete.response
//         let prixEnREAL = reponse.BRL.last
//         let prixEnUSD = reponse.USD.last
//         let prixEnEUR = reponse.EUR.last
//         let prixEnGBP = reponse.GBP.last
//         BTC_BRL = parseInt(prixEnREAL)
//         BTC_Dolar = parseInt(prixEnUSD)
//         BTC_Libra = parseInt(prixEnGBP)
//         BTC_Euro = parseInt(prixEnEUR)
//       } else {
//         alert('Algo deu errado, por favor volte mais tarde')
//       }
//     }
//   }
//   console.log('Preço Atualizado')
// }

// setInterval(recupererPrix, 1000)

// nao e possivel adicionar eventlistener em uma lista de variaveis
for (const option of options) {
  option.addEventListener('click', verify)
}

// DEFINIR QUAL CALCULO FAZER ATRAVES DO HTML.INNERHTML NA FUNCAO CONVERT()
function verify(e) {
  let modal = document.querySelector('.content')
  modal.classList.add('visible')
  switch (e.target.innerHTML) {
    case 'REAL':
      OptBRL.classList.add('active')
      OptLibra.classList.remove('active')
      OptDolar.classList.remove('active')
      OptEuro.classList.remove('active')
      html.innerHTML = 'CONVERSOR BRL'
      InputValue.placeholder = 'Valor Em Reais'
      BtnConvert.style.borderColor = '#2ecc71'
      clean()
      break
    case 'EURO':
      OptEuro.classList.add('active')
      OptLibra.classList.remove('active')
      OptDolar.classList.remove('active')
      OptBRL.classList.remove('active')
      html.innerHTML = 'CONVERSOR EUR'
      InputValue.placeholder = 'Valor Em Euro'
      BtnConvert.style.borderColor = 'rgb(35, 35, 189)'
      clean()
      break
    case 'DOLAR':
      OptDolar.classList.add('active')
      OptLibra.classList.remove('active')
      OptEuro.classList.remove('active')
      OptBRL.classList.remove('active')
      html.innerHTML = 'CONVERSOR USD'
      InputValue.placeholder = 'Valor Em Dolar'
      BtnConvert.style.borderColor = 'rgb(196, 31, 31)'
      clean()
      break
    case 'LIBRA':
      OptLibra.classList.add('active')
      OptEuro.classList.remove('active')
      OptDolar.classList.remove('active')
      OptBRL.classList.remove('active')
      html.innerHTML = 'CONVERSOR GBP'
      InputValue.placeholder = 'Valor Em Libra'
      BtnConvert.style.borderColor = 'cyan'

      clean()
      break
  }
}

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    convert()
  }
})

BtnConvert.addEventListener('click', convert)
BtnClean.addEventListener('click', clean)

function convert() {
  let result = 0
  switch (html.innerHTML) {
    case 'CONVERSOR BRL':
      result = InputValue.value / BTC_BRL
      // alert(parseFloat(result).toFixed(5))
      resultado.innerHTML = `<h2>O Resultado é : ${parseFloat(result).toFixed(
        5
      )} BTC </h2>`
      resultado.style.color = 'white'
      break
    case 'CONVERSOR EUR':
      result = InputValue.value / BTC_Euro
      resultado.innerHTML = `<h2>O Resultado é : ${parseFloat(result).toFixed(
        4
      )} BTC </h2>`
      break
    case 'CONVERSOR USD':
      result = InputValue.value / BTC_Dolar
      resultado.innerHTML = `<h2>O Resultado é : ${parseFloat(result).toFixed(
        4
      )} BTC </h2>`
      break
    case 'CONVERSOR GBP':
      result = InputValue.value / BTC_Libra
      resultado.innerHTML = `<h2>O Resultado é : ${parseFloat(result).toFixed(
        4
      )} BTC </h2>`
      break
  }

  if (InputValue.value == '') {
    resultado.innerHTML = '<h2> Insira algum valor! </h2>'
  }

  if (InputValue.value == isNaN) {
    resultado.innerHTML = '<h2> Insira um valor numerico! </h2>'
  }
}

function clean() {
  InputValue.value = ''
  resultado.innerHTML = ''
}

// REGRAS DE NEGOCIO

// right button block
document.addEventListener('contextmenu', event => event.preventDefault())

// CTRL BUTTON BLOCK
// window.onkeydown = function (e) {
//   let key = e.keyCode || e.charCode || e.which
//   if (key == 17) {
//     alert('Tecla Invalida.')
//   }
// }

InputValue.addEventListener('keypress', function (evt) {
  switch (evt.key) {
    case 'e':
      evt.preventDefault()
      alert('Tecla Invalida')
      break
    case 'E':
      evt.preventDefault()
      alert('Tecla Invalida')
      break

    case '-':
      evt.preventDefault()
      alert('Tecla Invalida')
      break

    case '+':
      evt.preventDefault()
      alert('Tecla Invalida')
      break

    case '*':
      evt.preventDefault()
      alert('Tecla Invalida')
      break

    case '/':
      evt.preventDefault()
      alert('Tecla Invalida')
      break
  }
})
