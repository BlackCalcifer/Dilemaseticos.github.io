const preguntas = [
  {
    pregunta: "¿Qué principio ético se basa en hacer el bien al paciente?",
    opciones: ["Autonomía", "Beneficencia", "Justicia", "No maleficencia"],
    correcta: "Beneficencia"
  },
  {
    pregunta: "¿Qué valor se vulnera si no se respeta la decisión de un paciente competente?",
    opciones: ["Justicia", "Autonomía", "Beneficencia", "Respeto"],
    correcta: "Autonomía"
  },
  {
    pregunta: "Cuando se trata a todos los pacientes por igual, se aplica el principio de:",
    opciones: ["Equidad", "Justicia", "Lealtad", "Autonomía"],
    correcta: "Justicia"
  }
];

let indiceActual = 0;

const preguntaElem = document.getElementById('pregunta');
const opcionesElem = document.getElementById('opciones');
const resultadoElem = document.getElementById('resultado');
const btnSiguiente = document.getElementById('siguiente');

function mostrarPregunta() {
  const actual = preguntas[indiceActual];
  preguntaElem.textContent = actual.pregunta;
  opcionesElem.innerHTML = '';

  actual.opciones.forEach(opcion => {
    const btn = document.createElement('button');
    btn.textContent = opcion;
    btn.classList.add('opcion');
    btn.onclick = () => verificarRespuesta(opcion);
    opcionesElem.appendChild(btn);
  });

  resultadoElem.textContent = '';
  btnSiguiente.classList.add('oculto');
}

function verificarRespuesta(respuestaSeleccionada) {
  const correcta = preguntas[indiceActual].correcta;
  if (respuestaSeleccionada === correcta) {
    resultadoElem.textContent = '¡Correcto!';
    resultadoElem.style.color = 'green';
  } else {
    resultadoElem.textContent = `Incorrecto. La respuesta correcta es: ${correcta}`;
    resultadoElem.style.color = 'red';
  }
  btnSiguiente.classList.remove('oculto');
}

btnSiguiente.addEventListener('click', () => {
  indiceActual++;
  if (indiceActual < preguntas.length) {
    mostrarPregunta();
  } else {
    preguntaElem.textContent = '¡Has completado la trivia!';
    opcionesElem.innerHTML = '';
    resultadoElem.textContent = '';
    btnSiguiente.classList.add('oculto');
  }
});

document.addEventListener('DOMContentLoaded', mostrarPregunta);
