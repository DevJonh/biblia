import React, { useMemo, useState } from 'react'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

import { Button, Container } from './styles'
import { IVersesProps } from 'pages/search/[thema]'
import { useBook } from 'provider/bookAndTestament'

interface IPagination {
  datas: IVersesProps[]
  totalPages: number
  pageSelected: number
  filterSelected: string
  url: string
}

const Pagination: React.FC<IPagination> = ({ totalPages, pageSelected }) => {
  let [resize, setResize] = useState(false)
  let [resizeP, setResizeP] = useState(false)

  let itemExibition = useMemo(() => {
    if (totalPages < 5) {
      let res: number[] = []
      for (let i = 1; i <= totalPages; i++) {
        res.push(i)
      }
      if (res.length === 1) {
        setResizeP(true)
      }
      setResize(true)
      return res
    } else if (pageSelected > totalPages - 3) {
      return [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      ]
    } else if (pageSelected >= 3) {
      return [
        pageSelected - 2,
        pageSelected - 1,
        pageSelected,
        pageSelected + 1,
        pageSelected + 2
      ]
    } else {
      return [1, 2, 3, 4, 5]
    }
  }, [pageSelected, totalPages])

  const { setPg } = useBook()

  return (
    <Container resize={resize} resizeP={resizeP}>
      {pageSelected >= 2 && totalPages >= 5 && (
        <Button
          resize={resize}
          resizeP={resizeP}
          className="button"
          onClick={() => setPg(pageSelected - 1)}
        >
          {<MdKeyboardArrowLeft size={18} />}
          Anterior
        </Button>
      )}

      <ul>
        {itemExibition.map((item) => (
          <li key={item} className={item === pageSelected ? 'active' : ''}>
            <Button
              resize={resize}
              resizeP={resizeP}
              onClick={() => {
                setPg(item)

                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              {item}
            </Button>
          </li>
        ))}
      </ul>

      {pageSelected <= totalPages - 3 && (
        <Button
          resize={resize}
          resizeP={resizeP}
          className="button"
          onClick={() => {
            setPg(pageSelected + 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Próximo
          {<MdKeyboardArrowRight size={18} />}
        </Button>
      )}
    </Container>
  )
}

export default Pagination
