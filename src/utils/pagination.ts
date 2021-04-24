import { IVersesProps } from 'pages/search/[thema]'

export const pagination = (
  items: string[],
  pageActual: number,
  limitItems: number
) => {
  let result = []
  let totalPage = Math.ceil(items.length / limitItems)
  let count = pageActual * limitItems - limitItems
  let delimiter = count + limitItems

  if (pageActual <= totalPage) {
    for (let i = count; i < delimiter; i++) {
      if (items[i] != null) {
        result.push(items[i])
      }
      count++
    }
  }

  return { result, totalPage }
}

export const paginationObject = (
  items: IVersesProps[],
  pageActual: number,
  limitItems: number
) => {
  let result: IVersesProps[] = []
  let totalPage = Math.ceil(items.length / limitItems)
  let count = pageActual * limitItems - limitItems
  let delimiter = count + limitItems

  if (pageActual <= totalPage) {
    for (let i = count; i < delimiter; i++) {
      if (items[i] != null) {
        result.push(items[i])
      }
      count++
    }
  }

  return { result, totalPage }
}

export default {
  pagination,
  paginationObject
}
