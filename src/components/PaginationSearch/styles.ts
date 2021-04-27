import styled from 'styled-components'

interface IContainerProps {
  resize: boolean
  resizeP: boolean
}

export const Container = styled.section<IContainerProps>`
  min-width: max-content;
  width: ${(props) =>
    (props.resize ? '10%' : '50%') || (props.resizeP ? '5%' : '50%')};
  ${(props) => props.resizeP && 'max-width:5%'};
  margin: 50px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #23353f;
  border-radius: 6px;
  padding: ${(props) => (props.resize ? '1.25rem 0.6rem' : '1.25rem 2.5rem')};

  ul {
    flex: 1;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: ${(props) => (props.resize ? '0px .3rem' : '0px 1.25rem')};

    li {
      border: 1px solid #23353f;
      border-radius: 6px;
      padding: 10px 15px;

      cursor: pointer;
      transition: all 0.3s;

      button {
        text-decoration: none;
        color: #23353f;
        font-weight: 500;
        background: none;
      }

      &.active {
        background-color: #23353f;
        button {
          color: #fff;
        }
      }

      :hover {
        background-color: #23353f;
        button {
          color: #fff;
        }
      }
    }
  }
  @media only screen and (max-width: 400px) {
    padding: ${(props) => (props.resize ? '1.25rem 0.6rem' : '1.25rem 1.5rem')};
  }
  @media only screen and (max-width: 280px) {
    padding: ${(props) => (props.resize ? '1.25rem 0.6rem' : '1.25rem 1rem')};
    margin-left: ${(props) => (props.resize ? 'auto' : '-1rem;')};
    width: max-content;
  }
`
export const Button = styled.button<IContainerProps>`
  background: none;
  &.button {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;

    font-weight: 500;
    border: 1px solid #23353f;
    border-radius: 6px;
    padding: 0.6rem 0.9rem;
    font-size: 16px;

    transition: all 0.3s;
    color: #23353f;

    :hover {
      background-color: #23353f;
      color: #fff;
      svg {
        fill: #fff;
      }
    }
  }

  @media only screen and (max-width: 460px) {
    width: max-content;
    &.button {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }
`
