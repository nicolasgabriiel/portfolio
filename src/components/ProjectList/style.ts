import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const containerList = styled.div`
  padding: 80px 0;
  border-top: 2px solid ${colors.darkGrey};
  border-bottom: 2px solid ${colors.darkGrey};

  .text {
    color: ${colors.grey};
    font-size: 18px;
    max-width: 600px;
    line-height: 150%;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
      max-width: 100%;
    }
  }
`
