import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Content from '../../../components/Content'
import ListVersicle from '../../../components/ListVersicle'
import MainFooter from '../../../components/MainFooter'
import MainHeader from '../../../components/MainHeader'
import Select from '../../../components/SelectInput'
import TitleHeader from '../../../components/TitleHeader'

import axios from '../../../services/axios'
import { IChapterAtual, ITotalCharpters } from 'types/types'
import { FormEvent } from 'react'

export interface IBookProps {
  abbrev: { pt: string }
  name: string
  chapters: number
}

const Versicles: React.FC<ITotalCharpters> = ({
  chapterAtual,
  charptes,
  nameBooks,
  version
}: ITotalCharpters) => {
  const history = useRouter()

  const handleBookOption = (event: FormEvent<HTMLSelectElement>) => {
    if (!isNaN(Number(event.currentTarget.value))) {
      history.push(`/${chapterAtual.book.name}/${event.currentTarget.value}`)
    } else {
      history.push(`/${event.currentTarget.value}/${1}`)
    }
  }

  return (
    <>
      <MainHeader />
      <Content>
        <Select
          nameBooks={nameBooks}
          totalChapters={charptes}
          chapterSelected={chapterAtual.chapter.number}
          versions={version}
          bookSelected={chapterAtual.book.name}
          onChange={(e) => handleBookOption(e)}
        />
        <TitleHeader
          title={`${chapterAtual.book.name} ${chapterAtual.chapter.number}`}
          borderBottomComplet={true}
        />
        <ListVersicle
          chapterSelected={chapterAtual.chapter.number}
          bookSelected={chapterAtual.book.name}
          versicles={chapterAtual.verses}
          totalChapter={charptes}
          nameBooks={nameBooks}
        />
      </Content>
      <MainFooter />
    </>
  )
}

export default Versicles

export async function getStaticPaths() {
  const books: IBookProps[] = await axios.get('/books').then((response) => {
    return response.data
  })

  let paths: object[] = []

  books.forEach(({ name, chapters }) => {
    for (let index = 1; index < chapters; index++) {
      paths.push({ params: { book: name, chapter: index.toString() } })
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const books: IBookProps[] = await axios.get('/books').then((response) => {
    return response.data
  })

  const versions: { version: string }[] = await axios
    .get('/versions')
    .then((response) => {
      return response.data
    })

  let abbr = ''
  let charptes = 0
  let nameBooks = [{}]
  let version = ['']

  versions.forEach((vers) => {
    version.push(vers.version)
  })
  version = version.filter((v) => v !== '')

  books.forEach((book) => {
    if (book.name === params?.book) {
      abbr = book.abbrev.pt
      charptes = book.chapters
    }

    nameBooks.push({ book: book.name, chapters: book.chapters })
  })
  nameBooks = nameBooks.filter((_, i) => (i === 0 ? false : true))

  const chapterAtual: IChapterAtual = await axios
    .get(`/verses/acf/${abbr}/${params?.chapter || 1}`)
    .then((response) => {
      return response.data
    })

  return {
    props: {
      chapterAtual,
      charptes,
      version,
      nameBooks
    }
  }
}
