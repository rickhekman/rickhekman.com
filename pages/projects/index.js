import { getAllProjects } from "../../data/projects-data";

import ProjectsList from "../../components/Projects/Projects-list";
import LayoutTop from "../../components/Layout-top";

import styles from "./Projects.module.scss";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <LayoutTop>
        <ProjectsList items={projects} />
    </LayoutTop>
  )
}
