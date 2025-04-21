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
  },
  {
    pregunta: "¿Qué principio busca evitar el daño al paciente?",
    opciones: ["Fidelidad", "No maleficencia", "Justicia", "Autonomía"],
    correcta: "No maleficencia"
  },
  {
    pregunta: "¿Cuál es el principio que garantiza que el paciente tome decisiones informadas?",
    opciones: ["Autonomía", "Fidelidad", "Justicia", "Veracidad"],
    correcta: "Autonomía"
  },
  {
    pregunta: "La obligación de mantener la confidencialidad se relaciona con:",
    opciones: ["Justicia", "Fidelidad", "Autonomía", "Beneficencia"],
    correcta: "Fidelidad"
  },
  {
    pregunta: "Actuar con honestidad y transparencia se relaciona con:",
    opciones: ["Veracidad", "Fidelidad", "Autonomía", "Equidad"],
    correcta: "Veracidad"
  },
  {
    pregunta: "La equidad en el acceso a los servicios de salud se vincula con:",
    opciones: ["Autonomía", "Justicia", "Fidelidad", "No maleficencia"],
    correcta: "Justicia"
  },
  {
    pregunta: "¿Qué valor se afecta si se le miente al paciente?",
    opciones: ["Veracidad", "Fidelidad", "Justicia", "Autonomía"],
    correcta: "Veracidad"
  },
  {
    pregunta: "¿Qué valor promueve el cumplimiento de las promesas hechas al paciente?",
    opciones: ["Fidelidad", "Justicia", "Autonomía", "No maleficencia"],
    correcta: "Fidelidad"
  },
  {
    pregunta: "Actuar de manera imparcial se relaciona con:",
    opciones: ["Justicia", "Autonomía", "Beneficencia", "Fidelidad"],
    correcta: "Justicia"
  },
  {
    pregunta: "¿Qué principio obliga a proporcionar la mejor atención posible?",
    opciones: ["Beneficencia", "Justicia", "Veracidad", "Autonomía"],
    correcta: "Beneficencia"
  },
  {
    pregunta: "El respeto por la cultura y creencias del paciente está relacionado con:",
    opciones: ["Autonomía", "Justicia", "Equidad", "Fidelidad"],
    correcta: "Autonomía"
  },
  {
    pregunta: "Ocultar información médica va en contra del principio de:",
    opciones: ["Veracidad", "Fidelidad", "Justicia", "Autonomía"],
    correcta: "Veracidad"
  },
  {
    pregunta: "Hacer daño intencional al paciente vulnera el principio de:",
    opciones: ["No maleficencia", "Justicia", "Autonomía", "Fidelidad"],
    correcta: "No maleficencia"
  },
  {
    pregunta: "Tomar decisiones éticas en situaciones complejas implica:",
    opciones: ["Juicio clínico", "Intuición", "Principios éticos", "Obediencia"],
    correcta: "Principios éticos"
  },
  {
    pregunta: "¿Qué principio implica informar al paciente sobre riesgos y beneficios?",
    opciones: ["Autonomía", "Beneficencia", "Justicia", "Fidelidad"],
    correcta: "Autonomía"
  },
  {
    pregunta: "¿Qué valor se promueve al escuchar las necesidades del paciente?",
    opciones: ["Respeto", "Justicia", "Veracidad", "No maleficencia"],
    correcta: "Respeto"
  },
  {
    pregunta: "¿Qué principio se vulnera si se ignoran los deseos de un paciente terminal?",
    opciones: ["Autonomía", "Justicia", "Fidelidad", "Beneficencia"],
    correcta: "Autonomía"
  },
  {
    pregunta: "¿Qué valor se refleja al actuar con compasión y cuidado?",
    opciones: ["Beneficencia", "Veracidad", "Justicia", "Equidad"],
    correcta: "Beneficencia"
  },
];

let indiceActual = 0;
const respuestasUsuario = [];

const preguntaElem = document.getElementById('pregunta');
const opcionesElem = document.getElementById('opciones');
const resultadoElem = document.getElementById('resultado');
const btnSiguiente = document.getElementById('siguiente');

// Crear botón "Anterior"
const btnAnterior = document.createElement('button');
btnAnterior.textContent = "Pregunta Anterior";
btnAnterior.id = "anterior";
btnAnterior.classList.add('oculto');
document.getElementById('trivia-container').appendChild(btnAnterior);

function mostrarPregunta() {
  const actual = preguntas[indiceActual];
  preguntaElem.textContent = `Pregunta ${indiceActual + 1}: ${actual.pregunta}`;
  opcionesElem.innerHTML = '';

  actual.opciones.forEach(opcion => {
    const btn = document.createElement('button');
    btn.textContent = opcion;
    btn.classList.add('opcion');
    btn.onclick = () => seleccionarRespuesta(opcion);
    if (respuestasUsuario[indiceActual] === opcion) {
      btn.style.backgroundColor = "#a55fde"; // Resaltar respuesta seleccionada
    }
    opcionesElem.appendChild(btn);
  });

  resultadoElem.textContent = '';
  btnSiguiente.classList.remove('oculto');
  btnAnterior.classList.toggle('oculto', indiceActual === 0);
}

function seleccionarRespuesta(respuesta) {
  respuestasUsuario[indiceActual] = respuesta;
  mostrarPregunta();
}

btnSiguiente.addEventListener('click', () => {
  if (indiceActual < preguntas.length - 1) {
    indiceActual++;
    mostrarPregunta();
  } else {
    mostrarResultados();
  }
});

btnAnterior.addEventListener('click', () => {
  if (indiceActual > 0) {
    indiceActual--;
    mostrarPregunta();
  }
});

function mostrarResultados() {
  let correctas = 0;
  let resultadoHTML = '<h2>Resultados de la Trivia</h2><ol>';
  preguntas.forEach((preg, i) => {
    const usuario = respuestasUsuario[i] || "Sin respuesta";
    const correcta = preg.correcta;
    const esCorrecta = usuario === correcta;
    if (esCorrecta) correctas++;

    resultadoHTML += `
      <li>
        <strong>${preg.pregunta}</strong><br/>
        Tu respuesta: ${usuario}<br/>
        ${esCorrecta ? "<span style='color:green'>✔ Correcta</span>" :
        `<span style='color:red'>✘ Incorrecta</span> - Correcta: ${correcta}`}
      </li><br/>
    `;
  });
  resultadoHTML += `</ol><p><strong>Puntaje final:</strong> ${correctas} de ${preguntas.length}</p>`;
  resultadoHTML += `<button onclick="window.print()">Imprimir Resultados en PDF</button>`;

  document.getElementById('trivia-container').innerHTML = resultadoHTML;
}

document.addEventListener('DOMContentLoaded', mostrarPregunta);
