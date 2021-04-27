import styled from 'styled-components'

export const AlphabetList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 95%;
  padding-left: 60px;

  & + div {
    margin-top: 70px;
  }
  @media only screen and (max-width: 730px) {
    padding-left: 0;
    margin: 0 auto;
  }
`

export const Alphabet = styled.ul`
  width: 100%;
  list-style: none;

  display: flex;
  flex-wrap: wrap;

  margin-top: 5rem;

  @media only screen and (max-width: 730px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 0 2rem;
  }
  @media only screen and (max-width: 460px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
export const AlphabetItem = styled.li`
  height: 60px;
  min-width: 50px;

  background-color: #fff;
  border-radius: 0 0 6px 6px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 40px;

  transition: all 0.5s;
  cursor: pointer;

  &:last-child {
    width: 80px;
  }

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
    transform: translateX(10px);
  }

  &.disabled {
    a {
      color: #ccc;
      pointer-events: none;
      cursor: initial;
    }
    cursor: initial;
    :hover {
      background-color: #fff;
      opacity: background 0.3;
      transform: translateX(0px);
    }
  }

  &.active {
    background-color: #23353f;
    opacity: background 0.3;
    a {
      color: #fe9534;
    }
  }
`
