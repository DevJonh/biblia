import React, { useMemo } from 'react'
import { AlphabetItem, AlphabetList, Alphabet } from './styles'

import temas from '../../utils/temas'
import Link from 'next/link'

interface IListAlphabetProps {
  letters: string[]
  filter: string
}

const ListAlphabet: React.FC<IListAlphabetProps> = ({ letters, filter }) => {
  const lettersUsed = useMemo(() => {
    let datas: string[] = []
    letters.forEach((letter) => {
      return temas.forEach((tema) => {
        if (letter === tema.substr(0, 1)) {
          datas.push(letter)
        }
      })
    })
    const datasFinished = datas.filter((data, index) => {
      return index === datas.indexOf(data)
    })

    return datasFinished
  }, [letters])

  return (
    <>
      <AlphabetList>
        <Alphabet>
          {letters.map((letter, i) => (
            <AlphabetItem
              key={letter}
              className={`${letter === filter.toUpperCase() ? 'active' : ''} ${
                lettersUsed.includes(letter) || letter.includes('TODOS')
                  ? ''
                  : 'disabled'
              }`}
            >
              <Link href={`/temas/1/${letter.toLowerCase()}`}>
                <a>{letter}</a>
              </Link>
            </AlphabetItem>
          ))}
        </Alphabet>
      </AlphabetList>
    </>
  )
}

export default ListAlphabet
