import { getAllProjects } from "../../data/projects-data";

export default function Projects() {

  const projects = getAllProjects();
  console.log('Projects', projects);

  return (
    <>
      <h1>Projects</h1>
    </>
  )
}
