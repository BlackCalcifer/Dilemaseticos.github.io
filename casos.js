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
		"titulo": "Información sobre la interrupción del embarazo",
		"descripcion": "Durante una consulta del programa \"joven sano\" cuando el acompañante sale el adolescente de 15 años comenta que su novia de 14 años está en embarazo y él quiere que aborte",
		"opciones": [
		  {
			"texto": "Informarle al acompañante la situación",
			"respuesta": "Es importante informar a los padres y tener en cuenta su opinión sobre el paso a tomar sobre la IVE, cumpliendo así con el principio de beneficio buscando un bienestar para ambos."
		  },
		  {
			"texto": "Informar como solicitar una interrupción voluntaria del aborto (IVE)",
			"respuesta": "Brindaste una información correcta a la persona incorrecta porque no sabes si ella también desea interrumpir el embarazo."
		  },
		  {
			"texto": "Decirle al adolescente y al acompañante que la que decide el la adolescente en embarazo.",
			"respuesta": "Esta es una muy buena opción porque hay que respetar la autonomía de la persona que se encuentra en embarazo, sin embargo existe el riesgo de que al no encontrar un apoyo en el momento busquen un método alternativo que ponga en riesgo la vida de la adolescente en embarazo"
		  }
		]
	  },
	  {
		"titulo": "Denuncia de maltrato",
		"descripcion": "Durante una visita domiciliaria una enfermera encuentra signos de violencia en un adulto mayor, pero el solicita no intervenir.",
		"opciones": [
		  {
			"texto": "Activar ruta de violencia intrafamiliar",
			"respuesta": "Se priorizó la salud del individuo sobre su autonomía, es una buena decisión y se encuentra basada en el principio de la beneficencia."
		  },
		  {
			"texto": "Respetar autonomía",
			"respuesta": "Esta opción respeta la autonomía del paciente, sin embargo pone en riesgo su vida y la calidad de la misma por lo tanto no es una opción recomendada."
		  }
		]
	  },
	  {
		"titulo": "Negativa a administración de vacunas",
		"descripcion": "En una población indígena se niegan a recibir el programa ampliado de inmunización (PAI) por creencias religiosas.",
		"opciones": [
		  {
			"texto": "Dialogar con las autoridades de la población",
			"respuesta": "Decides llevar a acabo una serie de reuniones con los directivos explicando los beneficios de la vacunación, es una buena opción, sin embargo esto puede llevar mucho tiempo y aumentar el riesgo de brotes de una enfermedad; por lo tanto es importante tomar otra medida preventiva adicional respetando así la autonomía y buscando cumplir con la beneficencia "
		  },
		  {
			"texto": "adaptar estrategias con un enfoque intercultural",
			"respuesta": "Se relaciona con la respuesta anterior, debido a que es necesario implementar estrategias que ayuden a disminuir el riesgo de brotes y que se adapten al entorno de la población así como a sus costumbres en lo que se accede a voluntariamente a la vacunación."
		  }
		]
	  },
	  {
		"titulo": "Distribución de recursos",
		"descripcion": "En en servicio de hospitalización llega un paciente con influenza A estacional pero solo hay una camilla junto a un paciente con una infección respiratoria aguda por virus sincitial  .",
		"opciones": [
		  {
			"texto": "No hospitalizar al paciente",
			"respuesta": "Respuesta equivocada, porque cuentas con el recurso para poder realizar la hospitalización y brindar un tratamiento adecuado faltando a los principios justicia y beneficencia."
		  },
		  {
			"texto": "Hospitalizar al paciente",
			"respuesta": "Al hospitalizar el paciente hay que tener cuidado de que no se presente una infección cruzada entre los pacientes por tanto hay que procurar el uso de bar..."
		  }
		]
	  },
	  {
		"titulo": "Rechazo a tratamiento vital",
		"descripcion": "Un adulto mayor con DM tipo 2 presenta una infección grave que compromete toda su pierna derecha y se requiere amputación para salvar la vida del paciente, pero este se niega a realizarse el procedimiento.",
		"opciones": [
		  {
			"texto": "Evaluar la desición con la familia",
			"respuesta": "Decides notificar a los familiares sobre el deseo del paciente y explicas el motivo y la importancia del procedimiento cumpliendo con el principio de la beneficencia, sin embargo puedes estar faltando al principio de la autonomía si los familiares obligan al paciente a que le realicen el procedimiento"
		  },
		  {
			"texto": "Buscas alternativas de cuidados paliativos",
			"respuesta": "Es una muy buena opción ya que estás cumpliendo con el principio de la autonomía, la beneficios y la no maleficencia al cumplir los deseos del paciente buscando el bienestar emocional del paciente."
		  }
		]
	  },
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
