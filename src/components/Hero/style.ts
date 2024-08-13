import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { lighten, darken } from 'polished'

export const heroContainer = styled.div`
  min-height: 100vh;
  padding: 0 0 200px 0;
  display: flex;
  align-items: center;
  .personalData {
    max-width: 550px;
    .containerButtons {
      padding-top: 40px;
      display: flex;
      justify-content: space-between;
      max-width: 328px;
      @media (max-width: ${breakpoints.tablet}) {
        max-width: 260px;
      }
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    min-height: 50vh;
    padding: 0 0 50px 0;
  }
`
export const bigTitle = styled.h2`
  font-family: 'Bebas Neue', 'sans-serif';
  font-size: 100px;
  text-transform: uppercase;
  color: ${colors.white};
  font-weight: normal;
  line-height: 100%;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 50px;
  }
`
export const text = styled.p`
  font-size: 18px;
  font-family: 'Manrope', 'sans-serif';
  color: ${colors.grey};
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`
export const contactButton = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 11px 3px 24px;
  border-radius: 100px;
  cursor: pointer;
  background-color: ${colors.lightGreen};
  transition: ease-in 0.2s;
  p {
    color: ${colors.black};
    font-family: 'Manrope', 'sans-serif';
    font-weight: bold;
    text-transform: uppercase;
    line-height: none;
  }
  img {
    display: block;
    height: 42px;
  }
  &:hover {
    background-color: ${darken(0.1, colors.lightGreen)};
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: 0px 24px;
    img {
      display: none;
    }
    p {
      font-size: 14px;
    }
  }
`
export const socialButton = styled.a`
  padding: 14px;
  text-decoration: none;
  background-color: ${colors.lightBlack};
  border-radius: 100%;
  transition: ease-in 0.2s;
  cursor: pointer;
  img {
    display: block;
    height: 26px;
  }
  &:hover {
    background-color: ${lighten(0.1, colors.lightBlack)};
  }
  @media (max-width: ${breakpoints.tablet}) {
    img {
      height: 18px;
    }
  }
`
