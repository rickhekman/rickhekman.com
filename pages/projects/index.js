import useTranslation from 'next-translate/useTranslation';

import ProjectsList from "../../components/Projects/Projects-list";
import LayoutTop from "../../components/Layout-top";

export default function Projects() {

  const { t } = useTranslation();


  const projects = t('projects:projects', {}, { returnObjects: true });

  console.log("Projects", projects);
  return (
    <LayoutTop>
        <ProjectsList items={projects} />
    </LayoutTop>
  )
}
