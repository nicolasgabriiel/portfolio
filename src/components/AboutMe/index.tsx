import Title from '../Title'
import { ContainerAbout } from './style'

function AboutMe() {
  return (
    <div className="container" id="aboutme">
      <ContainerAbout>
        <div className="containerTitle">
          <Title text="Sobre Mim"></Title>
        </div>
        <div className="containerInfos">
          <h3>Desenvolvedor Full Stack</h3>
          <p>
            Olá, meu nome é Nícolas, moro em Novo Hamburgo - RS e tenho 21 anos.
            Iniciei minha jornada acadêmica com uma graduação em Análise e
            Desenvolvimento de Sistemas. Minha experiência profissional está
            muito ligada à área administrativa, lidando com emissão de notas,
            controle de estoque e atendimento ao cliente. Essa experiência me
            proporcionou habilidades valiosas, como capacidade analítica,
            resolução de problemas, comunicação e trabalho em equipe. Minha
            motivação para ingressar na área de desenvolvimento de software veio
            do meu interesse e da afinidade que desenvolvi com a programação
            durante meus estudos. Comecei minha jornada aprendendo HTML, CSS e
            JavaScript, o que despertou minha curiosidade e me incentivou a
            explorar cada vez mais as áreas da tecnologia. Após perceber que o
            mercado demandava cada vez mais habilidades em desenvolvimento de
            software, decidi me aprofundar mais e optei por fazer um curso
            profissionalizante em Desenvolvimento Full Stack Java na EBAC. Nessa
            formação me profissionalizei em desenvolver aplicações utilizando
            React e Java mas também conheci várias outras tecnologias. Para ver
            o meu currículo é só clicar no link abaixo.
          </p>
          <a
            href="https://docs.google.com/document/d/1fT0Ol7b7_gBnhNSDZfoE2CU52tLPD_ak/edit?pli=1"
            target="_blank"
            rel="noreferrer"
          >
            Visualizar cv
          </a>
        </div>
      </ContainerAbout>
    </div>
  )
}
export default AboutMe
