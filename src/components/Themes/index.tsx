import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

interface IThemeProps {
  themas: string[]
}

const Themes: React.FC<IThemeProps> = ({ themas }) => {
  return (
    <Container>
      <ul>
        {themas.map((theme) => (
          <li key={theme}>
            <Link href={`/search/${theme.toLowerCase()}`}>
              <a>{theme}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Themes
