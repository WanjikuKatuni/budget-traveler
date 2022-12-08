import React from 'react'
import Alldestinations from './Alldestinations'
import Navi from './Navi'
import Topdestinations from './Topdestinations'

function Home() {
  return (
    <div>
        <Navi/>
        <Topdestinations/>
        <Alldestinations/>
    </div>
  )
}

export default Home