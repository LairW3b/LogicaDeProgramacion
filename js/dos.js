const numerosEnteros = () => {
  addEventListener("click", (e) => {
    e.preventDefault()
  })
  
  let num = document.querySelector('#dos').value
  let mostrar = document.querySelector('#resul_dos')
  let nd = 0
  let op1 = parseInt(num) / 10
  let op2 = parseInt(num) % 10

  while (parseInt(num) > 0) {
    num = num / 10
    nd++
  }

  if (nd !== 2) {
    mostrar.className = 'error'
    mostrar.innerHTML = "el número no es de dos DÍGITOS"
    setTimeout(() => mostrar.className = 'ocultar', 2000)
  }

  if (Math.trunc(op1) % 2 === 0
    &&
    Math.trunc(op2) % 2 === 0) {
      mostrar.className = 'resultado'
      mostrar.innerHTML = 'Los dígitos son pares'
  } else {
    mostrar.className = 'error'
    mostrar.innerHTML = 'Uno o ambos numeros son impar'
    setTimeout(()=> mostrar.className= 'ocultar', 2000)
  }

}
// numerosEnteros()