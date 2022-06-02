const resultado = document.querySelector('#resultado');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');

const calIMC = () => {
  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    let classification = '';

    if (imc < 18.5) {
      classification = 'Magro';
    } else if (imc < 25) {
      classification = 'Peso Ideal';
    } else if (imc < 30) {
      classification = 'Seu Peso está acima da média';
    } else if (imc < 35) {
      classification = 'Grau de Obesidade I';
    } else if (imc < 40) {
      classification = 'Grau de Obesidade II';
    } else {
      classification = 'Grau de Obesidade III';
    }

    resultado.innerHTML = `IMC: ${imc} (${classification})`;
  } else {
    resultado.innerHTML = 'Preencha os campos';
  }
};
