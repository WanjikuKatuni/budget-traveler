import React from 'react'
import { GiTalk, GiCoins} from "react-icons/gi"
import {FaHome} from "react-icons/fa"
import {RiContactsBookFill} from "react-icons/ri"
import { Link } from 'react-router-dom'

function Navi() {

  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <span className='mapenilogo'><GiCoins/></span>
            <Link className='link' to={"/"}><h5 className="navbar-brand" id='logoname'> Mapeni Travels</h5></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to={"/"} aria-current="page"><FaHome/> Destinations</Link>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link disabled"><GiTalk/> Reviews</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link disabled" href="#"><RiContactsBookFill/> Login</a>
                                </li>
                        </ul>

                       
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navi