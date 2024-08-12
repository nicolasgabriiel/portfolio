import * as S from './style'

interface ChildComponentProps {
  text: string
}
function Title({ text }: ChildComponentProps) {
  return <S.title>{text}</S.title>
}

export default Title
