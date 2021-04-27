import styled from 'styled-components'

export const Container = styled.header`
  h2 {
    overflow: hidden;
    a {
      color: #fff;
      text-decoration: none;
      display: flex;
      align-items: center;
      img {
        max-width: 100%;
        width: 3.75rem;
        margin-right: 10px;
      }

      section {
        span {
          font-size: 1.37rem;
          font-weight: normal;
          letter-spacing: 2.5px;
        }
        p {
          font-size: 1.125rem;
          font-weight: normal;
          letter-spacing: 1.5px;
          line-height: 1.75rem;
        }
      }
    }
  }
  div {
    width: 100%;
    height: 90px;

    background-color: #23353f;

    padding: 0 3.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (max-width: 730px) {
    div {
      padding: 0 30px;
    }
  }
  @media only screen and (max-width: 449px) {
    div {
      flex-wrap: wrap;
      justify-content: center;
      height: 128px;

      h2 {
        margin-bottom: 0.8rem;
      }
    }
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;

  input {
    width: 15.6rem;
    height: 3.125rem;
    padding: 1rem;
    border-radius: 6px 0 0 6px;
    font-size: 0.9rem;
    transition: 0.4s;
  }

  button {
    width: 2.8rem;
    height: 3.125rem;
    background-color: #fff;
    border-radius: 0 6px 6px 0;
    border-left: 1px solid #23353f;

    transition: background 0.5s;

    &:hover {
      background-color: #ecefff;
    }
  }

  @media only screen and (max-width: 730px) {
    input {
      width: 14.3rem;
      margin-left: 1.7rem;
    }
  }

  @media only screen and (max-width: 449px) {
    input {
      background: transparent;
      border-bottom: 1px solid #999;
      border-left: 1px solid #999;
      color: #fff;
      &::placeholder {
        color: #eee;
      }
    }
    button {
      background: transparent;
      color: #fff;
      border-bottom: 1px solid #999;
      border-left: 1px solid #999;
      border-right: 1px solid #999;
    }
    margin-bottom: 0.8rem;
  }
`

export const MenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 3.75rem;
  height: 3.75rem;
  border-bottom: 1px solid #23353f;

  @media only screen and (max-width: 730px) {
    padding: 0 30px;
  }

  @media only screen and (max-width: 460px) {
    flex-direction: column;
    justify-content: center;
    height: 5rem;
  }
  @media only screen and (max-width: 280px) {
    padding: 0;
  }
`
export const MenuList = styled.ul`
  list-style: none;
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & + ul {
    margin-left: 30%;
  }

  @media only screen and (max-width: 730px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    align-items: center;
    & + ul {
      margin-left: 10%;
    }
  }

  @media only screen and (max-width: 460px) {
    width: 90%;
    & + ul {
      margin-left: 0%;
      margin-top: 0.9rem;
    }
  }
`

export const ListItem = styled.li`
  a {
    text-decoration: none;
    color: #23353f;
    font-size: 14px;
    font-weight: 500;
    display: block;
  }
  transition: all 0.5s;

  &:hover {
    opacity: 0.9;
    transform: translateX(10px);
  }

  @media only screen and (max-width: 730px) {
    text-align: center;
  }
  @media only screen and (max-width: 460px) {
    & + li {
      margin-left: 30%;
    }
  }
`
