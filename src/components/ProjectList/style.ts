import styled from 'styled-components'
import { colors } from '../../styles'

export const containerList = styled.div`
  padding: 80px 0;
  border-top: 2px solid ${colors.darkGrey};
  border-bottom: 2px solid ${colors.darkGrey};

  .title {
    font-family: 'Bebas Neue', 'sans-serif';
    font-size: 76px;
    text-transform: uppercase;
    color: ${colors.white};
    font-weight: normal;
    line-height: 110%;
  }
  .text {
    color: ${colors.grey};
    font-size: 18px;
    max-width: 600px;
    line-height: 150%;
  }
`
