import useTranslation from 'next-translate/useTranslation';

import ProjectsList from "../../components/Projects/Projects-list";
import LayoutTop from "../../components/Layout-top";

export default function Projects() {

  const { t } = useTranslation();
  const projects = t('projects:projects', {}, { returnObjects: true });

  return (
    <LayoutTop>
        <ProjectsList items={projects} />
    </LayoutTop>
  )
}

export function GetProjectById(id) {
  const { t } = useTranslation();
  const projects = t('projects:projects', {}, { returnObjects: true });
  return projects.find((project) => project.id === id);
}
