// import React from 'react'
// import {useEffect, useState} from "react"
// import {useParams} from "react-router-dom"

// function Destination() {

//   let params = useParams();
//   const [destinationDetails, setDestinationDetails] = useState({})

//   const fetchDestinationDetails = async()=>{
   
//     fetch(`/destinations${params.name}`)
//     .then(res => res.json())
//     .then(setDestinationDetails)

//     useEffect(()=>{
//       fetchDestinationDetails();
//     }, [params.name]);

//   }

//   return (
//     <div>{destinationDetails.title}</div>
//   )
// }

// export default Destination