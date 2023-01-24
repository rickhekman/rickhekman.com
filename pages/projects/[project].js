import { useRouter } from "next/router";
import Image from "next/image";

import TagsList from "../../components/Projects/Tags-list";

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
        <p className={styles.intro}>
          {project.intro}
        </p>
        <div className={styles.tags}>
          <TagsList items={project.tags}/>
        </div>
        <h3>About</h3>
        <div dangerouslySetInnerHTML={{ __html: project.about}} className={styles.about}></div>
        <h3>Preview</h3>
        <Image src={'/' + project.preview}
          alt={project.previewalt}
          width={900}
          height={900}
          className={styles.image}
          loading="lazy"
        />
        <a href={'/' + project.url}><p>Preview</p></a>
        <h3>Source code</h3>
        <a href={project.frontend}><p>Frontend code</p></a>
        <a href={project.backend}><p>Backend code</p></a>
        <h3>Build with</h3>
        <div dangerouslySetInnerHTML={{ __html: project.tools}}></div>
        <h3>License</h3>
        <a href={project.license}><p>Beerware</p></a>
      </div>
    </>
  )
};
