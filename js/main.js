window.addEventListener('scroll', () => {
  const div = document.querySelector('.herramientas');
  if (window.scrollY > 500) { // Ajusta el punto de desplazamiento
    div.classList.add('visible');
  } else {
    div.classList.remove('visible');
  }
});