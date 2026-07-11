import React, { useEffect, useState } from 'react'

import axios from 'axios'

const ViewAll = () => {

    const[data,changData]=useState(

        [

            
        ]

    )
    const fetchData = () => {

        axios.get("http://192.168.33.245:5001/api/courses").then(

            (response) => {

                changData(response.data)

            }

        ).catch()

    }
    useEffect(

        () => {

            fetchData()

        },[]

    )
  return (
    <div>
        
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div className="row g-3">
           

           {data.map(
            (value,index) => {
                 
                return( 
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    
                    <div class="card h-100">
  <img src={value.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{value.course_name}</h5>
    <p class="card-text">{value.created_at}</p>
    <p class="card-text">{value.duration}</p>
    <p class="card-text">{value.fee}</p>
    <p class="card-text">{value.id}</p>
    <p class="card-text">{value.mode}</p>
    <p class="card-text">{value.trainer}</p>
    <a href="#" class="btn btn-primary">View Course</a>
  </div>
</div>
</div>)


            }
           )}

            
           
        </div>

        </div>
    </div>
</div>


    </div>
  )
}

export default ViewAll