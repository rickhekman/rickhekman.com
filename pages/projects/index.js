import {getAllProjects} from "../../data/projects-data";

import ProjectsList from "../../components/Projects/Projects-list";

// console.log('get all projects',projects);

export default function Projects() {
  const projects = getAllProjects();

  return (
    <>
      <h1>Projects</h1>
      <ProjectsList items={projects} />
    </>
  )
}
