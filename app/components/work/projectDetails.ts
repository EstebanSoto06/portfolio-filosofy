import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Jueves 25 de enero",
        description:
            "Presentación del curso, introducción al curso, realizamos un par de actividades en grupos, y se formaron las comunidades de trabajo.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/images/25deEnero.jpg",
        available: true,
    },
    {
        id: 1,
        name: "Jueves 1 de febrero",
        description:
            "Realizamos un trabajo dentro de las comunidades acerca de los partidos politicos para las elecciones municipales del pais. Y luego la profesora realizó una presentación con diapositivas.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/images/1deFebrero.jpg",
        available: true,
    },
    {
        id: 2,
        name: "Jueves 8 de febrero",
        description:
            "No asistí a clases.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 3,
        name: "Jueves 15 de febrero",
        description:
            "El día de hoy se realizó el primer día en las islas de polinizadores. La profe nos habló un poco del proyecto y realizamos limpieza de las islas.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/images/15deFebrero.jpg",
        available: true,
    },
    {
        id: 4,
        name: "Jueves 22 de febrero",
        description:
            "El grupo correspondiente realizó la exposición del tema 2, hablaron sobre temas relacionados con la Agenda 2030 y el cambio climático y sus evidencias.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/images/22deFebrero.png",
        available: true,
    },
    {
        id: 5,
        name: "Jueves 29 de febrero",
        description:
            "El día de hoy la comunidad que le correspondia el tema 3 realizó la exposición sobre los impactos del cambio climático (foto en subway como evidencia de haber ido a Ciudad Quesada a clases).",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/images/29deFebrero.jpeg",
        available: true,
    },
    {
        id: 6,
        name: "Jueves 7 de marzo",
        description:
            "Este día lo recuerdo muy bien porque fue el día que me lesioné luego de clases cuando fui a entrenar. En clases se realizó la exposición de la siguiente comunidad con el tema de la mitigación, realicé una pregunta a la comunidad la cual la profe me dijo que estaba demasiado fácil y que no valia.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 7,
        name: "Domingo 10 de marzo",
        description:
            "Hoy se realizó la 'gira'. Personalmente estuvo bonita la experiencia de salir de la rutina, y me gustó mucho la tarea que me asignaron de cortar 'palos', estuvo entretenida la actividad",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/images/10deMarzo.jpg",
        available: true,
    },
    {
        id: 8,
        name: "Jueves 14 de marzo",
        description:
            "El dia de hoy asistimos a una charla donde nos presentaron una 'película' muy bonita dónde nos contaban como las centrales hidroeléctricas de empresas privadas estaban afectando los ríos de algunas comunidades.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/images/14deMarzo.jpg",
        available: true,
    },
    {
        id: 9,
        name: "Jueves 21 de marzo",
        description:
            "No hubo clases.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 10,
        name: "Jueves 28 de marzo",
        description:
            "Semana Santa :).",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/images/SemanaSanta.jpg",
        available: true,
    },
    {
        id: 11,
        name: "Jueves 4 de abril",
        description:
            "Esta semana le correspondia a mi comunidad presentar el tema 6, sobre la resiliencia, la activdad fue reventar unos globos y estos contenian preguntas.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/images/4deAbril.jpg",
        available: true,
    },
    {
        id: 12,
        name: "Jueves 11 de abril",
        description:
            "Este dia realizamos el segundo día en las islas de polinizadores. Plantamos nuestras 'matas'.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/images/11deAbril.jpg",
        available: true,
    },
    {
        id: 11,
        name: "Jueves 18 de abril",
        description:
            "No asistí a clases por cuidad mi salud física.",
        technologies: [],
        techNames: [],
        techLinks: [],
        github: "",
        demo: "",
        image: "/projects/portfolio.webp",
        available: true,
    },
];
