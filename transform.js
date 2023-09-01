// Importamos los datos
const datos = [
  {
    id: 1,
    nombre: "Juan",
    habilidades: ["JavaScript", "HTML", "CSS"],
    proyectos: [
      { id: 1, nombre: "Proyecto 1" },
      { id: 2, nombre: "Proyecto 2" },
    ],
  },
  {
    id: 2,
    nombre: "María",
    habilidades: ["Python", "SQL", "Django"],
    proyectos: [
      { id: 3, nombre: "Proyecto 3" },
      { id: 4, nombre: "Proyecto 4" },
    ],
  },
  {
    id: 3,
    nombre: "Pedro",
    habilidades: ["Java", "Spring", "Hibernate"],
    proyectos: [
      { id: 5, nombre: "Proyecto 5" },
      { id: 6, nombre: "Proyecto 6" },
    ],
  },
];

// filtramos los desarrolladores que tienen la habilidad "Javascript" entre sus habilidades

const desarrolladoresJavascript = datos.filter((desarrollador) =>
  desarrollador.habilidades.includes("JavaScript")
);

// sacamos los nombres de todos los proyectos en los que trabajan los desarrolladores

const nombresProyectos = [];
datos.forEach((desarrollador) => {
  desarrollador.proyectos.forEach((proyecto) => {
    nombresProyectos.push(proyecto.nombre);
  });
});

// imprimimos resultados

console.log("Desarrolladores con habilidad Javascript:");
console.log(desarrolladoresJavascript);
console.log("Nombres de proyectos");
console.log(nombresProyectos);
