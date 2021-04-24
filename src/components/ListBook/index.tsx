import React from 'react'
import Link from 'next/link'
import { TestamentList, VersicleItem, BookList, ListVersicle } from './styles'

export interface IListBookProps {
  testament: string
  books: string[]
}

const ListBook: React.FC<IListBookProps> = ({ testament, books }) => {
  return (
    <>
      <BookList>
        <TestamentList>{testament.toUpperCase()}</TestamentList>
        <ListVersicle>
          {books.map((book) => (
            <VersicleItem key={book}>
              <Link href={`/${book}/1`}>
                <a>{book}</a>
              </Link>
            </VersicleItem>
          ))}
        </ListVersicle>
      </BookList>
    </>
  )
}

export default ListBook
