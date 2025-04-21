document.addEventListener("DOMContentLoaded", () => {
  const tituloCaso = document.getElementById("titulo-caso");
  const descripcionCaso = document.getElementById("descripcion-caso");
  const opcionesDiv = document.getElementById("opciones");
  const siguienteBtn = document.getElementById("siguiente");
  const resultadoP = document.getElementById("resultado");

  const casos = [
    {
      titulo: "Caso 1: Decisión Inicial del Paciente",
      descripcion:
        "Un paciente adulto llega en estado crítico tras un accidente. La familia pide que se inicie un tratamiento, pero el paciente está inconsciente. ¿Qué decisión tomarías?",
      opciones: [
        {
          texto: "Administrar el tratamiento solicitado por la familia.",
          siguienteCaso: 1,
          resultado: "Tratamiento administrado sin consultar al paciente.",
        },
        {
          texto: "Retrasar el tratamiento para obtener el consentimiento del paciente.",
          siguienteCaso: 2,
          resultado: "El tratamiento se retrasa para respetar la autonomía del paciente.",
        },
        {
          texto: "Consultar a otro médico para obtener una segunda opinión.",
          siguienteCaso: 2,
          resultado: "Segunda opinión obtenida antes de proceder.",
        },
      ],
    },
    {
      titulo: "Caso 2: Procedimiento Quirúrgico",
      descripcion:
        "La familia insiste en un procedimiento quirúrgico urgente. El paciente empieza a mejorar, pero aún está inconsciente. ¿Qué decisión tomarías?",
      opciones: [
        {
          texto: "Proceder con la cirugía, respetando la solicitud de la familia.",
          siguienteCaso: 3,
          resultado: "Cirugía realizada según la solicitud familiar.",
        },
        {
          texto: "Esperar el consentimiento del paciente, aunque esto retrase la cirugía.",
          siguienteCaso: 4,
          resultado: "Se espera al paciente para obtener su consentimiento.",
        },
        {
          texto: "Explicar a la familia la importancia de seguir los protocolos éticos.",
          siguienteCaso: 4,
          resultado: "Se le explica a la familia sobre la autonomía del paciente.",
        },
      ],
    },
    {
      titulo: "Caso 3: Reacción del Paciente",
      descripcion:
        "El paciente despierta y expresa desacuerdo con los tratamientos administrados sin su consentimiento. ¿Cómo manejarías la situación?",
      opciones: [
        {
          texto: "Disculparse y garantizar que se respetará la autonomía del paciente en el futuro.",
          siguienteCaso: null,
          resultado: "Se le garantiza al paciente que sus decisiones serán respetadas.",
        },
        {
          texto: "Convencer al paciente de que el tratamiento fue necesario para salvar su vida.",
          siguienteCaso: null,
          resultado: "El paciente es convencido de que el tratamiento era necesario.",
        },
        {
          texto: "Respetar la voluntad del paciente, pero hablar con la familia sobre la importancia de la autonomía.",
          siguienteCaso: null,
          resultado: "Se respeta la voluntad del paciente y se orienta a la familia sobre la autonomía.",
        },
      ],
    },
  ];

  let casoActual = 0;

  function mostrarCaso() {
    const caso = casos[casoActual];
    tituloCaso.textContent = caso.titulo;
    descripcionCaso.textContent = caso.descripcion;

    opcionesDiv.innerHTML = "";
    caso.opciones.forEach((opcion, index) => {
      const botonOpcion = document.createElement("button");
      botonOpcion.classList.add("opcion");
      botonOpcion.textContent = opcion.texto;
      botonOpcion.addEventListener("click", () => manejarDecision(opcion));
      opcionesDiv.appendChild(botonOpcion);
    });

    siguienteBtn.classList.add("oculto");
    resultadoP.textContent = "";
  }

  function manejarDecision(opcion) {
    resultadoP.textContent = opcion.resultado;
    siguienteBtn.classList.remove("oculto");
    if (opcion.siguienteCaso === null) {
      siguienteBtn.textContent = "Fin del Caso";
    } else {
      siguienteBtn.textContent = "Siguiente Decisión";
      siguienteBtn.addEventListener("click", () => {
        casoActual = opcion.siguienteCaso;
        mostrarCaso();
      });
    }
  }

  mostrarCaso();
});
