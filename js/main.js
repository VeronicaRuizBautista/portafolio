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
  var menus = document.querySelectorAll('abrir"]');
  menus.forEach(function(menu) {
      menu.classList.toggle("visible");
  });
}

const circle = document.querySelector('.circle');
const events = document.querySelectorAll('.event');
const timelineHeight = document.querySelector('.timeline').clientHeight; // Obtener la altura de la línea de tiempo
const eventHeight = 150

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