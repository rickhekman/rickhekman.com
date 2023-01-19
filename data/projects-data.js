const PROJECTS = [
  {
    id: "stekjesruil-graduation",
    title: "Stekjesruil - Graduation Project",
    thumbnail: "images/projects/stekjesruil-grad-thumbnail.webp",
    alt: "Stekjesruil",
    url: "#",
    preview: "images/projects/stekjesruil-grad-preview.webp",
    alt02: "Stekjesruil app preview",
    intro: "Web application created during the Full Stack Development bootcamp from Codaisseur Academy Amsterdam.",
    frontend: "https://github.com/rickhekman/stekjesruil-frontend",
    backend: "https://github.com/rickhekman/stekjesruil-backend",
    description: `
      <h2>Desription title</h2>
      <p>Description 1</p>
      <p>Description 2</p>
    `
  },
  {
    id: "project-two",
    title: "Project 2",
    thumbnail: "images/projects/project02-thumbnail.webp",
    alt: "Project 2",
    url: "#",
    image: "images/projects/projects02-preview.webp",
    alt02: "Project 2 app preview",
    intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    frontend: "#",
    backend: "#",
    description: `
      <h2>Desription title</h2>
      <p>Description 1</p>
      <p>Description 2</p>
    `
  }
];

export function getAllProjects() {
  return PROJECTS;
}

export function getProjectsById(id) {
  return PROJECTS.find((e) => e.id === id);
}
