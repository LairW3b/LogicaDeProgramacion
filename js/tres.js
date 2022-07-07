//import { error }  from '../helpers';

function primoMenorA20() {
  addEventListener("click", (e) => {
    e.preventDefault()
  })

  let valor = document.querySelector('#tres').value;
  let num;
  num = parseInt(valor);

  if (num < 20) {
    if (numeroPrimo(num)) {
      acierto(`El número ${num} es primo`);
    } else {
      error('El número no es primo', '#resul_tres');
    }
  } else {
    error('El número no es menor que 20')
  }

}

const numeroPrimo = (num) => {
  if (num === 0 || num === 1 || num === 4) return false;
  for (let x = 2; x < num / 2; x++) {
    if (num % x === 0) return false;
  }
  return true;
}

const error = (text, id) => {
  let mostrar = document.querySelector(id);
  mostrar.className = 'error';
  mostrar.innerHTML = text;
  setTimeout(() => mostrar.className = 'ocultar', 2000);
  document.querySelector('#tres').value = '';
}

const acierto = (text) => {
  let mostrar = document.querySelector('#resul_tres');
  mostrar.className = 'resultado';
  mostrar.innerHTML = text;
  setTimeout(() => mostrar.className = 'ocultar', 2000);
  document.querySelector('#tres').value = '';
}