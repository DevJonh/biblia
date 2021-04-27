import styled from 'styled-components'

export const Container = styled.div`
  width: 65%;
  padding: 0 60px;
  div {
    margin-top: 60px;
    background: #ffffff;
    border-radius: 6px;
    padding: 20px 30px;

    p {
      margin-bottom: 10px;
      line-height: 26px;
    }
    span {
      color: #fe9534;
      font-weight: 500;
    }

    & + div {
      margin-top: 30px;
    }
  }
  @media only screen and (max-width: 730px) {
    width: 100%;
  }
  @media only screen and (max-width: 460px) {
    width: 100%;
    padding: 0 30px;
  }
  @media only screen and (max-width: 460px) {
    padding: 0 15px;
    div {
      padding: 20px 15px;
    }
  }
`
