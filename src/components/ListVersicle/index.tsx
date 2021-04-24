import { useEffect, useState } from 'react'

import PaginationVersicles from '../PaginationVersicles'
import { Container } from './styles'

interface IChapterProps {
  chapterSelected: number
  bookSelected: string
  versicles: {
    number: number
    text: string
  }[]
  totalChapter: number
  nameBooks: { book: string; chapters: number }[]
}

interface IRequestProps {
  chapter: {
    verses: number
  }
  verses: {
    number: string
    text: string
  }[]
}

const ListVersicle: React.FC<IChapterProps> = ({
  chapterSelected,
  bookSelected,
  versicles,
  totalChapter,
  nameBooks
}): JSX.Element => {
  const [bookArray, setBookArray] = useState<string[]>([])

  useEffect(() => {
    let data: string[] = []
    if (nameBooks) {
      nameBooks.forEach((book) => {
        if (book.book) {
          data.push(book.book)
        }
      })
      setBookArray(data)
    }
  }, [nameBooks])

  return (
    <Container>
      <ul>
        {versicles.map((verse) => (
          <li key={verse.number}>
            <p>
              <span>{verse.number} </span>
              {verse.text}
            </p>
          </li>
        ))}
      </ul>

      {versicles && totalChapter && bookArray && (
        <PaginationVersicles
          bookSelected={bookSelected}
          chapterSelected={chapterSelected}
          totalCharpterBookSelected={totalChapter}
          bookArray={bookArray}
          bookData={nameBooks}
        />
      )}
    </Container>
  )
}

export default ListVersicle
