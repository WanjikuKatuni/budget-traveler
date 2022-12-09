import React, { useState } from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import landingimg from '../assets/landingf.png'


function Landing() {

    // const [place, setPlace] = useState('')
    // const [location, setLocation] = useState('')
    // const [cost, setCost] = useState('')
    // const [description, setDescription]=useState('')
    // const [image, setImage] =useState('')

    
        

    const [formData, setFormData]= useState({
            destination_name: "",
            location: "",
            cost: "",
            description:"",
            poster_url:"",
    });

    function onChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function onSubmit(e){
        e.preventDefault()

        const newDestination = {
         ...formData,
         likes:0
        };

        fetch('/destinations',{
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(newDestination),
        })
        .then((r)=> r.json())
        .then(newDestination)
    
    
    }

  return (
    <div>
        <div className='container-fluid' id='landing-page' >
            <div className='row'>
                <div className='col-md-4 col-lg-4 col-sm-12 col-xl-s'>
                <br/><br/><br/><br/>
                    <h1 className='landing-header'><span id='find'>Find</span> your dream <FaCameraRetro/> destinations</h1>
                    <p className='landing-text'>Small budget? Find others like you, who went to beautiful destinations under a budget</p>
                    <p className='landing-text2'>Mapeni can take you places!!</p>
                    <button type="button" className="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Add A Place Youve Been To On a Budget</button>

                </div>
                <div className='col-md-6 col-lg-6 col-sm-12 col-xl-6'>
                    <br/>
                    <img className='ing-fluid' src={landingimg} alt='landing-page-image'/>
                    
                </div>

                {/* button */}
                        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div className="offcanvas-header">
                            <h3 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"> Add Budget Destination</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                            <p>Add info on the destination you have been to on a budget to help others plan and spend better</p>
                            <form onSubmit={onSubmit}>
                                    <div class="row mb-3">
                                        <label class="col-sm-4 col-form-label">Place</label>
                                        <div class="col-sm-10">
                                            <input type="text" name="destination_name" class="form-control" value={formData.destination_name} onChange={onChange}/>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label  class="col-sm-4 col-form-label">Location</label>
                                        <div class="col-sm-10">
                                            <input type="text" name="location" onChange={onChange} class="form-control" value={formData.location} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label  class="col-sm-4 col-form-label">Cost</label>
                                        <div class="col-sm-10">
                                            <input type="text" name="cost" onChange={onChange} class="form-control" value={formData.cost} />
                                        </div>
                                    </div>
                                    
                                    <div class="row mb-3">
                                        <label  class="col-sm-4 col-form-label">Description</label>
                                        <div class="col-sm-10">
                                            <textarea type="text" name="description" onChange={onChange} rows="6" class="form-control" value={formData.description}>Enter description of budget and costs. Be as detailed as possible....</textarea>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label class="col-sm-4 col-form-label">Image url</label>
                                        <div class="col-sm-10">
                                            <input type="text" name="poster_url" onChange={onChange} class="form-control" value={formData.poster_url} />
                                        </div>
                                    </div>
                                    <button type="submit" class="btn">Submit</button>
                            </form>
                            </div>
                        </div> 
            </div>
        </div>
    </div>
  )
}

export default Landing