import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'

import Content from '../../../../components/Content'
import ListAlphabet from '../../../../components/ListAlphabet'
import MainFooter from '../../../../components/MainFooter'
import MainHeader from '../../../../components/MainHeader'
import Pagination from '../../../../components/Pagination'
import Themes from '../../../../components/Themes'
import TitleHeader from '../../../../components/TitleHeader'

import alphabetList from '../../../../utils/alphabet'
import { pagination } from '../../../../utils/pagination'
import temas, { filterTemas } from '../../../../utils/temas'

interface ITemasProps {
  page: string
  filter: string
}

const Temas: React.FC<ITemasProps> = ({ page, filter }) => {
  const [pageSelected, setPageSelected] = useState(Number(page))

  const themeDisplayedPerPage = 40

  const temasFiltered = useMemo(() => {
    if (filter !== 'todos') {
      return temas
        .filter((tema) => {
          if (
            tema.substr(0, 1) === filter ||
            tema.substr(0, 1) === filter.toUpperCase()
          ) {
            return tema
          }
        })
        .sort()
    } else {
      return temas.sort()
    }
  }, [filter])

  const dataFiltered = useMemo(() => {
    return pagination(temasFiltered, Number(page), themeDisplayedPerPage)
  }, [page, temasFiltered])

  return (
    <>
      <MainHeader />
      <Content>
        <TitleHeader title="Temas na Bíblia" borderBottomComplet={true} />
        <ListAlphabet filter={filter} letters={alphabetList} />
        {dataFiltered.result !== [] && <Themes themas={dataFiltered.result} />}

        <Pagination
          pageSelected={pageSelected}
          filterSelected={filter}
          totalPages={dataFiltered.totalPage}
          url="/temas"
        />
      </Content>
      <MainFooter />
    </>
  )
}

export default Temas

export async function getStaticPaths() {
  let paths: object[] = []
  alphabetList.forEach((alph, i) => {
    const temasFiltered = filterTemas(alph)

    const { totalPage } = pagination(temasFiltered, 1, 40)

    if (totalPage === 1) {
      paths.push({
        params: {
          page: totalPage.toString(),
          filter: alph.toLowerCase()
        }
      })
    } else if (totalPage > 1) {
      for (let index = 1; index <= totalPage; index++) {
        paths.push({
          params: {
            page: index.toString(),
            filter: alph.toLowerCase(),
            total: totalPage
          }
        })
      }
    } else {
      return
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      page: params?.page,
      filter: params?.filter
    }
  }
}
