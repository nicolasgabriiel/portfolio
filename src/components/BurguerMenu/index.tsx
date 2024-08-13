import { useState } from 'react'
import * as S from './styles'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.BurguerMenu>
      <button className="burger-button" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && (
        <nav className="menu">
          <ul>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#aboutme" onClick={toggleMenu}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu}>
                Tecnologias
              </a>
            </li>
          </ul>
        </nav>
      )}
    </S.BurguerMenu>
  )
}

export default BurgerMenu
