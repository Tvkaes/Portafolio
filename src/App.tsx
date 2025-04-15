import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'


import { Home } from './pages/home'




function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
