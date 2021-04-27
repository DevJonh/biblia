import { AppProps } from 'next/app'
import Head from 'next/head'
import NextProgress from 'nextjs-progressbar'
import { BookProvider } from 'provider/bookAndTestament'
import GlobalStyle from 'styles/GlobalStyles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bíblia Sagrada</title>
        <link rel="shortcut icon" href="/logo.ico" />
        <link rel="apple-touch-icon" href="/logo.ico" />
        <meta
          name="description"
          content="A simple project started to work with Typescript, React, NextJS and Styled Components"
        />

        <meta name="theme-color" content="#06092b" />
      </Head>
      <GlobalStyle />
      <NextProgress
        color="#FE9534"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
      />
      <BookProvider>
        <Component {...pageProps} />
      </BookProvider>
    </>
  )
}

export default App
