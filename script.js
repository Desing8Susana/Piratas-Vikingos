const alumnos = ['Mateo', 'Isabel', 'Leo', 'Lucas', 'Jordan', 'Ainhoa', 'Jorge', 'Vega'];
const vistas = document.querySelectorAll('.view');
const listaAlumnos = document.getElementById('student-list');

function mostrarVista(id) {
  vistas.forEach((vista) => vista.classList.toggle('hidden', vista.id !== id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function crearListaAlumnos() {
  const avatares = ['🦊', '🐼', '🦁', '🐸', '🐨', '🦋', '🐯', '🐻'];

  alumnos.forEach((nombre, indice) => {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'student-card';
    boton.innerHTML = `<span class="student-avatar" aria-hidden="true">${avatares[indice % avatares.length]}</span><span>${nombre}</span>`;
    boton.addEventListener('click', () => abrirPanelAlumno(nombre));
    listaAlumnos.appendChild(boton);
  });
}

function abrirPanelAlumno(nombre) {
  document.getElementById('student-panel-title').textContent = `¡Hola, ${nombre}!`;
  mostrarVista('panel-peque');
}

document.addEventListener('click', (evento) => {
  const control = evento.target.closest('[data-action]');
  if (!control) return;

  switch (control.dataset.action) {
    case 'home':
      mostrarVista('inicio');
      break;
    case 'students':
      mostrarVista('alumnos');
      break;
    case 'teacher':
      mostrarVista('profe');
      break;
    case 'classroom':
      mostrarVista('aula');
      break;
  }
});

document.querySelectorAll('[data-say]').forEach((boton) => {
  boton.addEventListener('click', () => {
    const frase = boton.dataset.say;
    const estado = document.getElementById('voice-status');
    estado.textContent = frase;

    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const voz = new SpeechSynthesisUtterance(frase);
    voz.lang = 'es-ES';
    voz.rate = 0.85;
    window.speechSynthesis.speak(voz);
  });
});

crearListaAlumnos();