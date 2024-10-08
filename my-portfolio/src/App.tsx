import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import GivingBackPage from './pages/GivingBackPage/GivingPackPage'
import StreetPage from './pages/StreetPage/StreetPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/contact' element={<ContactPage/>}></Route>
      <Route path='/giving-back' element={<GivingBackPage/>}></Route>
      <Route path='/street' element={<StreetPage/>}></Route>
      <Route path='*' element={<NotFoundPage/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
