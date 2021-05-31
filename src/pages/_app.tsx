
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <Head>
        <title>Challenge Login Gavea</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />

        <meta name="description" content="Challenge Login Gavea" />


      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
