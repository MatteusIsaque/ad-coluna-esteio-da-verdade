import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Music from '../components/globals/music'
import Nav from '../components/globals/nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      {/* <Music /> */}
    </>
  )
}

export default MyApp
