import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Destination from './Destination'

function Pages() {
  return (

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destinations/:name' element={<Destination/>} />
    </Routes>
  )
}

export default Pages