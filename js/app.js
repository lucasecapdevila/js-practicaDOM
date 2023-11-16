const cambiarTitulo = () => {
  //  Obtener el h1. Podemos usar diferentes maneras:

  // const h1 = document.getElementsById('id')
  // const h1 = document.getElementsByClassName('class')
  // const h1 = document.querySelector('#id')
  // const h1 = document.querySelectorAll('#id')
  // const h1 = document.querySelector('.class')
  // const h1 = document.querySelectorAll('.class')
  // const h1 = document.getElementsByTagName('h1')
  const h1 = document.querySelector('h1')
  console.log(h1);

  //  Modifico el título
  h1.innerText = 'Nuevo título'
  h1.className = 'display-1 text-warning'
}