import Title from '../Title'
import * as S from './styles'

function Techs() {
  return (
    <S.ContainerTechs id="skills">
      <div className="container">
        <div className="containerTitle">
          <Title text="Tecnologias"></Title>
        </div>
        <div className="containerInfos">
          <h3>Linguagens</h3>
          <ul>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
              <p>Java</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              <p>HTML</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              <p>CSS</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              <p>JavaScript</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
              <p>TypeScript</p>
            </li>
          </ul>
          <h3>Frameworks e Bibliotecas</h3>
          <ul>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
              <p>Spring</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              <p>React</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" />
              <p>Vue</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" />
              <p>jQuery</p>
            </li>
          </ul>
          <h3>Banco de Dados</h3>
          <ul>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
              <p>MySQL</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
              <p>PostgreSQL</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
              <p>MongoDB</p>
            </li>
          </ul>
          <h3>Testes</h3>
          <ul>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg" />
              <p>Junit</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" />
              <p>Jest</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" />
              <p>Cypress</p>
            </li>
          </ul>
          <h3>Frameworks, Pré Processadores CSS</h3>
          <ul>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
              <p>SASS</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg" />
              <p>LESS</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
              <p>Tailwind</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
              <p>Bootstrap</p>
            </li>
          </ul>
          <h3>Outros</h3>
          <ul>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
              <p>Docker</p>
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
              <p>Git</p>
            </li>
          </ul>
        </div>
      </div>
    </S.ContainerTechs>
  )
}

export default Techs
