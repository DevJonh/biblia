import Loading from 'components/Loading'
import { GetStaticProps } from 'next'
import { useBook } from 'provider/bookAndTestament'

import Content from '../../components/Content'
import ListBook from '../../components/ListBook'
import MainFooter from '../../components/MainFooter'
import MainHeader from '../../components/MainHeader'

import { ContainerBook } from './styles'

interface ITestamentProps {
  testament: string
}

const Testament: React.FC<ITestamentProps> = ({ testament }) => {
  const { bookAT, bookNT } = useBook()

  if (!bookAT || !bookNT) {
    return <Loading />
  }

  return (
    <>
      <MainHeader />
      <Content>
        <ContainerBook>
          {testament === 'antigo-testamento' ? (
            <ListBook {...bookAT} />
          ) : (
            <ListBook {...bookNT} />
          )}
        </ContainerBook>
      </Content>
      <MainFooter />
    </>
  )
}

export default Testament

export async function getStaticPaths() {
  return {
    paths: [{ params: { type: 'antigo' } }, { params: { type: 'novo' } }],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.type === 'antigo') {
    return {
      props: {
        testament: 'antigo-testamento'
      }
    }
  } else {
    return {
      props: {
        testament: 'novo'
      }
    }
  }
}
