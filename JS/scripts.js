let url2 =
  "https://raw.githubusercontent.com/dariosci/MiPortafolio-web/refs/heads/main/JSON/estudios.json";

const mostrarDatos = (data) => {
  //console.log(data)
  let fecnac = new Date(`22/11/1982`);

  //Relleno con datos personales aleatorios
  document.getElementById("nombre").innerHTML = "Dario Scilipoti";
  document.getElementById("fecnac").innerHTML = fecnac.toLocaleDateString();
  document.getElementById("nac").innerHTML = "Argentina";
  document.getElementById("foto").src = "./Assets/perfil.jpg";
  document.getElementById("edad").innerHTML = "42 años";
  //document.getElementById('sexo').innerHTML = sexo(`${data.results[0].gender}`)
  //document.getElementById('direccion').innerHTML = `${data.results[0].location.street.name}` + " " +
  //    `${data.results[0].location.street.number}` + ", " + `${data.results[0].location.city}` + ", " +
  //    `${data.results[0].location.state}` + ", " + nacional(`${data.results[0].nat}`)
  document.getElementById("telefono").innerHTML = "2622-123456";
  document.getElementById("email").innerHTML = "dariosc@gmail.com";
};

//Trae datos de cursos de JSON (estudios.json) y toma 5 cursos al azar con su respectivo link
fetch(url2)
  .then((response) => response.json())
  .then((data2) => mostrarEstudios(data2))
  .catch((error) => console.log(error));

//Genero 5 numeros aleatorios para mostrar 5 cursos distintos
// var min = 0;
// var max = 12;
// var numerosEst = [];

// numerosEst = generar_5numeros(min, max, numerosEst)

const mostrarEstudios = (data2) => {
  //estudio 1
  //   for (let i = 0; i <= 12; i++) {
  //     document.getElementById("estudio"+(i+1)).innerHTML = `${data2[i].course_name}`; //nombre del estudio/curso
  //     document.getElementById("nivel"+(i+1)).innerHTML = dificultad(
  //       `${data2[i].course_instr}`
  //     ); //la funcion dificultad traduce el nivel al español
  //     document.getElementById("link"+(i+1)).href = comprobar_linkcurso(
  //       `${data2[i].course_link}`,
  //       1
  //     ); //la funcion comprobar_linkcurso verifica que el link no esté vacio, si lo está elimina el icono de acceso directo al curso
  //   }
};

document.addEventListener("DOMContentLoaded", function () {
  let url2 =
    "https://raw.githubusercontent.com/dariosci/MiPortafolio-web/refs/heads/main/JSON/estudios.json";

  const tbody = document.querySelector("#tabla-cursos tbody");
  fetch(url2)
    .then((response) => response.json())
    .then((data2) => {
      data2.forEach((curso) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>
            <strong>${curso.course_name}</strong><br>
            <span class="instituto-class">${curso.course_instr}</span>
          </td>
          <td>${curso.course_date}</td>
          <td>${curso.course_totalHoras}</td>
          <td>${curso.course_link? `<a href="${curso.course_link}" target="_blank" title="Ver curso">
            <i class="fa-solid fa-arrow-up-right-from-square link-icono"></i>
            </a>`: ""
            }
          </td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("Error al cargar el JSON:", error);
    });
});

//   document.getElementById("estudio1").innerHTML = `${data2[0].course_name}`; //nombre del estudio/curso
//   document.getElementById("nivel1").innerHTML = dificultad(
//     `${data2[0].course_instr}`
//   ); //la funcion dificultad traduce el nivel al español
//   document.getElementById("link1").href = comprobar_linkcurso(
//     `${data2[0].course_link}`,
//     1
//   ); //la funcion comprobar_linkcurso verifica que el link no esté vacio, si lo está elimina el icono de acceso directo al curso

//estudio 2
//   document.getElementById("estudio2").innerHTML = `${data2[1].course_name}`;
//   document.getElementById("nivel2").innerHTML = dificultad(
//     `${data2[1].course_level}`
//   );
//   document.getElementById("link2").href = comprobar_linkcurso(
//     `${data2[1].course_link}`,
//     2
//   );

//estudio 3
//   document.getElementById("estudio3").innerHTML = `${data2[2].course_name}`;
//   document.getElementById("nivel3").innerHTML = dificultad(
//     `${data2[2].course_level}`
//   );
//   document.getElementById("link3").href = comprobar_linkcurso(
//     `${data2[2].course_link}`,
//     3
//   );

//estudio 4
//   document.getElementById("estudio4").innerHTML = `${data2[3].course_name}`;
//   document.getElementById("nivel4").innerHTML = dificultad(
//     `${data2[3].course_level}`
//   );
//   document.getElementById("link4").href = comprobar_linkcurso(
//     `${data2[3].course_link}`,
//     4
//   );

//estudio 5
//   document.getElementById("estudio5").innerHTML = `${data2[4].course_name}`;
//   document.getElementById("nivel5").innerHTML = dificultad(
//     `${data2[4].course_level}`
//   );
//   document.getElementById("link5").href = comprobar_linkcurso(
//     `${data2[4].course_link}`,
//     5
//   );
// };

//Trae las skills del json (experiencias.json)..
fetch(url3)
  .then((response) => response.json())
  .then((data3) => llenar_barras(data3))
  .catch((error) => console.log(error));

//Genero 1 numero aleatorio para selecionar una experiencia y tomar sus 3 skills respectivos
var min2 = 0;
var max2 = 37785;

var y1 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);

//Genero 5 numeros aleatorios para mostrar 5 experiencias distintas
var min4 = 0;
var max4 = 37785;
var numerosExp = [];
numerosExp = generar_5numeros(min4, max4, numerosExp);

//Genero 5 numeros aleatorios para mostrar 5 fechas aletorias ordenadas de menor a mayor
var min3 = 2000;
var max3 = 2022;
var fechasExp = [];
fechasExp = generar_5numeros(min3, max3, fechasExp); //llamo a la funcion para generar la lista con los años
fechasExp.sort(); //ordeno la lista de menor a mayor

const llenar_barras = (data3) => {
  //Lleno Experiencias
  document.getElementById("fecha1").innerHTML = fechasExp[0];
  document.getElementById("puesto1").innerHTML = `${
    data3[numerosExp[0]].puesto
  }`;
  document.getElementById("fecha2").innerHTML = fechasExp[1];
  document.getElementById("puesto2").innerHTML = `${
    data3[numerosExp[1]].puesto
  }`;
  document.getElementById("fecha3").innerHTML = fechasExp[2];
  document.getElementById("puesto3").innerHTML = `${
    data3[numerosExp[2]].puesto
  }`;
  document.getElementById("fecha4").innerHTML = fechasExp[3];
  document.getElementById("puesto4").innerHTML = `${
    data3[numerosExp[3]].puesto
  }`;
  document.getElementById("fecha5").innerHTML = fechasExp[4];
  document.getElementById("puesto5").innerHTML = `${
    data3[numerosExp[4]].puesto
  }`;

  //Lleno las barras con las Skills
  //skill 1
  document
    .getElementById("skill2")
    .setAttribute("per", exp_porcen(`${data3[y1].valor2}`)); //porcentaje
  document
    .getElementById("skill2")
    .setAttribute("style", "max-width:" + exp_porcen(`${data3[y1].valor2}`)); //tamano de la barra
  document.getElementById("skill2-name").innerHTML = comprobar_skill(
    `${data3[y1].skill2}`,
    2
  ); //compruebo si está vacia la skill y elimino la barra si está vacia

  //skill 2
  document
    .getElementById("skill3")
    .setAttribute("per", exp_porcen(`${data3[y1].valor3}`));
  document
    .getElementById("skill3")
    .setAttribute("style", "max-width:" + exp_porcen(`${data3[y1].valor3}`));
  document.getElementById("skill3-name").innerHTML = comprobar_skill(
    `${data3[y1].skill3}`,
    3
  );

  //skill 3
  document
    .getElementById("skill4")
    .setAttribute("per", exp_porcen(`${data3[y1].valor4}`));
  document
    .getElementById("skill4")
    .setAttribute("style", "max-width:" + exp_porcen(`${data3[y1].valor4}`));
  document.getElementById("skill4-name").innerHTML = comprobar_skill(
    `${data3[y1].skill4}`,
    4
  );
};

function generar_5numeros(min, max, numeroslista) {
  //Funcion para generar 5 numeros aleatorios tomando el min y max requerido y devuelve una lista con los mismos
  var x1 = Math.floor(Math.random() * (max - min + 1) + min);
  var x2 = Math.floor(Math.random() * (max - min + 1) + min);
  var x3 = Math.floor(Math.random() * (max - min + 1) + min);
  var x4 = Math.floor(Math.random() * (max - min + 1) + min);
  var x5 = Math.floor(Math.random() * (max - min + 1) + min);
  numeroslista = [x1, x2, x3, x4, x5];

  return numeroslista;
}

function sexo(sex) {
  //traducion del sexo al expañol
  if (sex == "female") sex = "Mujer";
  else sex = "Hombre";
  return sex;
}

function nacional(sigla) {
  //traducion de la nacionalidad
  let pais = "";
  let final = paises.length;

  for (var i = 0; i < final; i++) {
    if (paises[i][0] == sigla) {
      pais = paises[i][1];
      i = final;
    } else {
      pais = "N/D";
    }
  }
  return pais;
}

function dificultad(nivel) {
  //traduccion del nivel del curso
  if (nivel == "All Levels") nivel = "Todos";
  else if (nivel == "Beginner") nivel = "Principiante";
  else if (nivel == "Intermediate") nivel = "Intermedio";
  else if (nivel == "Expert") nivel = "Avanzado";
  return nivel;
}

function exp_porcen(valor) {
  //establecer el porcentaje de la barra segun el skill
  if (valor == 1) valor = "20%";
  else if (valor == 2) valor = "40%";
  else if (valor == 3) valor = "60%";
  else if (valor == 4) valor = "80%";
  else if (valor == 5) valor = "100%";
  return valor;
}

function comprobar_linkcurso(linkcurso, num) {
  //comprobat si el link del curso está vacio. si es verdadero elimina el acceso directo
  let linkid;
  linkid = "link-icono" + num;
  if (linkcurso == "") document.getElementById(linkid).remove();

  return linkcurso;
  //
}

function comprobar_skill(skillNombre, skillcomp) {
  //comprobat si el skiil está vacio. si es verdadero elimina skill
  let skillid;
  skillid = "skill" + skillcomp + "-main";
  if (skillNombre == "unknown") document.getElementById(skillid).remove();

  return skillNombre;
  //
}

function imprimirPagina() {
  //imprimir curriculum
  window.print();
}
