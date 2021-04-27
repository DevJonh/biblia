import styled from 'styled-components'

export const ContainerSelect = styled.div`
  width: 100%;
  margin: 60px 0 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  div {
    width: 100%;

    & + div {
      margin-left: 10%;
    }
  }
`

export const Select = styled.select`
  position: relative;
  appearance: none;
  padding: 20px;
  width: 100%;
  font-size: inherit;
  cursor: inherit;

  background: linear-gradient(
    180deg,
    #bed8ff 8.25%,
    #cee2ff 48.14%,
    #f1f7ff 99.22%
  );
  box-shadow: 1px 1px 6px -3px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  ::-ms-expand {
    display: none;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60%;
  margin: 0 auto;

  div {
    width: 100%;
    display: flex;
    position: relative;
    svg {
      position: absolute;
      right: 10px;
      top: 20px;
    }
  }
  @media only screen and (max-width: 730px) {
    width: 90%;
  }
  @media only screen and (max-width: 460px) {
    width: 100%;
  }
`
