import * as S from './style'
import circle from '../../assets/images/circle.svg'
import lk from '../../assets/images/linkedin.svg'
import gh from '../../assets/images/github.svg'

function Hero() {
  return (
    <S.heroContainer>
      <div className="personalData">
        <S.bigTitle>
          Olá, me chamo
          <br /> Nicolas Gabriel
        </S.bigTitle>
        <S.text>
          Sou um desenvolvedor Full Stack focado em criar sites e sistemas web
          eficientes e funcionais.
        </S.text>
        <div className="containerButtons">
          <S.contactButton
            href="https://api.whatsapp.com/send/?phone=%2B5551992279251&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <p>meu contato</p>
            <img src={circle} alt="circle" />
          </S.contactButton>

          <S.socialButton
            href="https://www.linkedin.com/in/nicolasgabriiel/"
            target="_blank"
          >
            <img src={lk} alt="" />
          </S.socialButton>
          <S.socialButton
            href="https://github.com/nicolasgabriiel"
            target="_blank"
          >
            <img src={gh} alt="" />
          </S.socialButton>
        </div>
      </div>
    </S.heroContainer>
  )
}
export default Hero
