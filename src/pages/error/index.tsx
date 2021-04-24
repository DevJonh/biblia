import MainFooter from 'components/MainFooter'
import MainHeader from 'components/MainHeader'
import TitleHeader from 'components/TitleHeader'
import React from 'react'
import { Container } from './styles'

const Error: React.FC = () => {
  return (
    <>
      <MainHeader />
      <TitleHeader title="Falha no envio de email" borderBottomComplet={true} />
      <Container>
        <p>
          Entre em contato direto: <strong>devjhon.senna@gmail.com</strong>
        </p>
      </Container>
      <MainFooter />
    </>
  )
}

export default Error
