import useTranslation from 'next-translate/useTranslation';

import ProjectMetadata from '../../components/Projects/Project-SEO';
import ProjectsList from "../../components/Projects/Projects-list";
import LayoutTop from "../../components/Layout-top";

export default function Projects() {

  const { t } = useTranslation();
  const projects = t('projects:projects', {}, { returnObjects: true });

  return (
    <>
    <ProjectMetadata
      url={t('projects-overview:seo-url')}
      title={t('projects-overview:seo-title')}
      description={t('projects-overview:seo-description')}
      imageUrl={t('projects-overview:seo-image-url')}
      alt={t('projects-overview:seo-alt')}
    />
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
