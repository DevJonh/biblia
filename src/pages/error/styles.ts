import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 40px 60px;

  display: flex;
  overflow: hidden;
`
export const Aside = styled.aside`
  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    color: #23353f;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin: 0px 0 40px;
    position: absolute;
    top: -90%;
    img {
      max-width: 100%;
      width: 3.75rem;
      margin-right: 10px;
    }

    section {
      span {
        font-size: 1.3rem;
        font-weight: normal;
        letter-spacing: 2.5px;

        & + span {
          margin-left: 6px;
        }
      }
    }
  }

  h2 {
    background-color: #ad1517;
    width: 70%;
    padding: 1.8rem 3.125rem;
    border-radius: 6px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

    text-align: center;
    color: #ecefff;
    font-weight: 500;
    letter-spacing: 1.5px;
    font-size: 28px;

    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    width: 70%;
    margin-top: 10px;
    line-height: 24px;
  }
`
export const ImgContainer = styled.div`
  max-width: 100%;
  position: relative;
  img {
    width: 105%;
  }
`

export default Container
