import { IListBookProps } from 'components/ListBook'

export interface IBooks {
  abbrev: {
    pt: string
    en: string
  }
  author: string
  chapters: number
  group: string
  name: string
  testament: string
}

export interface IChapterAtual {
  book: {
    abbrev: { pt: string; en: string }
    name: string
    author: string
    group: string
    version: string
  }
  chapter: {
    number: number
    verses: number
  }
  verses: { number: number; text: string }[]
}

export interface ITotalBooks {
  booksAT: IListBookProps
  booksNT: IListBookProps
}

export interface ITotalCharpters {
  chapterAtual: IChapterAtual
  charptes: number
  nameBooks: {
    book: string
    chapters: number
  }[]
  version: string[]
}
