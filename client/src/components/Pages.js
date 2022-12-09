import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Destination from './Destination'
import Reviews from './Reviews'

function Pages() {
  return (

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destinations/:name' element={<Destination/>} />
        <Route path='/reviews/:name' element={<Reviews/>} />
    </Routes>
  )
}

export default Pages