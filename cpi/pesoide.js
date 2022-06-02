const resultado = document.querySelector('#resultado')
const imc = document.querySelector('#imc')
const altura = document.querySelector('#altura')

const calcPI = () => {

  if (imc.value !== '' && altura.value !== '') {
    const pi = (imc.value * (altura.value * altura.value)).toFixed(2)

    resultado.innerHTML = `Peso Ideal: ${pi}`

  } 
  else {
    resultado.innerHTML = 'Preencha os campos'
  }
}
