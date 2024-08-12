import styled from 'styled-components'
import { colors } from '../../styles'
import { darken } from 'polished'

export const ContainerAbout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 120px 0;
  min-height: 100vh;
  .containerTitle {
    width: 30%;
  }
  .containerInfos {
    width: 65%;
    h3 {
      color: ${colors.white};
      font-size: 32px;
      font-weight: 500;
      line-height: 140%;
      padding-bottom: 16px;
    }
    p {
      color: ${colors.grey};
      font-size: 18px;
      line-height: 150%;
      padding-bottom: 50px;
      text-align: justify;
    }
    a {
      color: ${colors.lightGreen};
      font-size: 18px;
      line-height: 150%;
      font-weight: bold;
      text-decoration: none;
      border-bottom: 3px solid ${colors.lightGreen};
      text-transform: uppercase;
      &:hover {
        color: ${darken(0.1, colors.lightGreen)};
        border-color: ${darken(0.1, colors.lightGreen)};
      }
    }
  }
`
