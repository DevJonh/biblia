import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  display: flex;
  background-color: #23353f;
  height: 60px;
  color: #fff;

  padding: 10px 60px;
  @media only screen and (max-width: 460px) {
    padding: 10px 30px;
    height: 40px;
  }
`
