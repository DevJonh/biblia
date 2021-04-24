import styled from "styled-components";

export const Container = styled.main`
  width: 60%;
  margin: 80px 0 0 60px;

  ul {
    list-style: none;
    li {
      font-size: 16px;
      line-height: 26px;

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
        font-size: 18px;
      }
    }
  }
`;
