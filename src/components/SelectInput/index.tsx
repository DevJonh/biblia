import React, { FormEvent, useEffect, useMemo, useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import axios from 'services/axios'
import { IChapterAtual } from 'types/types'

import { Select, ContainerSelect, Container } from './styles'

interface ISelectProps {
  nameBooks: {
    book: string
    chapters: number
  }[]
  totalChapters: number
  versions: string[]
  bookSelected: string
  chapterSelected: number
  onChange(e: FormEvent<HTMLSelectElement>): void
}

const SelectInput: React.FC<ISelectProps> = ({
  nameBooks,
  chapterSelected,
  versions,
  bookSelected,
  onChange,
  totalChapters
}) => {
  const [stateBook, setStateBook] = useState(bookSelected)
  const [stateChapter, setStateChapter] = useState(chapterSelected)

  const [chapters, setChapters] = useState<number[]>()

  useEffect(() => {
    setStateBook(bookSelected)
    setStateChapter(chapterSelected)
  }, [chapterSelected, bookSelected])

  useEffect(() => {
    let data: number[] = []
    for (let index = 1; index <= totalChapters; index++) {
      data.push(index)
    }

    setChapters(data)
  }, [totalChapters])

  return (
    <Container>
      <ContainerSelect>
        <div>
          <Select value={stateBook} onChange={onChange}>
            {nameBooks.map(({ book }) => (
              <option
                onClick={(e) => setStateBook(e.currentTarget.value)}
                key={book}
                value={book}
              >
                {book}
              </option>
            ))}
          </Select>
          {<FaCaretDown size={18} />}
        </div>
        <div>
          <Select value={stateChapter} onChange={onChange}>
            {chapters?.map((chapters, i) => (
              <option
                onClick={(e) => setStateChapter(Number(e.currentTarget.value))}
                key={i}
                value={chapters}
              >
                {chapters}
              </option>
            ))}
          </Select>
          {<FaCaretDown size={18} />}
        </div>
      </ContainerSelect>
    </Container>
  )
}

export default SelectInput
