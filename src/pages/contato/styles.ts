import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  margin: 80px auto 0;

  padding: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  fieldset {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    div {
      position: relative;
      width: 48%;
      input {
        width: 100%;
        padding: 20px 30px 20px 20px;
        font-size: 16px;

        border-radius: 6px;
        border: 2px solid #fe9534;
      }
      span {
        position: absolute;
        z-index: 2;
        right: 10px;
        top: 22px;
      }
    }
  }

  textarea {
    resize: none;
    padding: 20px;

    height: 250px;
    border-radius: 6px;
    border: 2px solid #fe9534;

    margin-bottom: 40px;
    font-size: 16px;
  }

  button {
    width: 15%;

    background-color: #fe9534;
    padding: 20px;

    border-radius: 6px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #ecefff;

    transition: all 0.5s;

    :hover {
      background: #f9ac66;
      color: #23353f;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0 60px 0 20px;
    fieldset div {
      width: 100%;
    }
    button {
      width: 25%;
    }
  }
  @media only screen and (max-width: 460px) {
    padding: 0 30px 0 10px;
    fieldset div {
      width: 100%;
    }
    button {
      width: 35%;
    }
  }
  @media only screen and (max-width: 280px) {
    button {
      width: 50%;
    }
  }
`

export default Form
