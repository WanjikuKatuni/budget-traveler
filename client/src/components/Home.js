import React from 'react'
import Alldestinations from './Alldestinations'
import Landing from './Landing'
import Navi from './Navi'
import Topdestinations from './Topdestinations'


function Home() {
  return (
    <div>
        <Navi/>
        <Landing/>
        <Topdestinations/>
        <Alldestinations/>

    </div>
  )
}

export default Home