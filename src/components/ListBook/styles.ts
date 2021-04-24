import styled from "styled-components";

export const BookList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 70%;
  margin: 0 auto;

  & + div {
    margin-top: 70px;
  }
`;
export const TestamentList = styled.h3`
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 6px 8px -4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  padding: 20px;
  margin-top: 40px;
  text-align: center;
  font-size: 26px;
  letter-spacing: 1px;
  position: relative;

  ::before {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background: #fe9534;
    border-radius: 6px 6px 0px 0px;

    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ListVersicle = styled.ul`
  list-style: none;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 40px;

  align-content: flex-start;
`;
export const VersicleItem = styled.li`
  width: 180px;
  height: 45px;

  background-color: #fff;
  border-radius: 6px;

  margin-top: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #23353f;
    font-weight: 500;
    letter-spacing: 0.7px;
    text-align: center;
  }

  &:hover {
    background-color: #cee2ff;
    opacity: background 0.3;
    transform: translateX(-10px);
  }
`;
