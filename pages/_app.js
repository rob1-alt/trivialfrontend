import '../styles/globals.css'
import '../components/Nav.css'
import '../components/produit.css'
import Layout from '../components/Layout'
import '../components/Footer.css'
import '../components/Landinpage.css'
import '../components/cycling.css'
import '../components/ranking.css'


function MyApp({ Component, pageProps }) {
  return   (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
