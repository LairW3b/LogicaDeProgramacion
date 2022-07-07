export const error = (text, id) => {
  let text ="";
  let mostrar = document.querySelector(id);
  mostrar.className = 'error';
  mostrar.innerHTML = text;
  setTimeout(() => mostrar.className = 'ocultar', 2000)
  document.querySelector('#tres').value = '';
}

