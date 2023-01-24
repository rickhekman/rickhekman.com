import { getAllProjects } from "../../data/projects-data";

import ProjectsList from "../../components/Projects/Projects-list";

import styles from "./Projects.module.scss";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <>
      <div className={styles.container}>
        <ProjectsList items={projects} />
      </div>
    </>
  )
}
