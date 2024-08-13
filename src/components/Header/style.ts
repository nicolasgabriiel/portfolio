import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 120px;
  h1 {
    font-size: 32px;
    font-weight: normal;
    text-transform: uppercase;
    color: ${colors.lightGrey};
    font-family: 'Bebas Neue';
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 0px;
    max-width: 80%;
    margin: 0 auto;
  }
`
export const List = styled.nav`
  display: flex;
`
export const ItemList = styled.a`
  display: flex;
  margin: 0 0 0 32px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.grey};
  font-family: 'Inter';
  transition: 0.1s;
  &:hover {
    color: ${colors.white};
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
