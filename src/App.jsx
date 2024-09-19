import { Element } from 'react-scroll'
import './App.css'
import Hero from './sections/hero'
import About from './sections/about'
import Tracks from './sections/tracks'
import Seemelive from './sections/seemelive'
import OwnThatStage from './sections/ownThatStage'
import Footer from './sections/footer'

function App() {
  

  return (
    <>
      <Element name="home">
        <Hero/>
      </Element>
      <Element name='about-me'>
        <About/>
      </Element>
      <Element name='music'>
        <Tracks/>
      </Element>
      <Element name='see-me-live'>
        <Seemelive/>
      </Element>
      <Element name='my-initiatives'>
        <OwnThatStage/>
      </Element>
      <Element name='contact'>
        <Footer/>
      </Element>
    </>
  )
}

export default App
