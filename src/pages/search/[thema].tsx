import Content from '../../components/Content'
import MainFooter from '../../components/MainFooter'
import MainHeader from '../../components/MainHeader'
import TitleHeader from '../../components/TitleHeader'
import SearchList from '../../components/SearchList'

import axios from '../../services/axios'
import { Container, FooterContainer } from './styles'
import { GetStaticProps } from 'next'
import Loading from 'components/Loading'
import temas from 'utils/temas'

export interface IVersesProps {
  book: {
    name: string
  }
  chapter: number
  number: number
  text: string
}

export interface ISearchProps {
  search: string
  searchs: {
    version: string
    verses: IVersesProps[]
  }
}

const Search: React.FC<ISearchProps> = ({ search, searchs }) => {
  if (!search) {
    return <Loading />
  }

  if (searchs.verses.length <= 0 || searchs.verses === []) {
    return (
      <>
        <MainHeader />
        <TitleHeader title="Nada Encontrado :(" borderBottomComplet={true} />
        <FooterContainer>
          <MainFooter />
        </FooterContainer>
      </>
    )
  }
  return (
    <Container>
      <MainHeader />
      <Content>
        <TitleHeader title={search} borderBottomComplet={false} />
        {searchs && <SearchList verses={searchs.verses} search={search} />}
      </Content>
      <FooterContainer>
        <MainFooter />
      </FooterContainer>
    </Container>
  )
}

export default Search

export async function getStaticPaths() {
  let paths: object[] = []

  temas.forEach((tema) => {
    paths.push({ params: { thema: tema.toLowerCase() } })
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params)
  const searchs = await axios
    .post('/verses/search', {
      version: 'acf',
      search: params?.thema
    })
    .then((res) => res.data)

  if (!searchs) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      searchs,
      search: params?.thema
    }
  }
}
