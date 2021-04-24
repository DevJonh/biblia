import axios from '../services/axios'

import Content from '../components/Content'
import ListBook, { IListBookProps } from '../components/ListBook'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import TitleHeader from '../components/TitleHeader'
import Loading from '../components/Loading'

import { Description, Header } from './styles'
import { GetStaticProps } from 'next'
import { IBooks, ITotalBooks } from 'types/types'
import React, { useEffect } from 'react'
import { useBook } from 'provider/bookAndTestament'

const Main = ({ booksAT, booksNT }: ITotalBooks) => {
  const dataBook = useBook()
  useEffect(() => {
    dataBook.setAT(booksAT)
    dataBook.setNT(booksNT)
  }, [])

  if (!dataBook.bookAT || !dataBook.bookNT) {
    return <Loading />
  }
  return (
    <>
      <MainHeader />
      <Content>
        <Header>
          <TitleHeader title="bíblia sagrada" borderBottomComplet={false} />
          <Description>
            A Bíblia Sagrada é a palavra de Deus revelada à humanidade, nenhum
            outro livro possui tamanho riqueza. Nela encontramos o propósito
            divino para o homem além da orientação doutrinária requerida para
            nos edificar na vida cristã.
          </Description>
        </Header>

        <ListBook {...dataBook.bookAT} />
        <ListBook {...dataBook.bookNT} />
      </Content>
      <MainFooter />
    </>
  )
}

export default Main

export const getStaticProps: GetStaticProps = async () => {
  const books: IBooks[] = await axios.get('/books').then((response) => {
    return response.data
  })

  let booksAT: IListBookProps = {
    testament: 'Antigo Testamento',
    books: []
  }
  let booksNT: IListBookProps = {
    testament: 'Novo Testamento',
    books: []
  }

  books.forEach((book) => {
    if (book.testament === 'VT') {
      booksAT.books.push(book.name)
    } else if (book.testament === 'NT') {
      booksNT.books.push(book.name)
    }
  })

  return {
    props: {
      booksAT,
      booksNT
    }
  }
}
