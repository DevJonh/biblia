import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #23353f;
  padding: 30px 60px;

  ul {
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
`;
