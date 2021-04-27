import styled from 'styled-components'

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

  @media only screen and (max-width: 730px) {
    max-width: 90%;
  }
`
export const TestamentList = styled.h3`
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 6px 8px -4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  padding: 20px;
  margin-top: 40px;
  text-align: center;
  font-size: 1.6rem;
  letter-spacing: 1px;
  position: relative;

  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background: #fe9534;
    border-radius: 6px 6px 0px 0px;

    position: absolute;
    top: 0;
    left: 0;
  }
`

export const ListVersicle = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3.2rem;

  margin-top: 2.5rem;

  @media only screen and (max-width: 730px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
export const VersicleItem = styled.li`
  width: 11.25rem;
  height: 2.8rem;

  background-color: #fff;
  border-radius: 6px;

  margin-top: 1.1rem;

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
  @media only screen and (max-width: 460px) {
    width: 10rem;
  }
  @media only screen and (max-width: 280px) {
    width: 8.5rem;
  }
`
