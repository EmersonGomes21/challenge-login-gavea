import { AppProps } from 'next/app';
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import { AuthProvider } from '../utils/contexts/AuthContext';
function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>Challenge Login Gavea</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <meta
          name="description"
          content="Challenge Login Gavea"
        />
      </Head>

    <GlobalStyles />
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>

      </>
  )
}

export default App