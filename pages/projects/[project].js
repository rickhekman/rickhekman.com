import { useRouter } from "next/router";
import Image from "next/image";

import { getProjectById } from "../../data/projects-data";

import styles from "./Project.module.scss";

export default function ProjectDetailPage() {

  const router = useRouter();
  const projectId = router.query.project;
  const project = getProjectById(projectId);

  if (!project) {

    return (
      <>
        <h2>No project was found!</h2>
      </>
    )
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{project.title}</h1>
        <Image src={'/' + project.image}
          alt={project.alt}
          width={900}
          height={900}
          className={styles.image}
          loading="lazy"
          />
        <a href={'/' + project.url}><p>Live site</p></a>
        <a href={project.frontend}><p>Frontend code</p></a>
        <a href={project.backend}><p>Backend code</p></a>
        <div dangerouslySetInnerHTML={{ __html: project.description}}></div>
      </div>
    </>
  )
};
