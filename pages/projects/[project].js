import { useRouter } from "next/router";
import Image from "next/image";

import TagsList from "../../components/Projects/Tags-list";
import LayoutTop from "../../components/Layout-top";
import GreenButton from "../../components/GreenButton";

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
    <LayoutTop>
      <div className={styles.container}>
        <h1 className={styles.title}>{project.title}</h1>
        <Image src={'/' + project.image}
          alt={project.alt}
          width={900}
          height={900}
          className={`${styles.image} ${styles.image__cover}`}
          priority
        />
        <p className={styles.intro}>
          {project.intro}
        </p>
        <div className={styles.tags}>
          <TagsList items={project.tags}/>
        </div>

        <section className={styles.section}>
          <h2>About</h2>
          <div dangerouslySetInnerHTML={{ __html: project.about}} className={styles.about}></div>
        </section>

        <Image src={'/' + project.preview}
          alt={project.previewalt}
          width={900}
          height={900}
          className={styles.image}
        />

        <section className={styles.section}>
          <h2>Preview</h2>
          <p>{project.previewtext}</p>
          <div className={styles.preview__buttons}>
            <GreenButton link={project.url} text="Demo"/>
            <GreenButton link={project.source} text="Source code"/>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Build with</h2>
          <div dangerouslySetInnerHTML={{ __html: project.tools}} className={styles.tools}></div>
        </section>

        <section className={styles.section}>
          <h2>License</h2>
          <a href={project.license} target='_blank' rel='noopener noreferrer'><p>Beerware</p></a>
        </section>
      </div>
    </LayoutTop>
  )
};
