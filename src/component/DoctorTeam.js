import React from 'react'
import { doctorTeamSectionData } from './data';
import "./DoctorTeam.css"
import { Link } from 'react-router-dom';


const DoctorTeam = () => {
  return (
    <div className='doctor-team-section py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 section-heading'>
            <h2>Meet Our Doctors</h2>
          </div>
          {
            doctorTeamSectionData.map((item, index) => {
              return (
                <div className='col-lg-4 col-md-6 mt-4 mt-lg-0'>
                  <div className='doctor-card'>
                    <div className='doctor-image-box'>
                      <img src={item.image} alt="doctor" className='img-fluid doctor-image' />
                      <Link to="#">Get Appointment</Link>
                    </div>

                    <div className='text-content'>
                      <h4>{item.name}</h4>
                      <p>{item.department}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default DoctorTeam