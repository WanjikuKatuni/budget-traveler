import React from 'react'

function Alldestinations() {


    const [destinations, setDestinations] = useState([])

    useEffect(()=> {
        getALl();
    }, [])


    const getAll = async()=>{
        fetch(`/destinations`)
        .then(res => res.json())
        .then(setDestinations)
    }


  return (
    <div>Alldestinations</div>
  )
}

export default Alldestinations