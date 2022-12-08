import React from 'react'
import { useEffect, useState } from 'react';
// import Card  from 'react-bootstrap/Card';
// import Col from 'react-bootstrap';
// import Row from 'react-bootstrap';
// import styled from 'styled-components';

function Top() {

  const [destinations, setDestinations] = useState([])

  useEffect(()=> {
    getTop();
  }, [])


  // get top rated destinations
  const getTop = async()=> {
      fetch(`/destinations`)
      .then(res => res.json())
      .then(setDestinations)

      // const api = await fetch('/destinations');
      // const data = await api.json();
      // setTop(data.destination_name)

  };


  return (
    <div>
      <h3> Top Destinations</h3>
      <div className='row row-cols-1 row-cols-md-3 g-4 '>
        {destinations.map((destination)=>{
          return(
                 <div key={destination.id} className='col'>
                  <div  className='card'>
                    <img src={destination.poster_url} className='card-img-top' alt={destination.destination_name}/>
                    <div className='card-body'>
                      <p className='card-text'>{destination.destination_name}</p>
                    </div>
                    <div className='card-footer'>
                        <small className='text-muted'>{destination.likes} likes</small>
                    </div>
                  </div>
                </div>
                )
              })}
       </div>
    </div>
  )
}


export default Top;


