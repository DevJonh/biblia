import styled from 'styled-components'

interface IContainerProps {
  resize: boolean
  resizeP: boolean
}

export const Container = styled.div<IContainerProps>`
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

  a.button {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;

    font-weight: 500;
    border: 1px solid #23353f;
    border-radius: 6px;
    padding: 0.6rem 0.9rem;
    font-size: 1rem;

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
      padding: 0.6rem 0.9rem;

      cursor: pointer;
      transition: all 0.3s;

      a {
        text-decoration: none;
        color: #23353f;
        font-weight: 500;
      }

      &.active {
        background-color: #23353f;
        a {
          color: #fff;
        }
      }

      :hover {
        background-color: #23353f;
        a {
          color: #fff;
        }
      }
    }
  }
  @media only screen and (max-width: 460px) {
    width: max-content;
    a.button {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }
`
