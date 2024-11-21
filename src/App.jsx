import ResponsiveAppBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Gallery from './components/Gallery/Gallery'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div style={{ marginTop: '69px' }}>
      <ResponsiveAppBar />
      <Header />
      <Gallery />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
