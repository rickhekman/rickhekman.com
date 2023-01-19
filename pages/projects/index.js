import { getAllProjects } from "../../data/projects-data";

import ProjectsList from "../../components/Projects/Projects-list";

import styles from "./projects.module.scss";

export default function Projects() {
  const projects = getAllProjects();
  console.log('Projects', projects);

  return (
    <>
      <div className={styles.container}>
        <h1>Projects</h1>
        <ProjectsList items={projects} />
      </div>
    </>
  )
}
