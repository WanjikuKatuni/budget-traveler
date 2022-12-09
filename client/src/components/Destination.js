
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
            <button type="button" className="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Add Reviews</button>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                  <h3 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"> Reviews for {details.destination_name}</h3>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <p>Rating is in a 0 to 5 star rating and comment can be as long as you like</p>
                  <form>
                        <div class="row mb-3">
                          <label for="inputEmail3" class="col-sm-2 col-form-label">Rating</label>
                          <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3"/>
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label for="inputPassword3" class="col-sm-2 col-form-label">Comment</label>
                          <div class="col-sm-10">
                            <textarea type="password" rows="4" class="form-control" id="inputPassword3">Enter comment here....</textarea>
                          </div>
                        </div>
                        <button type="submit" class="btn btn-danger">Submit Review</button>
                                        </form>
                </div>
            </div>           

            <div className='divider'></div>

            <button type="button" className="btn">Check Reviews</button>
            

    </div>
  )
}

export default Destination