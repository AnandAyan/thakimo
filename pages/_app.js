import '../styles/styles.scss';
import Head from 'next/head'
import Image from 'next/image'
import logo from '../assets/Tokhimo_Logo_G.png'
import Menu from '../components/menu'

function MyApp({ Component, pageProps }) {
  // const getLayout = Component.getLayout || ((page) => page);

  return <>
   <Head>
        <title>Tokhimo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
  <header>
   <a className="navbar-brand" href="#"><Image src={logo} alt="Tokhimo" /></a>
    <Menu/>
  </header>
  <Component {...pageProps} />
  </>
  // return getLayout(<Component {...pageProps} />)
}

export default MyApp
