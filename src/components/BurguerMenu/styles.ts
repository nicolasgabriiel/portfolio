import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const BurguerMenu = styled.div`
  position: relative;
  .burger-button {
    background-color: ${colors.black};
    border: none;
    cursor: pointer;
    display: none;
    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }
    span {
      display: block;
      height: 5px;
      width: 30px;
      background-color: ${colors.lightGrey};
      border-radius: 2px;
      margin-bottom: 5px;
      transition: 0.2s;
    }
    &:hover {
      span {
        background-color: ${colors.white};
      }
    }
  }
  .menu {
    position: absolute;
    top: 40px;
    right: 0;
    background-color: ${colors.lightDark};
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    display: none;
    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        margin: 15px 0;
        text-align: center;
        a {
          color: ${colors.lightGrey};
          text-decoration: none;
          transition: 0.1s;
          &:hover {
            text-decoration: underline;
            color: ${colors.white};
          }
        }
      }
    }
  }
`
