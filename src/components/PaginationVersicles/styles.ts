import styled from "styled-components";

export const Container = styled.div`
  min-width: max-content;
  width: 100%;
  margin: 40px auto;

  display: grid;
  grid-template-areas: "PR AT NE";
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #23353f;
  border-bottom: 1px solid #23353f;
  padding: 20px 30px;

  a.button {
    text-decoration: none;
    display: flex;
    align-items: center;
    background: none;

    font-weight: 500;

    padding: 10px;
    font-size: 16px;

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
    font-size: 16px;
    padding: 10px;
    grid-area: AT;
    text-align: center;

    opacity: 0.5;
  }
`;
