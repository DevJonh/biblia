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
        width: 60px;
        margin-right: 10px;
      }

      section {
        span {
          font-size: 22px;
          font-weight: normal;
          letter-spacing: 2.5px;
        }
        p {
          font-size: 18px;
          font-weight: normal;
          letter-spacing: 1.5px;
          line-height: 28px;
        }
      }
    }
  }
  div {
    width: 100%;
    height: 90px;

    background-color: #23353f;

    padding: 0 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;

  input {
    width: 250px;
    height: 50px;
    padding: 16px;
    border-radius: 6px 0 0 6px;
    font-size: 14px;
  }
  button {
    width: 45px;
    height: 50px;
    background-color: #fff;
    border-radius: 0 6px 6px 0;
    border-left: 1px solid #23353f;

    transition: background 0.5s;

    &:hover {
      background-color: #ecefff;
    }
  }
`

export const MenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 60px;
  height: 60px;
  border-bottom: 1px solid #23353f;
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
`

export const ListItem = styled.li`
  a {
    text-decoration: none;
    color: #23353f;
    font-size: 14px;
    font-weight: 500;
  }
  transition: all 0.5s;

  &:hover {
    opacity: 0.9;
    transform: translateX(10px);
  }
`
