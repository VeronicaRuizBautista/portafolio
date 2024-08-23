// Agregar un evento para hacer que el texto parpadee
const neonText = document.querySelector('.neon-text');

setInterval(() => {
  neonText.classList.toggle('blink');
}, 500);

// Estilo para el efecto de parpadeo
.blink {
  opacity: 0.5;
}