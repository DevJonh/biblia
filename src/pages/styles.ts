import styled from 'styled-components'

export const Header = styled.header`
  background-color: #fff;

  width: 100%;
  padding-bottom: 40px;
`

export const Description = styled.p`
  margin-top: 5rem;
  max-width: 45%;

  font-size: 18px;
  line-height: 38px;
  padding-left: 60px;
  @media only screen and (max-width: 800px) {
    max-width: 70%;
  }
  @media only screen and (max-width: 730px) {
    padding-left: 2.5rem;
  }
  @media only screen and (max-width: 460px) {
    max-width: 90%;
    padding-left: 2rem;
  }
  @media only screen and (max-width: 280px) {
    margin-top: 3.75rem;
    max-width: 95%;
    padding-left: 1rem;
  }
`

export default Header
