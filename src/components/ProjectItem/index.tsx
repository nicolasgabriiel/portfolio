import * as S from './style'
import gh from '../../assets/images/githubgreen.svg'
import arrow from '../../assets/images/arrow.svg'

interface ProjectCardProps {
  proj: Project
}

const ProjectItem: React.FC<ProjectCardProps> = ({ proj }) => {
  return (
    <S.Container>
      <div className="background">
        <img src={proj.img} alt={`Imagem do Projeto ` + proj.title} />
      </div>
      <div className="informationCard">
        <S.Title>{proj.title}</S.Title>
        <S.Description>{proj.body}</S.Description>
        <S.SubTitle>Informações do Projeto</S.SubTitle>
        <S.InfoList>
          <li>
            <h5>Ano</h5>
            <p>{proj.year}</p>
          </li>
          <li>
            <h5>Tipo</h5>
            <p>{proj.role}</p>
          </li>
          <li>
            <h5>Tecnologias</h5>
            <p>{proj.techs}</p>
          </li>
        </S.InfoList>
        <S.Links>
          {proj.hasDemo ? (
            <a href={proj.demoLink} target="_blank" rel="noreferrer">
              <p>ver demo</p>
              <img src={arrow} alt="" />
            </a>
          ) : null}
          <a href={proj.githubLink} target="_blank" rel="noreferrer">
            <p>ver no github</p>
            <img src={gh} alt="" />
          </a>
        </S.Links>
      </div>
    </S.Container>
  )
}
export default ProjectItem
