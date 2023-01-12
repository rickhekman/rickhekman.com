const PROJECTS = [
  {
    id: "project01",
    title: "Stekjesruil - Graduation Project",
    slug: "stekjesruil-graduation",
    thumbnail: "images/stekjesruil.jpeg",
    alt: "Stekjesruil",
    description: "Web application created during the Full Stack Development bootcamp from Codaisseur Academy Amsterdam.",
  }
]

export function getAllProjects() {
  return PROJECTS;
}

export function getProjectsById(id) {
  return PROJECTS.find((e) => e.id === id);
}
