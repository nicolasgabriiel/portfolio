import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { darken } from 'polished'

export const ContainerAbout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 120px 0;
  min-height: 100vh;
  @media (max-width: ${breakpoints.desktop}) {
    display: block;
  }
  .containerTitle {
    width: 30%;
    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
    }
  }
  .containerInfos {
    width: 65%;
    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
    }
    h3 {
      color: ${colors.white};
      font-size: 32px;
      font-weight: 500;
      line-height: 140%;
      padding-bottom: 16px;
      @media (max-width: ${breakpoints.tablet}) {
        font-size: 18px;
      }
    }
    p {
      color: ${colors.grey};
      font-size: 18px;
      line-height: 150%;
      padding-bottom: 50px;
      text-align: justify;
      @media (max-width: ${breakpoints.tablet}) {
        font-size: 14px;
      }
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
