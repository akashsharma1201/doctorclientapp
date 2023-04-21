import React from 'react';
import { countrSectionData } from './data';
import { HiUserGroup } from "react-icons/hi";
import "./CounteSection.css";


const CounteSection = () => {
  return (
    <div className='count-section py-5'>
      <div className='container'>
        <div className='row counters-box py-5'>
          {
            countrSectionData.map((item, index) => {
              return (
                <div className='col-lg-3 col-md-4 col-sm-6 ' key={index}>
                  <div className='counte-number-card'>
                    <HiUserGroup />
                    <h2>{item.number}</h2>
                    <h4>{item.department}</h4>
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

export default CounteSection