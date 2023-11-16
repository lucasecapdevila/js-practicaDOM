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

const verMas = () => {
  console.log('Desde la función ver más');
  //  OPCIÓN 1
  //  Crear un párrafo nuevo
  const parrafoNuevo = document.createElement('p')
  console.log(parrafoNuevo);
  parrafoNuevo.innerText = 'También puedes añadir oyentes de eventos para responder a interacciones del usuario, como clics o pulsaciones de teclas. Es crucial tener en cuenta el rendimiento al manipular el DOM, ya que operaciones frecuentes pueden impactar en el rendimiento de la página. En resumen, el DOM proporciona una interfaz poderosa para manipular la estructura y el contenido de una página web, lo que permite crear interacciones dinámicas y experiencias personalizadas para los usuarios.'
  console.log(parrafoNuevo);
  
  //  Agragar el párrafo en el HTML
}

const btnVerMas = document.getElementById('btn-ver-mas')

//  Agregar un manejador de eventos
btnVerMas.addEventListener('click', verMas)