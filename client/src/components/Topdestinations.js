import React, { useEffect, useState } from 'react'

function Topdestinations() {
    const [destinations, setDestinations] = useState([])

    useEffect(()=> {
        getTopdestinations();
    }, [])


    const getTop = async()=>{
        fetch(`/destinations`)
        .then(res => res.json())
        .then(setDestinations)
    }



  return (
    <div>
        <h3 className='header'> Top Destinations</h3>
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

export default Topdestinations