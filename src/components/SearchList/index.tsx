import Loading from 'components/Loading'
import PaginationSearch from 'components/PaginationSearch'
import { useBook } from 'provider/bookAndTestament'
import React, { useMemo, useState } from 'react'
import { paginationObject } from '../../utils/pagination'

//import Pagination from "../Pagination";

import { Container } from './styles'

export interface ISearchListProps {
  search: string
  verses: {
    book: {
      name: string
    }
    chapter: number
    number: number
    text: string
  }[]
}

const SearchList: React.FC<ISearchListProps> = ({ search, verses }) => {
  //const [verseData, setVerseData] = useState<object[]>();
  const themeDisplayedPerPage = 27
  const { page } = useBook()

  const dataFilteredPagination = useMemo(() => {
    const data = paginationObject(verses, page, themeDisplayedPerPage)
    return data
  }, [verses, page])

  if (!dataFilteredPagination) {
    return <Loading />
  }

  return (
    <Container>
      {dataFilteredPagination.result.map((verse, i) => (
        <div key={i}>
          <p>{verse.text}</p>
          <span>
            {verse.book.name} {verse.chapter}:{verse.number}
          </span>
        </div>
      ))}

      <PaginationSearch
        totalPages={dataFilteredPagination.totalPage}
        filterSelected={search}
        url="/search"
        datas={verses}
        pageSelected={page}
      />
    </Container>
  )
}

export default SearchList
