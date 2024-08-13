import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ContainerTechs = styled.div`
  border-top: 2px solid ${colors.darkGrey};
  padding: 80px 0 20px 0;
  min-height: 100vh;
  .container {
    display: flex;
    justify-content: space-between;
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
        padding-top: 30px;
        width: 100%;
      }
      h3 {
        color: ${colors.white};
        font-size: 20px;
        text-transform: uppercase;
        font-weight: bold;
        padding-bottom: 10px;
        @media (max-width: ${breakpoints.tablet}) {
          text-align: center;
          font-size: 16px;
          width: 100%;
        }
      }
      ul {
        display: flex;
        @media (max-width: ${breakpoints.tablet}) {
          justify-content: center;
        }
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-right: 20px;

          p {
            color: ${colors.grey};
            font-size: 14px;
            font-weight: bold;
            padding-bottom: 36px;
            text-align: center;
            @media (max-width: ${breakpoints.desktop}) {
              font-size: 12px;
            }
          }
          img {
            display: block;
            height: 60px;
            @media (max-width: ${breakpoints.desktop}) {
              height: 50px;
            }
          }
        }
      }
    }
  }
`
