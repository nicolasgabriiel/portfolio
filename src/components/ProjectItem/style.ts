import styled from 'styled-components'
import { colors } from '../../styles'
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
`

export const Title = styled.h3`
  color: ${colors.white};
  font-size: 32px;
  line-height: 140%;
  font-weight: 500;
  padding-bottom: 16px;
`

export const Description = styled.p`
  color: ${colors.grey};
  font-size: 18px;
  line-height: 150%;
  font-weight: 400;
  text-align: justify;
`
export const SubTitle = styled.h4`
  color: ${colors.white};
  font-size: 16px;
  line-height: 150%;
  font-weight: 600;
  text-transform: uppercase;
  padding: 32px 0 16px 0;
  border-bottom: 1px solid ${colors.darkGrey};
`
export const InfoList = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 160%;
    padding: 14px 0;
    border-bottom: 1px solid ${colors.darkGrey};
    h5 {
      font-size: 16px;
      color: ${colors.white};
    }
    p {
      color: ${colors.grey};
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
