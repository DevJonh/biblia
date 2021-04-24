import { IListBookProps } from 'components/ListBook'
import { createContext, useContext, useState } from 'react'

interface IBookContextProps {
  book: IListBookProps | undefined
  bookAT: IListBookProps | undefined
  bookNT: IListBookProps | undefined
  setBook(data: IListBookProps): void
  setAT(data: IListBookProps): void
  setNT(data: IListBookProps): void
  setPg(number: number): void
  page: number
}

const BookContext = createContext<IBookContextProps>({} as IBookContextProps)

export const BookProvider: React.FC = ({ children }) => {
  const [book, setBook] = useState<IListBookProps | undefined>()
  const [bookAT, setBookAT] = useState<IListBookProps | undefined>()
  const [bookNT, setBookNT] = useState<IListBookProps | undefined>()
  const [page, setPage] = useState(1)

  const setBookComplete = (data: IListBookProps) => {
    setBook(data)
  }
  const setAT = (data: IListBookProps) => {
    setBookAT(data)
  }
  const setNT = (data: IListBookProps) => {
    setBookNT(data)
  }
  const setPg = (number: number) => {
    setPage(number)
  }

  return (
    <BookContext.Provider
      value={{
        page,
        book,
        bookAT,
        bookNT,
        setBook: setBookComplete,
        setAT,
        setNT,
        setPg
      }}
    >
      {children}
    </BookContext.Provider>
  )
}

export const useBook = () => {
  const context = useContext(BookContext)
  return context
}
