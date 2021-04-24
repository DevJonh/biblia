import React, { SyntheticEvent, useState } from 'react'
import emailjs from 'emailjs-com'
import { FaRegEnvelope, FaRegUser } from 'react-icons/fa'

import Content from '../../components/Content'
import MainFooter from '../../components/MainFooter'
import MainHeader from '../../components/MainHeader'
import TitleHeader from '../../components/TitleHeader'

import { Form } from './styles'
import { useRouter } from 'next/router'

const Contact: React.FC = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const route = useRouter()

  const handleContact = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .send(
        'service_xh350j3',
        'template_a53il7u',
        {
          from_name: nome,
          reply_to: email,
          mensagem: message
        },
        'user_HEkg6M4ZGQUKyVcsyra3I'
      )
      .then((result) => route.push('/success'))
      .catch((err) => route.push('/error'))
  }

  return (
    <>
      <MainHeader />
      <Content>
        <TitleHeader title="Fale Conosco" borderBottomComplet={true} />
        <Form onSubmit={handleContact}>
          <fieldset>
            <div>
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
              <span>{<FaRegUser size={18} />}</span>
            </div>

            <div>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span>{<FaRegEnvelope size={18} />}</span>
            </div>
          </fieldset>
          <textarea
            name="msg"
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">ENVIAR</button>
        </Form>
      </Content>
      <MainFooter />
    </>
  )
}

export default Contact
