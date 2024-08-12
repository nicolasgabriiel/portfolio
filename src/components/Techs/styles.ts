import styled from 'styled-components'
import { colors } from '../../styles'

export const ContainerTechs = styled.div`
  border-top: 2px solid ${colors.darkGrey};
  padding: 80px 0 20px 0;
  min-height: 100vh;
  .container {
    display: flex;
    justify-content: space-between;
    .containerTitle {
      width: 30%;
    }
    .containerInfos {
      width: 65%;
      h3 {
        color: ${colors.white};
        font-size: 20px;
        text-transform: uppercase;
        font-weight: bold;
        padding-bottom: 10px;
      }
      ul {
        display: flex;
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
          }
          img {
            display: block;
            height: 60px;
          }
        }
      }
    }
  }
`
