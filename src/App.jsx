import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import NewsEvents from './pages/NewsEvents'
import Academics from './pages/Academics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/news' element={<NewsEvents/>}/>
      <Route path='/academics' element={<Academics/>}/>



    </Routes>
      <Footer/>
    </>
  )
}

export default App
