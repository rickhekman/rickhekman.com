const PROJECTS = [
  {
    id: "stekjesruil-graduation",
    title: "Stekjesruil - Graduation Project",
    image: "images/projects/stekjesruil-grad.webp",
    alt: "Stekjesruil",
    url: "https://stekjesruil.netlify.app/",
    tags: ["React", "Full Stack"],
    preview: "images/projects/stekjesruil-grad-preview.webp",
    previewalt: "Stekjesruil app preview",
    previewtext: "The app is hosted on Netlify. You can take a look at (fictive) events, swap cuttings, login if you are a member.",
    intro: "Web application created during the Full Stack Development bootcamp at Codaisseur Academy Amsterdam.",
    about: `<p>Stekjesruil (translated from Dutch as cuttings swapping). <br>
     My passion for plants led me to start organizing ‘Stekjesruil’ events. It is an event to swap plant cuttings, meet like-minded people, share and exchange ideas. It is organized each time at a different location in The Hague, The Netherlands.</p>
     <p>For the Codaisseur Academy graduation project we had one week time to develop a Full Stack App of our choice. Because Stekjesruil is related to the idea of open source and sharing with each other, I tought it would be interested to make my project for it.</p><p>My goal was that through the website, plant enthusiasts should be informed about upcoming events, share information and plant cuttings, and be able to create an account. Unfortunately is one week to little time to be able to finish the whole project.</p><h5>Improvements list, missing features:</h5><ul><li><p>Responsive design.</p></li><li><p>Subscribe as a member.</p></li><li><p>Plant cuttings swap system.</p></li><li><p>Edit options as the administrator.</p></li><li><p>Create (past) event photo albums with the use of Cloudenary.</p></li><li><p>Accessibility.</p></li></ul>`,
    source: "https://github.com/rickhekman/stekjesruil-frontend",
    tools: `
      <ul>
        <li>
          <p>
            <a href="https://reactjs.org/" target='_blank' rel='noopener noreferrer'>React</a> - A JavaScript library for building user interfaces.
          </p>
        </li>
        <li>
          <p>
            <a href="https://react.i18next.com/" target='_blank' rel='noopener noreferrer'>React i18next</a>  - Internationalization for React.
          </p>
        </li>
        <li>
          <p>
            <a href="https://redux.js.org/" target='_blank' rel='noopener noreferrer'>Redux</a> - State container for JavaScript apps.
          </p>
        </li>
        <li>
          <p>
            <a href="https://axios-http.com/" target='_blank' rel='noopener noreferrer'>Axios</a> - Promise based HTTP client for the browser and node.js.
          </p>
        </li>
        <li>
          <p>
            <a href="https://sass-lang.com/" target='_blank' rel='noopener noreferrer'>Sass</a> - CSS with superpowers.
          </p>
        </li>
        <li>
          <p>
            <a href="https://expressjs.com/" target='_blank' rel='noopener noreferrer'>Express</a> - Node.js web application framework.
          </p>
        </li>
        <li>
          <p>
            <a href="https://sequelize.org/" target='_blank' rel='noopener noreferrer'>Sequelize</a>  - Sequelize ORM is a promise-based Node.js ORM for Postgres.
          </p>
        </li>
        <li>
          <p>
            <a href="https://www.postgresql.org/" target='_blank' rel='noopener noreferrer'>PostgreSQL</a> - PostgreSQL is a powerful, open source object-relational database system.
          </p>
        </li>
        <li>
          <p>
            <a href="https://www.npmjs.com/package/bcrypt" target='_blank' rel='noopener noreferrer'>Bcrypt</a> - A library to help you hash passwords.
          </p>
        </li>
      </ul>
    `,
    license: "https://en.wikipedia.org/wiki/Beerware",
    description: ``
  }
];

export function getAllProjects() {
  return PROJECTS;
}

export function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id);
}
