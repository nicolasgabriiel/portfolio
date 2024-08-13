import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const title = styled.h2`
  font-family: 'Bebas Neue', 'sans-serif';
  font-size: 76px;
  text-transform: uppercase;
  color: ${colors.white};
  font-weight: normal;
  line-height: 110%;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 50px;
  }
`
