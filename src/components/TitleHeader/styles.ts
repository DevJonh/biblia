import styled from 'styled-components'

interface IH2Props {
  borderBottomComplet: boolean
}

export const Container = styled.div<IH2Props>`
  display: flex;
  padding: 3.75rem 3.75rem 0;

  position: relative;
  h2 {
    font-size: 1.75rem;
    font-weight: normal;

    & + h2 {
      margin-left: 10px;
    }

    &:nth-of-type(1) {
      color: #fe9534;
    }
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    height: 3px;
    width: ${(props) => (props.borderBottomComplet ? '90%' : '30%')};
    background-color: #23353f;
  }
  @media only screen and (max-width: 730px) {
    &::after {
      width: ${(props) => (props.borderBottomComplet ? '80%' : '25%')};
    }
    padding: 2.5rem 2.5rem 0;
  }
  @media only screen and (max-width: 460px) {
    padding-left: 2rem;
  }
  @media only screen and (max-width: 280px) {
    font-size: 1.2rem;
    padding-left: 1rem;
  }
`
