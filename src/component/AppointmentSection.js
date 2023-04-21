import React from 'react'
import AppointmentForm from './AppointmentForm';
import "./AppointmentSection.css"

const AppointmentSection = () => {
    return (
        <div className='appointment-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 px-lg-5 mx-auto'>
                        <AppointmentForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentSection