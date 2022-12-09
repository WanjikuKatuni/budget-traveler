
// holds description and budget data
import Navi from './Navi'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    <div className='destination'>
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
                      <button type="button" class="btn btn-danger">Check Reviews</button> 
                      <div className='divider'></div>
                      <button type="button" class="btn btn-danger">Add Review</button>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* <div class="projcard projcard-green">
                <div class="projcard-innerbox">
                  <img class="projcard-img" src="https://picsum.photos/800/600?image=1039" />
                  <div class="projcard-textbox">
                    <div class="projcard-title">And a Third Card</div>
                    <div class="projcard-subtitle">You know what this is by now</div>
                    <div class="projcard-bar"></div>
                    <div class="projcard-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
                    <div class="projcard-tagbox">
                      <span class="projcard-tag">Excel</span>
                      <span class="projcard-tag">VBA</span>
                    </div>
                  </div>
                </div>
              </div> */}
{/*     
              <div class="projcard projcard-customcolor" style="--projcard-color: #F5AF41;">
                <div class="projcard-innerbox">
                  <img class="projcard-img" src="https://picsum.photos/800/600?image=943" />
                  <div class="projcard-textbox">
                    <div class="projcard-title">Last Card</div>
                    <div class="projcard-subtitle">That's the last one. Have a nice day!</div>
                    <div class="projcard-bar"></div>
                    <div class="projcard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    <div class="projcard-tagbox">
                      <span class="projcard-tag">iOS</span>
                      <span class="projcard-tag">Android</span>
                      <span class="projcard-tag">Cordova</span>
                    </div>
                  </div>
                </div>
              </div> */}
    
            </div>
    </div>
  )
}

export default Destination