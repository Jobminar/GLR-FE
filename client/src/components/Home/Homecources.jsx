import React from 'react'
import Coursedata from './course'

const Homecources = () => {
  return (
    <>
        <div className='home-cources-con'>
             {Coursedata.map((course,index)=>{
                return(
                    <>
                        <div className='course-map-con' key={index}>
                            <div className='course-map-img'>
                                <img src={course.img} alt='courseimage'/>

                            </div>
                            <p>{course.desc}</p>
                        </div>
                    </>
                )
             })}
        </div>

    </>
  )
}

export default Homecources