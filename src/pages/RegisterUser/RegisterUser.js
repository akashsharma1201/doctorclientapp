import React from 'react';
import { useState } from 'react';
import "./RegisterUser.css";
import axios from 'axios';
import signupLogin2 from "../../assests/signuplogin2_thumbnail.png"
import { BiUser } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';
import { AiTwotoneLock } from 'react-icons/ai';
import { Link ,useNavigate } from "react-router-dom"

const RegisterUser = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setRepassword] = useState("")
  const navigate = useNavigate()



  const newUser = {
    name: name,
    email: email,
    password: password,
    repassword: repassword
  }


  const registerUserHandler = async () => {
    try {
      const response = await axios.post("http://localhost:5000/app/api/user/register", newUser)
      if(response.data.user){
        navigate("/login")
      }else{
        // console("unable to register user !")
        alert("unable to register user !");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }


  const formHandler =async (event) => {
    event.preventDefault()
    console.log(name, email, password, repassword);
    if (name && email && password && repassword) {
      if (password == repassword) {
        // alert("password and repassword are  same !")
        registerUserHandler()
        setName("")
        setEmail("")
        setPassword("")
        setRepassword("")
        
      } else {
        alert("password and repassword are not same !")
      }

    } 
    else {
      alert("all field are requird !...")
    }
  }

  return (
    <div className='sign-up-page'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 '>
            <div className='text-and-image-box'>
              <div className='text-box'>
                <h3>One of us ?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae quas magnam!</p>
                <Link to="/login">Login</Link>
              </div>
              <img className='img-fluid d-none d-md-block' src={signupLogin2} alt="image-sign"/>
            </div>

          </div>
          <div className='col-md-6'>
            <div className=' form-box'>
              <form onSubmit={formHandler}>
                <h2>Sign Up </h2>
                <div className='form-field'>
                  <BiUser />
                  <input type="text" value={name} placeholder='Name' onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className='form-field'>
                  <MdOutlineMail />
                  <input type="email" value={email} placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='form-field'>
                  <AiTwotoneLock />
                  <input type="password" value={password} placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className='form-field'>
                  <AiTwotoneLock />
                  <input type="password" value={repassword} placeholder='Repassword ' onChange={(e) => { setRepassword(e.target.value) }} />
                </div>
                <button>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default RegisterUser
