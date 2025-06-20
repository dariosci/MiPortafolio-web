let url2 =
  "https://raw.githubusercontent.com/dariosci/MiPortafolio-web/refs/heads/main/JSON/estudios.json";

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
          <td>${
            curso.course_link
              ? `<a href="${curso.course_link}" target="_blank" title="Ver curso">
            <i class="fa-solid fa-arrow-up-right-from-square link-icono"></i>
            </a>`
              : ""
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
