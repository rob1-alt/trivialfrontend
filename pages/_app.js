import '../styles/globals.css'
import '../components/Nav.css'
import '../components/produit.css'
import Layout from '../components/layout'
import '../components/Footer.css'
import '../components/LandinPage.css'

function MyApp({ Component, pageProps }) {
  return   (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
