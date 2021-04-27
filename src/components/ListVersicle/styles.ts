import styled from 'styled-components'

export const Container = styled.main`
  width: 60%;
  margin: 80px 0 0 60px;

  ul {
    list-style: none;
    li {
      font-size: 1rem;
      line-height: 1.6rem;

      padding: 10px 20px;
      border-radius: 6px;

      & + li {
        margin-top: 20px;
      }

      &:nth-child(odd) {
        background-color: #fff;
      }

      span {
        font-weight: bold;
        margin-right: 6px;
        font-size: 1.12rem;
      }
    }
  }
  @media only screen and (max-width: 730px) {
    width: 80%;
    margin: 5rem 0 0 2.6rem;
  }
  @media only screen and (max-width: 460px) {
    width: 80%;
    margin: 5rem 0 0 1.8rem;
  }
  @media only screen and (max-width: 280px) {
    width: 80%;
    margin: 5rem 0 0 1.3rem;
  }
`
