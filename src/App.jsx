import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './views/Home'
import { Carrito } from './views/Carrito'
import Detail  from './views/Detail'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import './App.css'

const App = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:name' element={<Detail/>}/>
        <Route path='/carrito' element={<Carrito/>}/>

      </Routes>
    </>
  )
}

export default App
