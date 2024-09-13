import { useState } from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Rootlaout from './layouts/Rootlaout'
import Home from './pages/Home'
import Prodcut from './pages/Prodcut'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
// const outer = createBrowserRouter ([
//   {
//     path:'',
//     element:<Rootlaout/>,
//     children:[
//       {path:'/', element:<Home/>},
//       {path:'prodcut', element:<Prodcut/>},
//       {path:'portfolio', element:<Portfolio/>},
//       {path:'contact', element:<Contact/>},
//     ]
//   }
// ])


function App() {
  

  return (
    <>
     
      <Router>
      <Rootlaout/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/prodcut' element={<Prodcut/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
     
    </>
  )
}

export default App
