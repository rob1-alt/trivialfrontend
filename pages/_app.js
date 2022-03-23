import '../styles/globals.css'
import '../components/Nav.css'
import Layout from '../components/layout'
import '../components/Footer.css'

function MyApp({ Component, pageProps }) {
  return   (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
