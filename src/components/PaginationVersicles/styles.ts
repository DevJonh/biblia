import styled from 'styled-components'

export const Container = styled.div`
  min-width: max-content;
  width: 100%;
  margin: 40px auto;

  display: grid;
  grid-template-areas: 'PR AT NE';
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #23353f;
  border-bottom: 1px solid #23353f;
  padding: 1.25rem 1.8rem;

  a.button {
    text-decoration: none;
    display: flex;
    align-items: center;
    background: none;

    font-weight: 500;

    padding: 10px;
    font-size: 1rem;

    transition: all 0.3s;
    color: #23353f;

    &.previous {
      grid-area: PR;
      :hover {
        opacity: 0.7;
        transform: translateX(-10px);
      }
    }
    &.next {
      grid-area: NE;
      :hover {
        opacity: 0.7;
        transform: translateX(10px);
      }
    }
  }
  p {
    font-weight: 500;
    color: #23353f;
    font-size: 1rem;
    padding: 10px;
    grid-area: AT;
    text-align: center;

    opacity: 0.5;
  }

  @media only screen and (max-width: 460px) {
    margin: 40px 0 20px;
    padding: 1.25rem 0;
  }
  @media only screen and (max-width: 280px) {
    width: 80%;
    margin-left: -2rem;
  }
`
