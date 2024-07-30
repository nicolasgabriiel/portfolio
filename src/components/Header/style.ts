import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  padding: 24px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 32px;
    font-weight: normal;
    text-transform: uppercase;
    color: ${colors.lightGrey};
    font-family: 'Bebas Neue';
  }
`
export const List = styled.ul`
  display: flex;
`
export const ItemList = styled.li`
  display: flex;
  margin: 0 0 0 32px;
  font-size: 16px;
  cursor: pointer;
  color: ${colors.grey};
  font-family: 'Inter';
  transition: 0.1s;
  &:hover {
    color: ${colors.white};
  }
`
