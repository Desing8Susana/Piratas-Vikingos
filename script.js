const alumnos = ['Mateo', 'Isabel', 'Leo', 'Lucas', 'Jordan', 'Ainhoa', 'Jorge', 'Vega'];
const vistas = document.querySelectorAll('.view');
const listaAlumnos = document.getElementById('student-list');

const agendaPlantilla = {
  'Lunes': [{ pictograma: 36473, texto: 'Llegar al cole' }, { pictograma: 26636, texto: 'Aprender' }, { pictograma: 28205, texto: 'Almorzar' }, { pictograma: 6964, texto: 'Volver a casa' }],
  'Martes': [{ pictograma: 36473, texto: 'Llegar al cole' }, { pictograma: 6595, texto: 'Actividad creativa' }, { pictograma: 28205, texto: 'Almorzar' }, { pictograma: 6964, texto: 'Volver a casa' }],
  'Miércoles': [{ pictograma: 36473, texto: 'Llegar al cole' }, { pictograma: 6624, texto: 'Trabajar juntos' }, { pictograma: 28205, texto: 'Almorzar' }, { pictograma: 6964, texto: 'Volver a casa' }],
  'Jueves': [{ pictograma: 36473, texto: 'Llegar al cole' }, { pictograma: 7141, texto: 'Leer un cuento' }, { pictograma: 28205, texto: 'Almorzar' }, { pictograma: 6964, texto: 'Volver a casa' }],
  'Viernes': [{ pictograma: 36473, texto: 'Llegar al cole' }, { pictograma: 24791, texto: 'Música' }, { pictograma: 28205, texto: 'Almorzar' }, { pictograma: 6964, texto: 'Volver a casa' }],
  'Sábado': [{ pictograma: 7012, texto: 'Desayunar' }, { pictograma: 6537, texto: 'Jugar' }, { pictograma: 6456, texto: 'Comer juntos' }, { pictograma: 16643, texto: 'Descansar' }],
  'Domingo': [{ pictograma: 7012, texto: 'Desayunar' }, { pictograma: 2392, texto: 'Estar en familia' }, { pictograma: 6456, texto: 'Comer juntos' }, { pictograma: 16643, texto: 'Descansar' }]
};

const actividadesDisponibles = [
  { pictograma: 8989, texto: 'Levantarme' }, { pictograma: 2694, texto: 'Lavarse los dientes' },
  { pictograma: 6627, texto: 'Vestirse' }, { pictograma: 7012, texto: 'Desayunar' },
  { pictograma: 36473, texto: 'Ir al cole' }, { pictograma: 26636, texto: 'Aprender' },
  { pictograma: 6624, texto: 'Trabajar' }, { pictograma: 28205, texto: 'Almorzar' },
  { pictograma: 6456, texto: 'Comer' }, { pictograma: 6595, texto: 'Pintar' },
  { pictograma: 6537, texto: 'Jugar' }, { pictograma: 7010, texto: 'Hacer deporte' },
  { pictograma: 6964, texto: 'Volver a casa' }, { pictograma: 2370, texto: 'Ducharse' },
  { pictograma: 6970, texto: 'Cenar' }, { pictograma: 6479, texto: 'Dormir' }
];

const pictogramasPersonalizados = [
  { pictograma: 8008, texto: 'Actividad' }, { pictograma: 6595, texto: 'Pintar' },
  { pictograma: 7010, texto: 'Deporte' }, { pictograma: 24791, texto: 'Música' },
  { pictograma: 7141, texto: 'Leer' }, { pictograma: 6537, texto: 'Jugar' }
];

const comunicadorFrecuentes = [
  { pictograma: 6456, texto: 'comer' }, { pictograma: 7012, texto: 'desayunar' },
  { pictograma: 36473, texto: 'ir al colegio' }, { pictograma: 6537, texto: 'jugar' },
  { pictograma: 7141, texto: 'leer' }, { pictograma: 6595, texto: 'pintar' },
  { pictograma: 16643, texto: 'descansar' }, { pictograma: 6479, texto: 'dormir' }
];

const categoriasComunicador = {
  Básicos: ['Quiero|quiero', 'Sí|sí', 'No|no', 'Más|más', 'Ayuda|ayuda', 'Terminé|terminar', 'Baño|baño', 'Descansar|descansar'],
  Acciones: ['Comer|comer', 'Beber|beber', 'Ir|ir', 'Venir|venir', 'Jugar|jugar', 'Leer|leer', 'Hablar|hablar', 'Esperar|esperar'],
  Comida: ['Agua|agua', 'Desayunar|desayunar', 'Comer|comer', 'Pan|pan', 'Fruta|fruta', 'Manzana|manzana', 'Plátano|plátano', 'Galleta|galleta'],
  Emociones: ['Contento|contento', 'Triste|triste', 'Enfadado|enfadado', 'Miedo|miedo', 'Cansado|cansado', 'Tranquilo|tranquilo', 'Nervioso|nervioso', 'Bien|bien'],
  Rutinas: ['Despertar|despertar', 'Vestirse|vestirse', 'Lavarse los dientes|lavarse los dientes', 'Desayunar|desayunar', 'Ir al colegio|colegio', 'Ducharse|ducharse', 'Cenar|cenar', 'Dormir|dormir'],
  Personas: ['Yo|yo', 'Tú|tú', 'Mamá|mamá', 'Papá|papá', 'Profe|profesor', 'Amigo|amigo', 'Familia|familia', 'Niño|niño'],
  Lugares: ['Casa|casa', 'Colegio|colegio', 'Baño|baño', 'Parque|parque', 'Patio|patio', 'Comedor|comedor', 'Habitación|habitación', 'Médico|médico'],
  Juegos: ['Jugar|jugar', 'Pintar|pintar', 'Música|música', 'Pelota|pelota', 'Cuento|cuento', 'Bailar|bailar', 'Deporte|deporte', 'Descansar|descansar']
};

const panelesComunicadorCargados = new Map();

const pictogramaPorTexto = Object.fromEntries([
  ...Object.values(agendaPlantilla).flat().map((actividad) => [actividad.texto, actividad.pictograma]),
  ...actividadesDisponibles.map((actividad) => [actividad.texto, actividad.pictograma])
]);

const colores = [
  { nombre: 'Rojo', valor: '#ef5350' },
  { nombre: 'Azul', valor: '#42a5f5' },
  { nombre: 'Verde', valor: '#66bb6a' },
  { nombre: 'Amarillo', valor: '#fdd835' },
  { nombre: 'Naranja', valor: '#ff9800' },
  { nombre: 'Morado', valor: '#ab47bc' },
  { nombre: 'Rosa', valor: '#ec407a' },
  { nombre: 'Marrón', valor: '#8d6e63' },
  { nombre: 'Negro', valor: '#263238' },
  { nombre: 'Blanco', valor: '#ffffff' }
];

let colorObjetivo;
let alumnoActual = '';
let agendaActual = {};
let diaAgendaSeleccionado = 'Lunes';
let pictogramaActividadPersonalizada = 8008;
let cartasAbiertas = [];
let parejasEncontradas = 0;
let memoriaBloqueada = false;
let rondaAnimales = 0;
let rondaNumeros = 0;
let avanzarBusquedaTimer;
let rondaColores = 0;
let avanzarColorTimer;
let coloresPendientes = [];
let contextoAudio;
let resultadosComunicador = [];
let cantidadResultadosComunicador = 24;

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
  alumnoActual = nombre;
  agendaActual = cargarAgendaAlumno(nombre);
  document.getElementById('student-panel-title').textContent = `¡Hola, ${nombre}!`;
  mostrarAgenda(diaAgendaSeleccionado);
  mostrarVista('panel-peque');
}

function cargarAgendaAlumno(nombre) {
  const clave = `agenda-visual-${nombre}`;
  try {
    const guardada = JSON.parse(localStorage.getItem(clave));
    if (guardada && typeof guardada === 'object') {
      return Object.fromEntries(Object.keys(agendaPlantilla).map((dia) => [
        dia,
        Array.isArray(guardada[dia]) ? guardada[dia].map(normalizarActividad) : agendaPlantilla[dia].map((actividad) => ({ ...actividad }))
      ]));
    }
  } catch (error) {
    console.warn('No se pudo leer la agenda guardada.', error);
  }
  return Object.fromEntries(Object.entries(agendaPlantilla).map(([dia, actividades]) => [
    dia,
    actividades.map((actividad) => ({ ...actividad }))
  ]));
}

function normalizarActividad(actividad) {
  if (Array.isArray(actividad)) {
    const texto = String(actividad[1] || 'Actividad');
    return { pictograma: pictogramaPorTexto[texto] || 8008, texto };
  }
  const texto = String(actividad?.texto || 'Actividad');
  return {
    pictograma: Number(actividad?.pictograma) || pictogramaPorTexto[texto] || 8008,
    texto
  };
}

function urlPictograma(id) {
  return `https://static.arasaac.org/pictograms/${id}/${id}_300.png`;
}

function guardarAgendaAlumno() {
  if (!alumnoActual) return;
  try {
    localStorage.setItem(`agenda-visual-${alumnoActual}`, JSON.stringify(agendaActual));
  } catch (error) {
    console.warn('No se pudo guardar la agenda en este navegador.', error);
  }
}

function hablar(frase) {
  const estado = document.getElementById('voice-status');
  if (estado) estado.textContent = frase;
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const voz = new SpeechSynthesisUtterance(frase);
  voz.lang = 'es-ES';
  voz.rate = 0.85;
  window.speechSynthesis.speak(voz);
}

function crearBotonComunicador(pictograma, texto) {
  const boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'communicator-card';
  boton.setAttribute('aria-label', `Decir: ${texto}`);
  const imagen = document.createElement('img');
  imagen.src = urlPictograma(pictograma);
  imagen.alt = '';
  imagen.loading = 'lazy';
  const etiqueta = document.createElement('strong');
  etiqueta.textContent = texto;
  boton.append(imagen, etiqueta);
  boton.addEventListener('click', () => hablar(texto));
  return boton;
}

function mostrarPictogramasComunicador(pictogramas) {
  const contenedor = document.getElementById('communicator-grid');
  contenedor.replaceChildren();
  const visibles = pictogramas.slice(0, cantidadResultadosComunicador);
  visibles.forEach((pictograma) => {
    const etiqueta = pictograma.keywords?.find((palabra) => palabra.type === 3)?.keyword
      || pictograma.keywords?.[0]?.keyword
      || 'Pictograma';
    contenedor.appendChild(crearBotonComunicador(pictograma._id, etiqueta));
  });
  document.getElementById('show-more-pictograms').classList.toggle('hidden', pictogramas.length <= visibles.length);
}

function iniciarPanelComunicador() {
  const esenciales = document.getElementById('communicator-core-grid');
  if (!esenciales.dataset.cargado) {
    comunicadorFrecuentes.forEach(({ pictograma, texto }) => {
      esenciales.appendChild(crearBotonComunicador(pictograma, texto));
    });
    esenciales.dataset.cargado = 'true';
  }

  const categorias = document.getElementById('communicator-categories');
  if (categorias.childElementCount) return;
  Object.keys(categoriasComunicador).forEach((categoria, indice) => {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'category-button';
    boton.textContent = categoria;
    boton.setAttribute('aria-pressed', indice === 0 ? 'true' : 'false');
    boton.addEventListener('click', () => {
      categorias.querySelectorAll('.category-button').forEach((otro) => otro.setAttribute('aria-pressed', String(otro === boton)));
      cargarPanelComunicador(categoria);
    });
    categorias.appendChild(boton);
  });
  cargarPanelComunicador(Object.keys(categoriasComunicador)[0]);
}

async function cargarPanelComunicador(categoria) {
  const contenedor = document.getElementById('communicator-board-grid');
  const estado = document.getElementById('communicator-board-status');
  contenedor.replaceChildren();
  if (panelesComunicadorCargados.has(categoria)) {
    panelesComunicadorCargados.get(categoria).forEach(({ pictograma, texto }) => {
      contenedor.appendChild(crearBotonComunicador(pictograma, texto));
    });
    estado.textContent = `${categoria}: ${panelesComunicadorCargados.get(categoria).length} pictogramas.`;
    return;
  }

  estado.textContent = `Cargando pictogramas de ${categoria}…`;
  const elementos = categoriasComunicador[categoria];
  try {
    const resultados = await Promise.all(elementos.map(async (elemento) => {
      const [texto, termino] = elemento.split('|');
      const respuesta = await fetch(`https://api.arasaac.org/v1/pictograms/es/bestsearch/${encodeURIComponent(termino)}`);
      if (!respuesta.ok) return null;
      const datos = await respuesta.json();
      const opciones = Array.isArray(datos) ? datos : (datos ? [datos] : []);
      const pictograma = opciones.find((item) => item?._id);
      return pictograma ? { pictograma: pictograma._id, texto } : null;
    }));
    const panel = resultados.filter(Boolean);
    panelesComunicadorCargados.set(categoria, panel);
    panel.forEach(({ pictograma, texto }) => contenedor.appendChild(crearBotonComunicador(pictograma, texto)));
    estado.textContent = panel.length
      ? `${categoria}: ${panel.length} pictogramas. Toca uno para escucharlo.`
      : 'No se han podido cargar los pictogramas. Comprueba la conexión e inténtalo otra vez.';
  } catch (error) {
    estado.textContent = 'No se pudo conectar con ARASAAC. Comprueba la conexión e inténtalo otra vez.';
    console.warn('Error cargando categoría de ARASAAC.', error);
  }
}

async function buscarPictogramas(termino) {
  const estado = document.getElementById('pictogram-search-status');
  const encabezado = document.getElementById('pictogram-results-heading');
  const palabra = termino.trim();
  if (!palabra) {
    resultadosComunicador = [];
    encabezado.textContent = 'Buscar en todo ARASAAC';
    estado.textContent = 'Escribe una palabra para encontrar más pictogramas.';
    document.getElementById('communicator-grid').replaceChildren();
    document.getElementById('show-more-pictograms').classList.add('hidden');
    return;
  }

  estado.textContent = 'Buscando pictogramas…';
  document.getElementById('communicator-grid').replaceChildren();
  document.getElementById('show-more-pictograms').classList.add('hidden');
  try {
    const url = `https://api.arasaac.org/v1/pictograms/es/search/${encodeURIComponent(palabra)}`;
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error('No se pudo completar la búsqueda');
    const datos = await respuesta.json();
    resultadosComunicador = Array.isArray(datos) ? datos.filter((item) => item && item._id) : [];
    cantidadResultadosComunicador = 24;
    encabezado.textContent = `Resultados para «${palabra}»`;
    estado.textContent = resultadosComunicador.length
      ? `${resultadosComunicador.length} pictogramas encontrados`
      : 'No he encontrado pictogramas con esa palabra.';
    mostrarPictogramasComunicador(resultadosComunicador);
  } catch (error) {
    encabezado.textContent = 'Pictogramas frecuentes';
    estado.textContent = 'No se pudo conectar con ARASAAC. Comprueba la conexión a internet e inténtalo otra vez.';
    console.warn('Error buscando pictogramas de ARASAAC.', error);
  }
}

function obtenerContextoAudio() {
  const AudioContextAPI = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextAPI) return null;
  contextoAudio ||= new AudioContextAPI();
  if (contextoAudio.state === 'suspended') contextoAudio.resume();
  return contextoAudio;
}

function reproducirPalmas() {
  const audio = obtenerContextoAudio();
  if (!audio) return;

  const ahora = audio.currentTime;
  for (let palma = 0; palma < 4; palma += 1) {
    const duracion = 0.12;
    const buffer = audio.createBuffer(1, Math.floor(audio.sampleRate * duracion), audio.sampleRate);
    const datos = buffer.getChannelData(0);
    for (let muestra = 0; muestra < datos.length; muestra += 1) {
      datos[muestra] = Math.random() * 2 - 1;
    }

    const fuente = audio.createBufferSource();
    const filtro = audio.createBiquadFilter();
    const volumen = audio.createGain();
    const inicio = ahora + palma * 0.19;
    fuente.buffer = buffer;
    filtro.type = 'bandpass';
    filtro.frequency.value = 1350 + Math.random() * 500;
    filtro.Q.value = 0.8;
    volumen.gain.setValueAtTime(0.001, inicio);
    volumen.gain.linearRampToValueAtTime(0.45, inicio + 0.008);
    volumen.gain.exponentialRampToValueAtTime(0.001, inicio + duracion);
    fuente.connect(filtro);
    filtro.connect(volumen);
    volumen.connect(audio.destination);
    fuente.start(inicio);
    fuente.stop(inicio + duracion);
  }
}

function reproducirError() {
  const audio = obtenerContextoAudio();
  if (!audio) return;
  const ahora = audio.currentTime;
  const tono = audio.createOscillator();
  const volumen = audio.createGain();
  tono.type = 'triangle';
  tono.frequency.setValueAtTime(300, ahora);
  tono.frequency.exponentialRampToValueAtTime(180, ahora + 0.28);
  volumen.gain.setValueAtTime(0.001, ahora);
  volumen.gain.linearRampToValueAtTime(0.12, ahora + 0.015);
  volumen.gain.exponentialRampToValueAtTime(0.001, ahora + 0.3);
  tono.connect(volumen);
  volumen.connect(audio.destination);
  tono.start(ahora);
  tono.stop(ahora + 0.31);
}

function crearAgenda() {
  const contenedor = document.getElementById('days-list');
  Object.keys(agendaPlantilla).forEach((dia) => {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'day-button';
    boton.textContent = dia;
    boton.dataset.day = dia;
    boton.setAttribute('aria-pressed', 'false');
    boton.addEventListener('click', () => mostrarAgenda(dia));
    contenedor.appendChild(boton);
  });
  crearSelectorActividades();
  crearSelectorPictogramasPersonalizados();
  mostrarAgenda('Lunes');
}

function mostrarAgenda(dia) {
  diaAgendaSeleccionado = dia;
  document.querySelectorAll('.day-button').forEach((boton) => {
    boton.setAttribute('aria-pressed', String(boton.dataset.day === dia));
  });
  const contenedor = document.getElementById('agenda-day');
  contenedor.replaceChildren();
  const titulo = document.createElement('h3');
  titulo.textContent = dia;
  contenedor.appendChild(titulo);

  const actividades = agendaActual[dia] || [];
  if (actividades.length === 0) {
    const vacio = document.createElement('p');
    vacio.className = 'agenda-empty';
    vacio.textContent = 'Todavía no hay actividades. ¡Puedes añadir una!';
    contenedor.appendChild(vacio);
    return;
  }

  const lista = document.createElement('ol');
  lista.className = 'agenda-list';
  actividades.forEach((actividad, indice) => {
    const fila = document.createElement('li');
    const pictograma = document.createElement('img');
    pictograma.className = 'agenda-pictogram';
    pictograma.setAttribute('aria-hidden', 'true');
    pictograma.src = urlPictograma(actividad.pictograma);
    pictograma.alt = '';
    pictograma.loading = 'lazy';
    const texto = document.createElement('span');
    texto.className = 'agenda-activity-text';
    texto.textContent = actividad.texto;
    const borrar = document.createElement('button');
    borrar.type = 'button';
    borrar.className = 'remove-activity';
    borrar.textContent = 'Quitar';
    borrar.setAttribute('aria-label', `Quitar ${actividad.texto}`);
    borrar.addEventListener('click', () => quitarActividad(indice));
    fila.append(pictograma, texto, borrar);
    lista.appendChild(fila);
  });
  contenedor.appendChild(lista);
}

function crearSelectorActividades() {
  const selector = document.getElementById('activity-picker');
  actividadesDisponibles.forEach((actividad) => {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'activity-pick';
    boton.setAttribute('aria-label', `Añadir ${actividad.texto}`);
    const simbolo = document.createElement('img');
    simbolo.src = urlPictograma(actividad.pictograma);
    simbolo.alt = '';
    simbolo.loading = 'lazy';
    const etiqueta = document.createElement('strong');
    etiqueta.textContent = actividad.texto;
    boton.append(simbolo, etiqueta);
    boton.addEventListener('click', () => agregarActividad(actividad.pictograma, actividad.texto));
    selector.appendChild(boton);
  });
}

function crearSelectorPictogramasPersonalizados() {
  const selector = document.querySelector('.pictogram-picker');
  pictogramasPersonalizados.forEach((actividad) => {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = `pictogram-choice${actividad.pictograma === pictogramaActividadPersonalizada ? ' is-selected' : ''}`;
    boton.dataset.customPictogram = actividad.pictograma;
    boton.setAttribute('aria-pressed', String(actividad.pictograma === pictogramaActividadPersonalizada));
    const imagen = document.createElement('img');
    imagen.src = urlPictograma(actividad.pictograma);
    imagen.alt = '';
    imagen.loading = 'lazy';
    const texto = document.createElement('span');
    texto.textContent = actividad.texto;
    boton.append(imagen, texto);
    boton.addEventListener('click', () => {
      pictogramaActividadPersonalizada = actividad.pictograma;
      selector.querySelectorAll('.pictogram-choice').forEach((opcion) => {
        const seleccionado = opcion === boton;
        opcion.classList.toggle('is-selected', seleccionado);
        opcion.setAttribute('aria-pressed', String(seleccionado));
      });
    });
    selector.appendChild(boton);
  });
}

function agregarActividad(pictograma, texto) {
  if (!agendaActual[diaAgendaSeleccionado]) agendaActual[diaAgendaSeleccionado] = [];
  agendaActual[diaAgendaSeleccionado].push({ pictograma, texto });
  guardarAgendaAlumno();
  mostrarAgenda(diaAgendaSeleccionado);
}

function quitarActividad(indice) {
  agendaActual[diaAgendaSeleccionado].splice(indice, 1);
  guardarAgendaAlumno();
  mostrarAgenda(diaAgendaSeleccionado);
}

function mostrarJuego(id) {
  document.getElementById('games-menu').classList.add('hidden');
  document.getElementById('color-game').classList.toggle('hidden', id !== 'colores');
  document.getElementById('memory-game').classList.toggle('hidden', id !== 'memoria');
  document.getElementById('search-game').classList.toggle('hidden', !['numeros', 'animales'].includes(id));
  if (id === 'colores') {
    rondaColores = 0;
    coloresPendientes = colores.slice().sort(() => Math.random() - 0.5);
    iniciarColores();
  }
  if (id === 'memoria') iniciarMemoria();
  if (id === 'numeros') {
    rondaNumeros = 0;
    iniciarBusqueda(id);
  }
  if (id === 'animales') {
    rondaAnimales = 0;
    iniciarBusqueda(id);
  }
}

function mostrarMenuJuegos() {
  window.clearTimeout(avanzarBusquedaTimer);
  window.clearTimeout(avanzarColorTimer);
  document.getElementById('games-menu').classList.remove('hidden');
  document.getElementById('color-game').classList.add('hidden');
  document.getElementById('memory-game').classList.add('hidden');
  document.getElementById('search-game').classList.add('hidden');
}

function iniciarBusqueda(tipo) {
  const esNumero = tipo === 'numeros';
  window.clearTimeout(avanzarBusquedaTimer);
  document.getElementById('animal-finished').classList.add('hidden');
  document.getElementById('search-prompt').classList.remove('hidden');
  document.getElementById('search-options').classList.remove('hidden');
  document.getElementById('search-result').classList.remove('hidden');
  const siguiente = document.querySelector('[data-action="new-search"]');
  siguiente.classList.add('hidden');

  const elementos = esNumero
    ? ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    : [
        { icono: '🐶', nombre: 'perro' },
        { icono: '🐱', nombre: 'gato' },
        { icono: '🐰', nombre: 'conejo' },
        { icono: '🐸', nombre: 'rana' },
        { icono: '🐢', nombre: 'tortuga' },
        { icono: '🐻', nombre: 'oso' },
        { icono: '🦁', nombre: 'león' },
        { icono: '🐮', nombre: 'vaca' },
        { icono: '🦆', nombre: 'pato' },
        { icono: '🐘', nombre: 'elefante' }
      ];
  const objetivo = elementos[Math.floor(Math.random() * elementos.length)];
  const nombreObjetivo = esNumero ? objetivo : objetivo.nombre;
  const instruccion = document.getElementById('search-prompt');
  if (esNumero) {
    instruccion.textContent = `Ronda ${rondaNumeros + 1} de 10: busca el número ${nombreObjetivo}`;
  } else {
    instruccion.innerHTML = `Ronda ${rondaAnimales + 1} de 10: busca el animal <span class="target-animal"><span aria-hidden="true">${objetivo.icono}</span> ${objetivo.nombre}</span>`;
  }
  document.getElementById('search-result').textContent = '';

  const opciones = elementos.slice().sort(() => Math.random() - 0.5);
  const contenedor = document.getElementById('search-options');
  contenedor.replaceChildren();

  opciones.forEach((elemento) => {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'search-option';
    const esCorrecto = elemento === objetivo;
    const etiqueta = esNumero ? elemento : elemento.nombre;
    boton.setAttribute('aria-label', etiqueta);
    boton.innerHTML = esNumero ? elemento : `${elemento.icono}<small>${elemento.nombre}</small>`;
    boton.addEventListener('click', () => {
      const resultado = document.getElementById('search-result');
      if (esCorrecto) {
        resultado.textContent = '¡Bien! 👏';
        hablar('¡Bien!');
        reproducirPalmas();
        contenedor.querySelectorAll('button').forEach((opcion) => { opcion.disabled = true; });
        const ronda = esNumero ? ++rondaNumeros : ++rondaAnimales;
        if (ronda === 10) {
          document.getElementById('search-prompt').classList.add('hidden');
          document.getElementById('search-options').classList.add('hidden');
          document.getElementById('search-result').classList.add('hidden');
          siguiente.classList.add('hidden');
          document.getElementById('finish-title').textContent = '¡Juego terminado!';
          document.getElementById('finish-message').textContent = esNumero
            ? 'Has encontrado los números del 1 al 10. ¡Buen trabajo!'
            : 'Has encontrado los 10 animales. ¡Buen trabajo!';
          document.getElementById('animal-finished').classList.remove('hidden');
          hablar(esNumero
            ? '¡Juego terminado! Has encontrado los números del uno al diez. ¡Buen trabajo!'
            : '¡Juego terminado! Has encontrado los diez animales. ¡Buen trabajo!');
        } else {
          avanzarBusquedaTimer = window.setTimeout(() => iniciarBusqueda(tipo), 900);
        }
      } else {
        resultado.textContent = 'Prueba otra vez.';
        hablar('Prueba otra vez');
        reproducirError();
      }
    });
    contenedor.appendChild(boton);
  });
}

function iniciarColores() {
  window.clearTimeout(avanzarColorTimer);
  document.getElementById('color-finished').classList.add('hidden');
  document.getElementById('color-prompt').classList.remove('hidden');
  document.getElementById('color-options').classList.remove('hidden');
  document.getElementById('color-result').classList.remove('hidden');
  document.getElementById('color-result').textContent = '';
  if (coloresPendientes.length === 0) {
    coloresPendientes = colores.slice().sort(() => Math.random() - 0.5);
  }
  colorObjetivo = coloresPendientes.shift();
  document.getElementById('color-prompt').innerHTML = `Ronda ${rondaColores + 1} de 10: busca este color <span class="color-target"><span class="color-target-swatch" style="--target-color:${colorObjetivo.valor}" aria-hidden="true"></span><strong>${colorObjetivo.nombre}</strong></span>`;
  const opciones = document.getElementById('color-options');
  opciones.replaceChildren();

  colores.forEach((color) => {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'color-button';
    boton.setAttribute('aria-label', color.nombre);
    boton.innerHTML = `<span class="color-choice-swatch" style="--choice-color:${color.valor}" aria-hidden="true"></span><strong>${color.nombre}</strong>`;
    boton.addEventListener('click', () => {
      if (color === colorObjetivo) {
        document.getElementById('color-result').textContent = '¡Bien! 👏';
        hablar('¡Bien!');
        reproducirPalmas();
        opciones.querySelectorAll('button').forEach((opcion) => { opcion.disabled = true; });
        rondaColores += 1;
        if (rondaColores === 10) {
          document.getElementById('color-prompt').classList.add('hidden');
          document.getElementById('color-options').classList.add('hidden');
          document.getElementById('color-result').classList.add('hidden');
          document.getElementById('color-finished').classList.remove('hidden');
          hablar('¡Juego terminado! Has encontrado los diez colores. ¡Buen trabajo!');
        } else {
          avanzarColorTimer = window.setTimeout(iniciarColores, 900);
        }
      } else {
        document.getElementById('color-result').textContent = 'Prueba otra vez.';
        hablar('Prueba otra vez');
        reproducirError();
      }
    });
    opciones.appendChild(boton);
  });
}

function iniciarMemoria() {
  const simbolos = ['🍎', '🍌', '🐸', '🌟', '🍎', '🍌', '🐸', '🌟'];
  simbolos.sort(() => Math.random() - 0.5);
  cartasAbiertas = [];
  parejasEncontradas = 0;
  memoriaBloqueada = false;
  document.getElementById('memory-result').textContent = '';
  document.getElementById('memory-progress').textContent = 'Parejas: 0 de 4';
  const tablero = document.getElementById('memory-grid');
  tablero.replaceChildren();

  simbolos.forEach((simbolo) => {
    const carta = document.createElement('button');
    carta.type = 'button';
    carta.className = 'memory-card';
    carta.dataset.symbol = simbolo;
    carta.setAttribute('aria-label', 'Carta oculta');
    carta.innerHTML = '<span class="memory-card-inner"><span class="memory-card-face memory-card-back" aria-hidden="true">★</span><span class="memory-card-face memory-card-front" aria-hidden="true"></span></span>';
    carta.querySelector('.memory-card-front').textContent = simbolo;
    carta.addEventListener('click', () => voltearCarta(carta));
    tablero.appendChild(carta);
  });
}

function voltearCarta(carta) {
  if (memoriaBloqueada || carta.classList.contains('is-open') || carta.classList.contains('is-paired')) return;
  document.getElementById('memory-result').textContent = '';
  carta.classList.add('is-open');
  carta.setAttribute('aria-label', `Carta ${carta.dataset.symbol}`);
  cartasAbiertas.push(carta);
  if (cartasAbiertas.length < 2) return;

  const [primera, segunda] = cartasAbiertas;
  if (primera.dataset.symbol === segunda.dataset.symbol) {
    primera.classList.add('is-paired');
    segunda.classList.add('is-paired');
    primera.classList.remove('is-open');
    segunda.classList.remove('is-open');
    cartasAbiertas = [];
    parejasEncontradas += 1;
    document.getElementById('memory-progress').textContent = `Parejas: ${parejasEncontradas} de 4`;
    if (parejasEncontradas === 4) {
      document.getElementById('memory-result').textContent = '¡Has encontrado todas las parejas! 🎉';
      hablar('¡Has encontrado todas las parejas!');
    } else {
      document.getElementById('memory-result').textContent = '¡Pareja!';
      hablar('¡Pareja!');
    }
    return;
  }

  memoriaBloqueada = true;
  document.getElementById('memory-result').textContent = 'Prueba otra vez.';
  hablar('Prueba otra vez');
  reproducirError();
  window.setTimeout(() => {
    [primera, segunda].forEach((abierta) => {
      abierta.classList.remove('is-open');
      abierta.setAttribute('aria-label', 'Carta oculta');
    });
    cartasAbiertas = [];
    memoriaBloqueada = false;
  }, 850);
}

document.addEventListener('click', (evento) => {
  const control = evento.target.closest('[data-action]');
  if (!control) return;

  switch (control.dataset.action) {
    case 'home': mostrarVista('inicio'); break;
    case 'students': mostrarVista('alumnos'); break;
    case 'teacher': mostrarVista('profe'); break;
    case 'classroom': mostrarVista('aula'); break;
    case 'student-home': mostrarVista('panel-peque'); break;
    case 'games-menu': mostrarMenuJuegos(); break;
    case 'start-colors': iniciarColores(); break;
    case 'start-memory': iniciarMemoria(); break;
    case 'toggle-add-activity': {
      const panel = document.getElementById('agenda-add-panel');
      const abierto = panel.classList.toggle('hidden') === false;
      control.setAttribute('aria-expanded', String(abierto));
      control.textContent = abierto ? 'Cerrar actividades' : '＋ Añadir actividad';
      break;
    }
    case 'new-search': {
      iniciarBusqueda('numeros');
      break;
    }
  }
});

document.querySelectorAll('[data-open]').forEach((boton) => {
  boton.addEventListener('click', () => {
    mostrarVista(boton.dataset.open);
    if (boton.dataset.open === 'comunicador') iniciarPanelComunicador();
  });
});

document.querySelectorAll('[data-game]').forEach((boton) => {
  boton.addEventListener('click', () => mostrarJuego(boton.dataset.game));
});

document.querySelectorAll('[data-say]').forEach((boton) => {
  boton.addEventListener('click', () => hablar(boton.dataset.say));
});

document.getElementById('custom-activity-form').addEventListener('submit', (evento) => {
  evento.preventDefault();
  const entrada = document.getElementById('custom-activity-input');
  const texto = entrada.value.trim();
  if (!texto) {
    entrada.focus();
    return;
  }
  agregarActividad(pictogramaActividadPersonalizada, texto);
  entrada.value = '';
  entrada.focus();
});

document.getElementById('pictogram-search-form').addEventListener('submit', (evento) => {
  evento.preventDefault();
  buscarPictogramas(document.getElementById('pictogram-search-input').value);
});

document.getElementById('show-more-pictograms').addEventListener('click', () => {
  cantidadResultadosComunicador += 24;
  mostrarPictogramasComunicador(resultadosComunicador);
});

crearListaAlumnos();
crearAgenda();
buscarPictogramas('');
