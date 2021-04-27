import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #23353f;
  padding: 1.8rem 3.75rem;

  ul {
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 1rem;
    align-items: center;
    li {
      margin-top: 20px;
      transition: 0.3s;
      a {
        text-decoration: none;
        color: #fff;
      }
      &:hover {
        color: #f1fdff;
        transform: translateY(-5px);
      }
    }
  }
  @media only screen and (max-width: 730px) {
    padding: 30px 2.8rem;
  }
  @media only screen and (max-width: 460px) {
    padding: 30px 2rem;
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 460px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
