window.addEventListener('scroll', () => {
  const div = document.querySelector('.herramientas');
  if (window.scrollY > 500) { // Ajusta el punto de desplazamiento
    div.classList.add('visible');
  } else {
    div.classList.remove('visible');
  }
});

window.addEventListener('scroll', () => {
  const proyectos = document.querySelectorAll('.proyecto');

  proyectos.forEach(proyecto => {
    if (window.scrollY > 1000) { // Ajusta el punto de desplazamiento
      proyecto.classList.add('visible');
    } else {
      proyecto.classList.remove('visible');
    }
  });
});

function botonMenu() {
  var menus = document.querySelectorAll('.menu');
  menus.forEach(function(menu) {
      menu.classList.toggle("visible");
  });
}
const circle = document.querySelector('.circle');
const events = document.querySelectorAll('.event');
const timelineHeight = document.querySelector('.timeline').clientHeight; // Obtener la altura de la línea de tiempo
const eventHeight = 200

let currentEvent = 1;

function animateCircle() {
  circle.style.top = currentEvent * eventHeight + 'px';
  events[currentEvent].style.opacity = 1;

  if (currentEvent < events.length - 1) {
    currentEvent++;
    setTimeout(animateCircle, 1000);
  } else {
    // Reiniciar la animación si es necesario
    currentEvent = 0;
    setTimeout(animateCircle, 1000);
  }
}

animateCircle();


document.addEventListener('DOMContentLoaded', function() {
  const textoElement = document.getElementById('text-presentacion');
  const texto = textoElement.textContent;
  textoElement.textContent = ''; // Limpiamos el contenido inicial
  let index = 0;

  function escribirTexto() {
      if (index < texto.length) {
          textoElement.textContent += texto.charAt(index);
          index++;
          setTimeout(escribirTexto, 50); // Velocidad de escritura (ajustable)
      }
  }

  escribirTexto();
});


document.addEventListener('DOMContentLoaded', function() {
  const textoElement = document.getElementById('vision-texto');
  const texto = textoElement.textContent;
  textoElement.textContent = ''; // Limpiamos el contenido inicial
  let index = 0;

  function escribirTexto() {
      if (index < texto.length) {
          textoElement.textContent += texto.charAt(index);
          index++;
          setTimeout(escribirTexto, 50); // Velocidad de escritura (ajustable)
      }
  }

  escribirTexto();
});

document.addEventListener('DOMContentLoaded', function() {
  const textoElement = document.getElementById('sobre-mi-texto');
  const texto = textoElement.textContent;
  textoElement.textContent = ''; // Limpiamos el contenido inicial
  let index = 0;

  function escribirTexto() {
      if (index < texto.length) {
          textoElement.textContent += texto.charAt(index);
          index++;
          setTimeout(escribirTexto, 50); // Velocidad de escritura (ajustable)
      }
  }

  escribirTexto();
});

