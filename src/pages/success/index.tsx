import MainFooter from 'components/MainFooter'
import MainHeader from 'components/MainHeader'
import TitleHeader from 'components/TitleHeader'
import { Container } from './styles'

const Success: React.FC = () => {
  return (
    <>
      <MainHeader />
      <TitleHeader
        title="Email enviado com sucesso"
        borderBottomComplet={true}
      />
      <Container>
        <p>Agredecemos seu contato!</p>
      </Container>
      <MainFooter />
    </>
  )
}

export default Success
