import { Container } from './styles'

interface ITitleHeader {
  title: string
  borderBottomComplet: boolean
}

const TitleHeader: React.FC<ITitleHeader> = ({
  title,
  borderBottomComplet
}) => {
  return (
    <Container borderBottomComplet={borderBottomComplet}>
      {title
        .toUpperCase()
        .split(' ')
        .map((item) => (
          <h2 key={item}>{item}</h2>
        ))}
    </Container>
  )
}

export default TitleHeader
