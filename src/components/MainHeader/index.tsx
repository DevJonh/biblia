import React, { SyntheticEvent, useEffect, useState } from 'react'

import Link from 'next/link'

import { useRouter } from 'next/router'
import { FaSistrix } from 'react-icons/fa'

import { Container, Form, MenuList, MenuContainer, ListItem } from './styles'

const MainHeader: React.FC = () => {
  const history = useRouter()

  const [search, setSearch] = useState('')
  const [input, setInput] = useState<HTMLInputElement | null>()

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    history.push(`/search/${search}`)
    setSearch('')
  }

  return (
    <Container>
      <div>
        <h2>
          <Link href="/">
            <a>
              <img src="/img/logo.png" alt="Mundo Bíblia" />
              <section>
                <p>MUNDO</p>
                <span>BÍBLIA</span>
              </section>
            </a>
          </Link>
        </h2>

        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Pesquisar na Bíblia..."
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button type="submit">{<FaSistrix size={20} />}</button>
        </Form>
      </div>

      <MenuContainer>
        <MenuList>
          <ListItem>
            <Link href="/testamento/antigo">
              <a>ANTIGO TESTAMENTO</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/testamento/novo">
              <a>NOVO TESTAMENTO</a>
            </Link>
          </ListItem>
        </MenuList>
        <MenuList>
          <ListItem>
            <Link href="/temas/1/todos">
              <a>TEMAS</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/contato">
              <a>CONTATO</a>
            </Link>
          </ListItem>
        </MenuList>
      </MenuContainer>
    </Container>
  )
}

export default MainHeader
