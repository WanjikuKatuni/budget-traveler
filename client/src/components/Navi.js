import React, { useState } from 'react'
import {GiAirplaneDeparture, GiTalk} from "react-icons/gi"
import {FaHome, FaSearch} from "react-icons/fa"
import {RiContactsBookFill} from "react-icons/ri"
import { Link } from 'react-router-dom'

function Navi() {
    const [input, setInput] = useState("")

    const submitHandler =(e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <span className='mapenilogo'><GiAirplaneDeparture/></span>
            <Link className='link' to={"/"}><h5 className="navbar-brand" id='logoname'> Mapeni Travels</h5></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"><FaHome/> Destinations</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link disabled"><GiTalk/> Reviews</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#"><RiContactsBookFill/> Contact Us</a>
                                </li>
                        </ul>
                        <form onSubmit={submitHandler} className="d-flex" role="search">
                                <input onChange={(e)=> setInput(e.target.value)}className="form-control me-2" type="text" value={input} placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-danger" type="submit"><FaSearch/></button>
                        </form>
                       
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navi