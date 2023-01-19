import ProjectItem from "./Project-item";

import styles from "./Projects-list.module.scss";

export default function ProjectsList(props) {

  const { items } = props;

  return <ul className={styles.list}>
    {
      items.map(project => <ProjectItem
        key={project.id}
        id={project.id}
        title={project.title}
        alt={project.alt}
        thumbnail={project.thumbnail}
        intro={project.intro}
        />
      )
    }
  </ul>
}
