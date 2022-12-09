
// holds description and budget data
import Navi from './Navi'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Destination() {
  
  let params = useParams();
  const [details, setDetails] = useState({})

  const fetchDetails = async()=>{
    fetch(`/destinations/${params.name}`)
    .then(res => res.json())
    .then(setDetails)

  };

  useEffect(()=>{
    fetchDetails();
  }, [params.name]);

  return (
    <div className='destination' >
      <Navi/>

            <div className="projcard-container">
      
              <div className="projcard projcard-blue">
                <div className="projcard-innerbox">
                  <img className="projcard-img" src={details.poster_url}/>
                  <div className="projcard-textbox">
                    <div className="projcard-title">{details.destination_name}</div>
                    <div className="projcard-subtitle"></div>
                    <div className="projcard-bar"></div>
                    <div className="projcard-description">{details.location}</div>
                    <div className="projcard-tagbox">
                      <span className="projcard-tag">{details.likes} likes</span>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="projcard projcard-red">
                <div className="projcard-innerbox">
                  <img className="projcard-img" src={details.poster_url} />
                  <div className="projcard-textbox">
                    <div className="projcard-title">Cost: ${details.cost}</div>
                    <div className="projcard-subtitle"></div>
                    <div className="projcard-bar"></div>
                    <div className="projcard-description">{details.description}</div>
                    <div className="projcard-tagbox">
                        {/* <button type="button" className="btn btn-danger">Add Review</button> 
                          <div className='divider'></div>
                        <button type="button" className="btn btn-danger">Add Review</button>  */}
                    </div>
                  </div>
                </div>
              </div>

    
            </div>
            <button type="button" className="btn btn-danger" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Add Review</button>
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div> 
                          <div className='divider'></div>
            <button type="button" className="btn btn-danger">Check Review</button> 

    </div>
  )
}

export default Destination