import React, { useMemo, useState } from 'react'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Link from 'next/link'

import { Container } from './styles'

interface IPagination {
  totalPages: number
  pageSelected: number
  filterSelected: string
  url: string
}

const Pagination: React.FC<IPagination> = ({
  totalPages,
  pageSelected,
  filterSelected,
  url
}) => {
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

  return (
    <Container resize={resize} resizeP={resizeP}>
      {pageSelected >= 2 && totalPages >= 5 && (
        <Link
          href={`${url}/${(
            pageSelected - 1
          ).toString()}/${filterSelected.toLowerCase()}`}
        >
          <a className="button">
            {<MdKeyboardArrowLeft size={18} />}
            Anterior
          </a>
        </Link>
      )}

      <ul>
        {itemExibition.map((item) => (
          <li key={item} className={item === pageSelected ? 'active' : ''}>
            <Link
              href={`${url}/${item.toString()}/${filterSelected.toLowerCase()}`}
            >
              <a>{item}</a>
            </Link>
          </li>
        ))}
      </ul>

      {pageSelected <= totalPages - 3 && (
        <Link
          href={{
            pathname: `${url}/${(
              pageSelected + 1
            ).toString()}/${filterSelected.toLowerCase()}`
          }}
        >
          <a className="button">
            Próximo
            {<MdKeyboardArrowRight size={18} />}
          </a>
        </Link>
      )}
    </Container>
  )
}

export default Pagination
