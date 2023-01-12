import ProjectItem from './Project-item';

import styles from './Projects-list.module.scss';

export default function ProjectsList(props) {
  const { items } = props;

  return <ul className={styles.list}>
    {items.map(project => <ProjectItem
      key={project.id}
      id={project.id}
      title={project.title}
      slug={project.slug}
      alt={project.alt}
      thumbnail={project.thumbnail}
      description={project.description}
      />)}
  </ul>
}
