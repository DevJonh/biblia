import React, { useEffect, useState } from 'react'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Link from 'next/link'

import { Container } from './styles'

interface IPagination {
  totalCharpterBookSelected: number
  chapterSelected: number
  bookSelected: string
  bookArray: string[]
  bookData: { book: string; chapters: number }[]
}

const PaginationVersicles: React.FC<IPagination> = ({
  totalCharpterBookSelected,
  chapterSelected,
  bookSelected,
  bookArray,
  bookData
}) => {
  const [totalChapterPrevious, setTotalChapterPrevious] = useState<number>()
  useEffect(() => {
    const indice = bookArray.findIndex((item) => item === bookSelected)
    const bookPrevious = bookArray[indice - 1]

    if (bookPrevious) {
      if (bookData) {
        bookData.forEach(
          (book) =>
            book.book === bookPrevious && setTotalChapterPrevious(book.chapters)
        )
      }
    }
  }, [bookData, bookArray, bookSelected])

  function exibitionPrevious() {
    if (chapterSelected - 1 >= 1) {
      return (
        <Link href={`/${bookSelected}/${chapterSelected - 1}`}>
          <a className="button previous">
            <MdKeyboardArrowLeft size={18} />
            {bookSelected} {chapterSelected - 1}
          </a>
        </Link>
      )
    } else if (chapterSelected - 1 < 1) {
      const indice = bookArray.findIndex((item) => item === bookSelected)
      const bookPrevious = bookArray[indice - 1]

      if (bookArray[indice - 1]) {
        return (
          <Link href={`/${bookPrevious}/${totalChapterPrevious}`}>
            <a className="button previous">
              <MdKeyboardArrowLeft size={18} />
              {bookPrevious} {totalChapterPrevious}
            </a>
          </Link>
        )
      } else {
        return
      }
    }
  }

  function exibitionNext() {
    if (chapterSelected + 1 <= totalCharpterBookSelected) {
      return (
        <Link href={`/${bookSelected}/${chapterSelected + 1}`}>
          <a className="button next">
            {bookSelected} {chapterSelected + 1}
            <MdKeyboardArrowRight size={18} />
          </a>
        </Link>
      )
    } else if (chapterSelected + 1 > totalCharpterBookSelected) {
      const indice = bookArray.findIndex((item) => item === bookSelected)
      const bookPrevious = bookArray[indice + 1]

      if (bookArray[indice + 1]) {
        return (
          <Link href={`/${bookPrevious}/${1}`}>
            <a className="button next">
              {bookPrevious} {1} <MdKeyboardArrowRight size={18} />
            </a>
          </Link>
        )
      }
    }
  }

  return (
    <Container>
      {exibitionPrevious()}

      <p>
        {bookSelected.toUpperCase()} {chapterSelected}
      </p>

      {exibitionNext()}
    </Container>
  )
}

export default PaginationVersicles
