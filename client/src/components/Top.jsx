import React from 'react'
import { useEffect, useState } from 'react';

function Top() {

  const [destinations, setDestinations] = useState([])

  useEffect(()=> {
    getTop();
  }, [])


  // get top rated destinations
  const getTop = async()=> {
      fetch('/destinations')
      .then(res => res.json())
      .then(setDestinations)

      // const api = await fetch('/destinations');
      // const data = await api.json();
      // setTop(data.destination_name)

  };


  return (
    <div>

      <h1> Top Destinations</h1>

      {destinations.map((destination)=>{
        return (
          <div key={destination.id}>
            <p>{destination.destination_name}</p>
          </div>
        )
      })}


    </div>
  )
}

export default Top