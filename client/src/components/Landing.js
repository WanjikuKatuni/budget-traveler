import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import landingimg from '../assets/landingf.png'

function Landing() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-lg-4 col-sm-12 col-xl-s'>
                <br/><br/><br/><br/>
                    <h1 className='landing-header'><span id='find'>Find</span> your dream <FaCameraRetro/> destinations</h1>
                    <p className='landing-text'>Small budget? Find others like you, who went to beautiful destinations under a budget</p>
                    <p className='landing-text2'>Mapeni can take you places!!</p>
                </div>
                <div className='col-md-6 col-lg-6 col-sm-12 col-xl-6'>
                    <br/>
                    <img className='ing-fluid' src={landingimg} alt='landing-page-image'/>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing