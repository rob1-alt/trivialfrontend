
import Navigation from './Nav'
import Footer from './Footer'


export default function Layout({ children }) {
    console.log(Footer)
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer/>
    </>
  )
  
}

