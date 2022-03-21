import '../styles/globals.css'
import '../components/Nav.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return   (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
