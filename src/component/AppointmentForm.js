import React, { useState } from 'react';
import { FaUserTie } from "react-icons/fa";
import { MdEmail, MdMiscellaneousServices } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import "./AppoinmentForm.css";
import axios from 'axios';
import { Navigate } from 'react-router-dom';



const AppointmentForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [service, setService] = useState("")
    const [doctor, setDoctor] = useState("")
    const [age, setAge] = useState("")



    const newAppointment = {
        name: name,
        email: email,
        phone: phone,
        service: service,
        doctor: doctor,
        age: age
    }

    // const headers = {
    //     'Authorization': `Bearer ${localStorage.getItem("token")}`
    // }

    const token = localStorage.getItem("token")
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const appointmentHandler = async () => {
        try {
            const response = await axios.post("https://doctorserverapp.vercel.app/app/api/appointment/bookappointment", newAppointment, config)
            console.log("send booking", response);
        } catch (error) {
            console.log(error);
        }
    }
    const formHandler = (e) => {
        e.preventDefault()

        if (name && email && phone && service && doctor && age) {
            appointmentHandler()

            setName("")
            setEmail("")
            setPhone("")
            setService("")
            setDoctor("")
            setAge("")
        } else {
            alert("all fields are required !!!!")
        }

    }
    return (
        <div className='appointment-form-box'>
            <form onSubmit={formHandler}>
                <div className='form-text'>
                    <h3>Book your appointment</h3>
                    <p>We will confirm your appointment within 2 hours</p>
                </div>
                <div className='fields-layout'>
                    <div className='field-layout'>
                        <div className='field-icon'>
                            <FaUserTie />
                        </div>
                        <div className='form-field'>
                            <label>Name</label>
                            <input type='text' value={name} name='name' placeholder='Enter Your Name' onChange={(event) => setName(event.target.value)} />
                        </div>
                    </div>
                    <div className='field-layout'>
                        <div className='field-icon'>
                            <MdEmail />
                        </div>
                        <div className='form-field'>
                            <label>Email</label>
                            <input type='text' value={email} name='email' placeholder='Enter Your Email' onChange={(event) => setEmail(event.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='fields-layout'>
                    <div className='field-layout'>
                        <div className='field-icon'>
                            <BsTelephoneFill />
                        </div>
                        <div className='form-field'>
                            <label>Phone</label>
                            <input type='text' value={phone} name='phone' placeholder='Enter Your Number' onChange={(event) => setPhone(event.target.value)} />
                        </div>
                    </div>
                    <div className='field-layout'>
                        <div className='field-icon'>
                            <MdMiscellaneousServices />
                        </div>
                        <div className='form-field'>
                            <label>Services</label>
                            <input type='text' value={service} name='services' placeholder='Dental Care' onChange={(event) => setService(event.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='fields-layout'>
                    <div className='field-layout'>
                        <div className='field-icon'>
                            <FaUserTie />
                        </div>
                        <div className='form-field'>
                            <label>Doctor</label>
                            <input type='text' value={doctor} name='doctor' placeholder='Choose Your Doctor' onChange={(event) => setDoctor(event.target.value)} />
                        </div>
                    </div>
                    <div className='field-layout'>
                        <div className='field-icon'>
                            <FaUserTie />
                        </div>
                        <div className='form-field'>
                            <label>Age</label>
                            <input type='text' value={age} name='age' placeholder=' Your age' onChange={(event) => setAge(event.target.value)} />
                        </div>
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AppointmentForm