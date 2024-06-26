import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../screens/Home/Home'
import About from '../screens/About/About'
import Resume from '../screens/Resume/Resume'
import Skills from '../screens/Skills/Skills'
import Contact from '../screens/Contact/Contact'
import Projects from '../screens/Projects/Projects'
const Router = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/About' element={< About/>}/>
        <Route path='/Resume' element={< Resume/>}/>
        <Route path='/Skills' element={< Skills/>}/>
        <Route path='/Contact' element={< Contact/>}/>
        <Route path='/Projects' element={< Projects/>}/>
       </Routes>
       
    </div>
  )
}

export default Router
