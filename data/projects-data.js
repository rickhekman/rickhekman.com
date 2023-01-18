const PROJECTS = [
  {
    id: "stekjesruil-graduation",
    title: "Stekjesruil - Graduation Project",
    thumbnail: "images/projects/stekjesruil-thumbnail.webp",
    alt: "Stekjesruil",
    image: "images/projects/stekjesruil-preview.webp",
    alt02: "Stekjesruil app preview",
    intro: "Web application created during the Full Stack Development bootcamp from Codaisseur Academy Amsterdam.",
    description: `
      <h2>Desription title</h2>
      <p>Description 1</p>
      <p>Description 2</p>
    `
  },
  {
    id: "project-two",
    title: "Project 2",
    thumbnail: "images/projects/project2-thumbnail.webp",
    alt: "Project 2",
    image: "images/projects/projects2-preview.webp",
    alt02: "Project 2 app preview",
    intro: "",
    description: "<h2>Desription title</h2><p>Description 1</p><p>Description 2</p>"
  }
];

export function getAllProjects() {
  return PROJECTS;
}

export function getProjectsById(id) {
  return PROJECTS.find((e) => e.id === id);
}
