import React from 'react'
import Design from '../Design/Design'
import Home from './Home'
import DetailView from './DetailView'
import { Route, Routes } from 'react-router-dom'
import About from './About'

function AppRoutes() {
  return (
   <Routes>
    <Route path="/" element={<Design/>}>
    <Route index element={<Home/>}></Route>
    <Route path="Movies" element={<Home/>} />
    </Route>

    <Route path="post/:id" element={<DetailView/>}></Route>
     <Route path="Movies" element={<Home/>} />
    

   </Routes>
  )
}

export default AppRoutes