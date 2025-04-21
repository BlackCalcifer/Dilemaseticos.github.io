const casos = [
  {
    titulo: "Caso 1: Consentimiento Informado",
    preguntas: [
      {
        texto: "¿Qué principio ético se vulnera si el paciente no recibe información suficiente antes de un procedimiento?",
        opciones: ["Beneficencia", "Autonomía", "Justicia", "No maleficencia"],
        correcta: 1
      },
      {
        texto: "¿Qué acción debe tomar el profesional si el paciente no comprende la información entregada?",
        opciones: [
          "Proceder con el tratamiento",
          "Consultar con otro colega",
          "Repetir la información de forma más clara",
          "Llamar a la familia"
        ],
        correcta: 2
      },
      {
        texto: "¿Quién es responsable de garantizar que el consentimiento informado sea realmente voluntario y comprendido?",
        opciones: [
          "El médico tratante",
          "El personal administrativo",
          "El profesional que realiza el procedimiento",
          "El acompañante del paciente"
        ],
        correcta: 2
      }
    ]
  },
  {
    titulo: "Caso 2: Objeción de Conciencia",
    preguntas: [
      {
        texto: "¿Qué es la objeción de conciencia en el contexto de enfermería?",
        opciones: [
          "Negarse a realizar cualquier procedimiento",
          "Evitar actividades administrativas",
          "Rehusarse a participar en un acto que va contra principios éticos o religiosos personales",
          "Faltar al trabajo por motivos personales"
        ],
        correcta: 2
      },
      {
        texto: "¿Qué debe hacer el profesional que objeta en conciencia frente a un procedimiento legal solicitado por el paciente?",
        opciones: [
          "Retirarse sin explicar motivos",
          "Informar a su equipo y garantizar la continuidad del servicio",
          "Negarse a ayudar y no referir el caso",
          "Solicitar vacaciones"
        ],
        correcta: 1
      },
      {
        texto: "¿Cuál de las siguientes situaciones **no justifica** la objeción de conciencia?",
        opciones: [
          "Aborto legal en caso de violación",
          "Eutanasia autorizada por ley",
          "Conflicto con creencias religiosas del profesional",
          "Cansancio físico del turno anterior"
        ],
        correcta: 3
      }
    ]
  },
  {
    titulo: "Caso 3: Secreto Profesional",
    preguntas: [
      {
        texto: "¿Qué principio se relaciona directamente con el respeto al secreto profesional?",
        opciones: ["Beneficencia", "Justicia", "Autonomía", "Confidencialidad"],
        correcta: 3
      },
      {
        texto: "¿En qué caso puede romperse el secreto profesional?",
        opciones: [
          "Cuando el paciente es menor de edad",
          "Cuando se trata de proteger la vida del paciente u otros",
          "Cuando un familiar lo solicita",
          "Cuando se sospecha de una infidelidad"
        ],
        correcta: 1
      },
      {
        texto: "¿Qué debe hacer una enfermera si un paciente con VIH pide mantener en secreto su diagnóstico?",
        opciones: [
          "Informar al cónyuge de inmediato",
          "Anotar solo en la historia clínica física",
          "Mantener la confidencialidad, a menos que haya riesgo a terceros",
          "Contarle al equipo sin autorización del paciente"
        ],
        correcta: 2
      },
      {
        texto: "¿Qué acción vulnera el secreto profesional?",
        opciones: [
          "Registrar datos clínicos en la historia",
          "Compartir información solo con el equipo tratante",
          "Comentar el caso en pasillos sin nombres",
          "Guardar la historia clínica en lugar seguro"
        ],
        correcta: 2
      }
    ]
  },
  {
    titulo: "Caso 4: Atención a población vulnerable",
    preguntas: [
      {
        texto: "¿Qué principio debe guiar la atención a personas en situación de calle?",
        opciones: ["Beneficencia", "Dignidad humana", "Justicia distributiva", "Todos los anteriores"],
        correcta: 3
      },
      {
        texto: "¿Qué acción es discriminatoria en el contexto de atención en salud?",
        opciones: [
          "Evitar contacto físico innecesario",
          "Brindar información adecuada",
          "Negarse a atender por la apariencia del paciente",
          "Remitir a servicios sociales"
        ],
        correcta: 2
      },
      {
        texto: "¿Cómo debe actuar una enfermera ante un migrante sin documentación legal?",
        opciones: [
          "Negarse a atender por falta de papeles",
          "Atender garantizando el derecho a la salud",
          "Llamar a Migración Colombia",
          "Solicitarle dinero por fuera del sistema"
        ],
        correcta: 1
      }
    ]
  },
  {
    titulo: "Caso 5: Decisiones al final de la vida",
    preguntas: [
      {
        texto: "¿Qué implica el respeto a la autonomía al final de la vida?",
        opciones: [
          "Seguir siempre la opinión de la familia",
          "Ofrecer todos los tratamientos disponibles sin importar la voluntad",
          "Respetar decisiones del paciente, incluso si rechaza tratamiento",
          "Actuar según las creencias del profesional"
        ],
        correcta: 2
      },
      {
        texto: "¿Qué es un documento de voluntad anticipada?",
        opciones: [
          "Una carta informal del paciente",
          "Un documento legal que expresa decisiones sobre tratamientos en caso de incapacidad",
          "Una orden médica urgente",
          "Una opinión de un familiar"
        ],
        correcta: 1
      },
      {
        texto: "¿Qué debe hacer el personal si un paciente terminal pide suspender medidas invasivas?",
        opciones: [
          "Ignorar la solicitud y continuar",
          "Convencerlo de seguir luchando",
          "Revisar su capacidad de decisión y respetar su voluntad si está lúcido",
          "Llamar al comité de bioética inmediatamente"
        ],
        correcta: 2
      },
      {
        texto: "¿Qué principios entran en conflicto al prolongar la vida sin calidad?",
        opciones: [
          "Beneficencia vs. autonomía",
          "Justicia vs. confidencialidad",
          "Veracidad vs. legalidad",
          "Respeto vs. beneficencia"
        ],
        correcta: 0
      },
      {
        texto: "¿Cuál es el rol de enfermería en decisiones al final de la vida?",
        opciones: [
          "Obedecer ciegamente a la familia",
          "Informar, acompañar y defender los derechos del paciente",
          "Sugerir sedación terminal siempre",
          "No involucrarse en decisiones éticas"
        ],
        correcta: 1
      }
    ]
  }
];

const contenedorCasos = document.getElementById("contenedor-casos");

casos.forEach((caso, index) => {
  const casoDiv = document.createElement("section");
  casoDiv.className = "caso";

  const titulo = document.createElement("h2");
  titulo.textContent = caso.titulo;
  casoDiv.appendChild(titulo);

  const preguntaDiv = document.createElement("div");
  preguntaDiv.className = "pregunta";
  casoDiv.appendChild(preguntaDiv);

  const botonesNavegacion = document.createElement("div");
  botonesNavegacion.className = "botones-navegacion";

  const btnAnterior = document.createElement("button");
  btnAnterior.textContent = "Anterior";
  btnAnterior.addEventListener("click", () => cambiarPregunta(index, -1));
  botonesNavegacion.appendChild(btnAnterior);

  const btnSiguiente = document.createElement("button");
  btnSiguiente.textContent = "Siguiente";
  btnSiguiente.addEventListener("click", () => cambiarPregunta(index, 1));
  botonesNavegacion.appendChild(btnSiguiente);

  casoDiv.appendChild(botonesNavegacion);

  const btnVerResultados = document.createElement("button");
  btnVerResultados.textContent = "Ver respuestas del caso";
  btnVerResultados.addEventListener("click", () => mostrarResultados(index));
  casoDiv.appendChild(btnVerResultados);

  const resultadosDiv = document.createElement("div");
  resultadosDiv.className = "resultados oculto";
  casoDiv.appendChild(resultadosDiv);

  contenedorCasos.appendChild(casoDiv);
});

let respuestasUsuario = casos.map(c => Array(c.preguntas.length).fill(null));
let indicesPregunta = casos.map(() => 0);

function renderPregunta(casoIndex) {
  const pregunta = casos[casoIndex].preguntas[indicesPregunta[casoIndex]];
  const contenedor = contenedorCasos.children[casoIndex].querySelector(".pregunta");
  contenedor.innerHTML = `<h3>Pregunta ${indicesPregunta[casoIndex]+1}:</h3><p>${pregunta.texto}</p>`;

  pregunta.opciones.forEach((opcion, i) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type='radio' name='pregunta${casoIndex}_${indicesPregunta[casoIndex]}' value='${i}' ${respuestasUsuario[casoIndex][indicesPregunta[casoIndex]] == i ? "checked" : ""}> ${opcion}`;
    label.addEventListener("change", () => {
      respuestasUsuario[casoIndex][indicesPregunta[casoIndex]] = i;
    });
    contenedor.appendChild(label);
  });
}

function cambiarPregunta(casoIndex, direccion) {
  const nuevoIndex = indicesPregunta[casoIndex] + direccion;
  if (nuevoIndex >= 0 && nuevoIndex < casos[casoIndex].preguntas.length) {
    indicesPregunta[casoIndex] = nuevoIndex;
    renderPregunta(casoIndex);
  }
}

function mostrarResultados(casoIndex) {
  const contenedor = contenedorCasos.children[casoIndex].querySelector(".resultados");
  contenedor.innerHTML = "<h3>Resultados:</h3>";

  casos[casoIndex].preguntas.forEach((pregunta, i) => {
    const respuestaUsuario = respuestasUsuario[casoIndex][i];
    const esCorrecta = respuestaUsuario === pregunta.respuestaCorrecta;

    const bloque = document.createElement("div");
    bloque.style.marginBottom = "1em";

    const enunciado = document.createElement("p");
    enunciado.innerHTML = `<strong>Pregunta ${i + 1}:</strong> ${pregunta.texto}`;
    bloque.appendChild(enunciado);

    const resultado = document.createElement("p");
    if (respuestaUsuario === null) {
      resultado.innerHTML = `❌ <strong>No respondió esta pregunta.</strong><br>Respuesta correcta: <em>${pregunta.opciones[pregunta.respuestaCorrecta]}</em>`;
    } else if (!esCorrecta) {
      resultado.innerHTML = `❌ <strong>Incorrecta.</strong><br>
        Tu respuesta: <em>${pregunta.opciones[respuestaUsuario]}</em><br>
        Respuesta correcta: <em>${pregunta.opciones[pregunta.respuestaCorrecta]}</em>`;
    } else {
      resultado.innerHTML = `✔️ <strong>Correcta.</strong>`;
    }

    bloque.appendChild(resultado);
    contenedor.appendChild(bloque);
  });

  const btnImprimir = document.createElement("button");
  btnImprimir.textContent = "Imprimir resultados";
  btnImprimir.addEventListener("click", () => imprimirResultados(casoIndex));
  contenedor.appendChild(btnImprimir);

  contenedor.classList.remove("oculto");
}

function imprimirResultados(casoIndex) {
  const resultadosHTML = contenedorCasos.children[casoIndex].querySelector(".resultados").innerHTML;
  const ventana = window.open("", "_blank");
  ventana.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Resultados</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 2em; }
        h3 { color: #004080; }
        p { margin-bottom: 0.5em; }
      </style>
    </head>
    <body>
      ${resultadosHTML}
    </body>
    </html>
  `);
  ventana.document.close();
  ventana.print();
}

casos.forEach((_, index) => renderPregunta(index));
