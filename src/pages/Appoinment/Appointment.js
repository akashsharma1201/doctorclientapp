import React from 'react'
import Banner from '../../component/Banner'
import AppointmentForm from '../../component/AppointmentForm';
import "./Appoinment.css";
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const Appointment = () => {
    return (
        <>
            <Navbar />
            <Banner title="Appointment" />
            <div className="appointment">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 mx-auto'>
                            <AppointmentForm />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Appointment