import * as S from './style'

import BurguerMenu from '../BurguerMenu'

function Header() {
  return (
    <S.Header>
      <h1>Nicolas Gabriel</h1>
      <S.List>
        <BurguerMenu />
        <S.ItemList href="#projects">Projetos</S.ItemList>
        <S.ItemList href="#aboutme">Sobre</S.ItemList>
        <S.ItemList href="#skills">Tecnologias</S.ItemList>
      </S.List>
    </S.Header>
  )
}

export default Header
