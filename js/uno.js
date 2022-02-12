//Recisar apuntes para addEvent
let btn = document.querySelector('#btn_submit').addEventListener("click", (e) => {

    e.preventDefault()
  })

const validar = () => {
  
  let mostrar = document.querySelector('#resul')
  let valor = document.querySelector('#num').value
  const img = document.querySelector('#img_code')
  let numero_digitos = 0

  num = parseInt(valor)

  while (num > 0) {
    num = parseInt(num / 10)
    numero_digitos++
  }

  if (parseInt(num) < 0) {
    mostrar.className = 'error'
    mostrar.innerHTML = "el número debe ser positivo"
    mostrar.className='noImg'
    setTimeout(()=>mostrar.className = 'ocultar',2000)
  } else if (numero_digitos !== 2) {
      mostrar.className = 'error'
      mostrar.innerHTML = "el número no es de dos DÍGITOS"
      img.className = 'noImg'
      setTimeout(()=>mostrar.className = 'ocultar', 2000)
  } else {
    sumaDigitos()
  }
}

const sumaDigitos = () => {
  let mostrar = document.querySelector('#resul')
  let num = document.querySelector('#num').value
  const img = document.querySelector('#img_code')

  let ope1 = parseInt(num / 10)
  let ope2 = parseInt(num % 10)
  let resul = ope1 + ope2

  mostrar.className = 'resultado'
  mostrar.innerHTML = `La suma de sus dígitos es: ${resul}`
  img.className = 'show_img'
}
// validar()

//preventDefault
//Mostrar
//validar
//Operar
