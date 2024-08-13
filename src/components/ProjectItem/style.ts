import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { darken } from 'polished'

export const Container = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  .background {
    width: 47%;
    background-color: ${colors.lightDark};
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 80%;
      border-radius: 12px;
    }
  }
  .informationCard {
    width: 47%;
    padding: 5px 0 30px;
  }
  @media (max-width: ${breakpoints.desktop}) {
    display: block;
    .background,
    .informationCard {
      width: 100%;
    }
  }
`

export const Title = styled.h3`
  color: ${colors.white};
  font-size: 32px;
  line-height: 140%;
  font-weight: 500;
  padding-bottom: 16px;
  @media (max-width: ${breakpoints.desktop}) {
    padding-top: 12px;
    font-size: 26px;
    text-align: center;
  }
`

export const Description = styled.p`
  color: ${colors.grey};
  font-size: 18px;
  line-height: 150%;
  font-weight: 400;
  text-align: justify;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 14px;
  }
`
export const SubTitle = styled.h4`
  color: ${colors.white};
  font-size: 16px;
  line-height: 150%;
  font-weight: 600;
  text-transform: uppercase;
  padding: 32px 0 16px 0;
  border-bottom: 1px solid ${colors.darkGrey};
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 14px;
  }
`
export const InfoList = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 160%;
    padding: 14px 0;
    border-bottom: 1px solid ${colors.darkGrey};
    @media (max-width: ${breakpoints.desktop}) {
      padding: 10px 0;
      &:last-child {
        display: block;
        h5 {
          text-align: center;
        }
        p {
          text-align: center;
        }
      }
    }
    h5 {
      font-size: 16px;
      color: ${colors.white};
      @media (max-width: ${breakpoints.desktop}) {
        font-size: 14px;
      }
    }
    p {
      color: ${colors.grey};
      @media (max-width: ${breakpoints.desktop}) {
        font-size: 14px;
      }
    }
  }
`
export const Links = styled.nav`
  padding-top: 16px;
  display: flex;
  a {
    border-bottom: 3px solid ${colors.lightGreen};
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-right: 24px;
    transition: 0.2s ease-in;
    &:hover {
      border-color: ${darken(0.1, colors.lightGreen)};
    }
    p {
      text-transform: uppercase;
      font-size: 16px;
      font-weight: bold;
      line-height: 150%;
      padding-right: 4px;
      color: ${colors.lightGreen};
    }
    img {
      display: block;
      height: 24px;
    }
  }
`
