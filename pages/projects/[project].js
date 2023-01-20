import { useRouter } from "next/router";
import Image from "next/image";

import { getProjectById } from "../../data/projects-data";

// import styles from "./projects.module.scss";

export default function ProjectDetailPage() {

  const router = useRouter();
  const projectId = router.query.project;
  const project = getProjectById(projectId);

  console.log(project);
  if (!project) {

    return (
      <>
        <h2>No project was found!</h2>
      </>
    )
  };

  return (
    <>
      <h1>{project.title}</h1>
      <Image src={'/' + project.preview} width={900} height={439} alt={project.alt02}/>
      <a href={'/' + project.url}><p>Live site</p></a>
      <a href={project.frontend}><p>Frontend code</p></a>
      <a href={project.backend}><p>Backend code</p></a>
      <div dangerouslySetInnerHTML={{ __html: project.description}}></div>
    </>
  )
};
