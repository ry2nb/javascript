const alturaElemento = document.querySelector('#altura');
const pesoElemento = document.querySelector('#peso');
const imcElemento = document.querySelector('#imc'); 
const calc = document.querySelector('button');

calc.addEventListener('click', ()=>{
  const sexo = document.querySelector('input[name=sexo]:checked').value;
  const altura = alturaElemento.value;
  const peso = pesoElemento.value;
  const valorDoImc = valorImc(peso, altura, sexo)
  imc.value = valorDoImc;
  console.log(valorDoImc);
});

function valorImc(peso, altura, sexo) {
    const imc = peso / (altura * altura) 

    if( sexo ===  'masculino'){
        if( imc < 20.7 ){
          imcElemento.style.backgroundColor = 'OrangeRed';
          imcElemento.style.color = 'white';
          return 'Abaixo do peso';
          }else if( imc < 26.4 ){
          imcElemento.style.backgroundColor = 'blue';
          imcElemento.style.color = 'white';
            return 'Peso Normal';
        }else if( imc < 27.8 ){
          imcElemento.style.backgroundColor = 'red';
          imcElemento.style.color = 'white';
            return 'Marginalmente Acima do Peso';
        }else if( imc < 31.1 ){
          imcElemento.style.backgroundColor = 'brown';
          imcElemento.style.color = 'white';
            return 'Acima do Peso Ideal';
        }else {
          imcElemento.style.backgroundColor = 'darkred';
          imcElemento.style.color = 'white';
            return 'Obeso';
        }        
    }else {
        if( imc < 19.1 ){
          imcElemento.style.backgroundColor = 'OrangeRed';
          imcElemento.style.color = 'white';
            return 'Abaixo do peso';
        }else if( imc < 25.8 ){
          imcElemento.style.backgroundColor = 'blue';
          imcElemento.style.color = 'white';
            return 'Peso Normal';
        }else if( imc < 27.3 ){
          imcElemento.style.backgroundColor = 'red';
          imcElemento.style.color = 'white';
            return 'Marginalmente Acima do Peso';
        }else if( imc < 32.3 ){
          imcElemento.style.backgroundColor = 'brown';
          imcElemento.style.color = 'white';
            return 'Acima do Peso Ideal';
        }else {
          imcElemento.style.backgroundColor = 'darkred';
          imcElemento.style.color = 'white';
            return 'Obeso';
        }
    }
}

