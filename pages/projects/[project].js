import { useRouter } from "next/router";
import Image from "next/image";
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from "next-seo";

import TagsList from "../../components/Projects/Tags-list";
import LayoutTop from "../../components/Layout-top";
import GreenButton from "../../components/GreenButton";

import {  GetProjectById }  from ".";

import styles from "./Project.module.scss";

export default function ProjectDetailPage() {

  const { t } = useTranslation();

  const router = useRouter();
  const projectId = router.query.project;
  const project = GetProjectById(projectId);

  const seoTitle = project.seotitle;
  const seoDescription = project.seodescription;
  const seoImageUrl = project.seoimageurl;
  const seoAlt = project.seoalt;

  if (!project) {

    return (
      <>
        <h2>No project was found!</h2>
      </>
    )
  };

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        openGraph={{
          type: 'website',
          url: 'https://www.rickhekman.com/',
          title: seoTitle,
          description: seoDescription,
          images: [
            {
              url: seoImageUrl,
              width: 1200,
              height: 630,
              alt: seoAlt,
              type: 'image/webp',
            }
          ]
        }}
      />
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
            <h2>{t("project-page:about")}</h2>
            <div dangerouslySetInnerHTML={{ __html: project.about}} className={styles.about}></div>
          </section>

          <Image src={'/' + project.preview}
            alt={project.previewalt}
            width={900}
            height={900}
            className={styles.image}
          />

          <section className={styles.section}>
            <h2>{t("project-page:preview")}</h2>
            <p>{project.previewtext}</p>
            <div className={styles.preview__buttons}>
              <GreenButton link={project.url} text="Demo"/>
              <GreenButton link={project.source} text="Source code"/>
            </div>
          </section>

          <section className={styles.section}>
            <h2>{t("project-page:build")}</h2>
            <div dangerouslySetInnerHTML={{ __html: project.tools}} className={styles.tools}></div>
          </section>

          <section className={styles.section}>
            <h2>{t("project-page:license")}</h2>
            <a href={project.license} target='_blank' rel='noopener noreferrer'><p>Beerware</p></a>
          </section>

        </div>
      </LayoutTop>
    </>

  )
};
