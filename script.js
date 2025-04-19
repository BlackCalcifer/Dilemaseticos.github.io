function mostrarCaso(idCaso) {
  const div = document.getElementById(idCaso);
  if (div) div.style.display = 'block';
}

function responderCaso(respuestaTexto, idRespuesta) {
  const respuestaDiv = document.getElementById(idRespuesta);
  if (respuestaDiv) {
    respuestaDiv.textContent = respuestaTexto;
  }
}

function cargarCasos() {
  const contenedor = document.getElementById("contenedor-casos");

  const casos = [
    {
      titulo: "Consentimiento Informado",
      descripcion: "Adolescente de 15 años rechaza que sus padres conozcan su estado de salud.",
      opciones: [
        {
          texto: "Notificar a los padres",
          respuesta: "Decides notificar a los padres del adolescente. Esto puede ser necesario si su vida está en riesgo, pero debe considerarse la confidencialidad del paciente."
        },
        {
          texto: "Respetar autonomía",
          respuesta: "Decides respetar la autonomía del adolescente. Esto es válido si tiene madurez suficiente y no hay riesgo vital."
        }
      ]
    },
    {
      titulo: "Administración de sangre y derivados",
      descripcion: "Testigo de Jehová se niega a la administración de sangre o algún derivado.",
      opciones: [
        {
          texto: "Administrar sangre o derivados",
          respuesta: "Decides administrar sangre o derivados a pesar de la negativa. Esto puede estar justificado si la vida del paciente está en riesgo y no hay otra alternativa."
        },
        {
          texto: "Respetar la decisión del paciente",
          respuesta: "Respetas la decisión del paciente de no recibir sangre. Este derecho está protegido por su libertad religiosa, aunque representa un desafío ético."
        }
      ]
    },
    {
      titulo: "Negativa a hospitalización",
      descripcion: "Un adulto mayor con demencia leve rechaza hospitalización tras una caída.",
      opciones: [
        {
          texto: "Hospitalizar contra su voluntad",
          respuesta: "Decides hospitalizarlo por seguridad, amparado en el principio de beneficencia."
        },
        {
          texto: "Respetar su decisión",
          respuesta: "Respetas su decisión y refuerzas medidas de seguridad en casa, considerando su capacidad de decisión parcial."
        },
        {
          texto: "Consultar a la familia",
          respuesta: "Buscas apoyo con la familia para una decisión conjunta respetando el deseo del paciente."
        }
      ]
    }
  ];

  contenedor.innerHTML = "";

  casos.forEach((caso, index) => {
    const idCaso = `caso${index + 1}`;
    const idRespuesta = `respuesta${index + 1}`;

    const seccion = document.createElement("section");
    seccion.innerHTML = `
      <h2>${caso.titulo}</h2>
      <button onclick="mostrarCaso('${idCaso}')">Ver Caso</button>
      <div id="${idCaso}" class="oculto">
        <p><strong>Caso:</strong> ${caso.descripcion}</p>
        <p><strong>¿Qué harías?</strong></p>
        <div id="opciones${index}"></div>
        <p id="${idRespuesta}"></p>
      </div>
    `;

    contenedor.appendChild(seccion);

    const opcionesDiv = seccion.querySelector(`#opciones${index}`);
    caso.opciones.forEach(opcion => {
      const boton = document.createElement("button");
      boton.textContent = opcion.texto;
      boton.onclick = () => responderCaso(opcion.respuesta, idRespuesta);
      opcionesDiv.appendChild(boton);
    });
  });
}

window.addEventListener("DOMContentLoaded", cargarCasos);
