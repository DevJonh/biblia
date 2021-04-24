import styled from "styled-components";

interface IH2Props {
  borderBottomComplet: boolean;
}

export const Container = styled.div<IH2Props>`
  display: flex;
  padding: 60px 60px 0;

  position: relative;
  h2 {
    font-size: 28px;
    font-weight: normal;

    & + h2 {
      margin-left: 10px;
    }

    &:nth-of-type(1) {
      color: #fe9534;
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    height: 3px;
    width: ${(props) => (props.borderBottomComplet ? "90%" : "30%")};
    background-color: #23353f;
  }
`;
