const PROJECTS = [
  {
    id: "stekjesruil-graduation",
    title: "Stekjesruil - Graduation Project",
    image: "images/projects/stekjesruil-grad.webp",
    alt: "Stekjesruil",
    url: "#",
    tags: ["React", "Full Stack"],
    preview: "images/projects/stekjesruil-grad-preview.webp",
    previewalt: "Stekjesruil app preview",
    intro: "Web application created during the Full Stack Development bootcamp at Codaisseur Academy Amsterdam.",
    about: "Stekjesruil (translated from Dutch as cuttings swapping). My passion for plants led me to start organizing ‘Stekjesruil’ events. It is an event to swap plant cuttings, meet like-minded people, share and exchange ideas. It is organized each time at a different location in The Hague, The Netherlands.",
    frontend: "https://github.com/rickhekman/stekjesruil-frontend",
    backend: "https://github.com/rickhekman/stekjesruil-backend",
    tools: `
      <ul>
        <li>
          <p>
            <a href="https://reactjs.org/">React</a> - A JavaScript library for building user interfaces.
          </p>
        </li>
        <li>
          <p>
            <a href="https://react.i18next.com/">React i18next</a>  - Internationalization for React.
          </p>
        </li>
        <li>
          <p>
            <a href="https://redux.js.org/">Redux</a> - State container for JavaScript apps.
          </p>
        </li>
        <li>
          <p>
            <a href="https://axios-http.com/">Axios</a> - Promise based HTTP client for the browser and node.js.
          </p>
        </li>
        <li>
          <p>
            <a href="https://sass-lang.com/">Sass</a> - CSS with superpowers.
          </p>
        </li>
      </ul>
    `,
    licence: "https://en.wikipedia.org/wiki/Beerware",
    description: ``
  }
];

export function getAllProjects() {
  return PROJECTS;
}

export function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id);
}
