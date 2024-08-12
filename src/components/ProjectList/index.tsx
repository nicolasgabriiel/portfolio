import * as S from './style'
import ProjectItem from '../ProjectItem'
import projectsData from '../../projectsData.json'
import Title from '../Title'

function ProjectList() {
  return (
    <S.containerList className="containerList" id="projects">
      <div className="container">
        <Title text="Projetos"></Title>
        <p className="text">
          Aqui estão alguns projetos selecionados que mostram algumas das minhas
          competências como desenvolvedor.
        </p>
        <ul>
          {projectsData.map((proj: Project) => (
            <ProjectItem key={proj.id} proj={proj} />
          ))}
        </ul>
      </div>
    </S.containerList>
  )
}

export default ProjectList
