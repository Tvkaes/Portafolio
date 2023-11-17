import { BrowserRouter } from 'react-router-dom'
import { About, Works,Skills, Contact } from './components'
import {Hero} from './components'
import Navbar from './components/Navbar'



function App() {

  return (
    <>
    <BrowserRouter>
      <div className='relative '>
        <Navbar />
        <Hero />
        {/* <Works /> */}
        <About />
        <Skills />
        <Contact />
        
      </div>
    </BrowserRouter>
     
    </>
  )
}

export default App
