import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Pages from "./components/Pages";
import Featured from "./components/Featured";
import Top from "./components/Top";
import {useEffect, useState} from "react";


function App() {

  const [destinations, setDestinations] = useState([])

  useEffect(()=> {
    getTop();
  }, [])


  // get top rated destinations
  const getTop = async()=> {
      fetch(`/destinations`)
      .then(res => res.json())
      .then(setDestinations)
  }

  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/featured" element={<Featured destinations={destinations}/>} />
        <Route path="/top" element={<Top destinations={destinations}/>} />
        <Route path="/" element={<Pages/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
