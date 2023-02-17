import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import ProjectMetadata from '../../components/Projects/Project-SEO';
import ProjectsList from "../../components/Projects/Projects-list";
import LayoutTop from "../../components/Layout-top";

export default function Projects() {

  const { t } = useTranslation();
  const projects = t('projects:projects', {}, { returnObjects: true });

  return (
    <>
      <Head>
        <ProjectMetadata
          url={t('projects-overview:seourl')}
          title={t('projects-overview:seotitle')}
          description={t('projects-overview:seodescription')}
          imageUrl={t('projects-overview:seoimageurl')}
          alt={t('projects-overview:seoalt')}
        />
      </Head>
      <LayoutTop>
          <ProjectsList items={projects} />
      </LayoutTop>
    </>

  )
}

export function GetProjectById(id) {
  const { t } = useTranslation();
  const projects = t('projects:projects', {}, { returnObjects: true });
  return projects.find((project) => project.id === id);
}
