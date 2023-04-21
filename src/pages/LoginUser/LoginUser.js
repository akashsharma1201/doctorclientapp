import React from 'react';
import "./LoginUser.css"
import {useState} from "react";
import {Link , useNavigate} from "react-router-dom";
import axios from "axios"
import signupLogin2 from "../../assests/signuplogin2_thumbnail.png"
import { MdOutlineMail } from 'react-icons/md';
import { AiTwotoneLock } from 'react-icons/ai';

const LoginUser = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const loginUser ={
    email : email ,
    password : password
  }


  const loginUserHandler = async () => {
    try {
      const response = await axios.post("https://doctorserverapp.vercel.app/app/api/user/login", loginUser)

      if(response.data){
        // console.log(response.data.data);
        localStorage.setItem("token" , response.data.token )
        navigate("/")
      }
      else{
        console.log("unable to login user");
      }
      // console.log(response);
      // console.log(response.data.token);

    } catch (error) {
      console.log(error);
    }
  }

  
  const formHandler = (event) => {
    event.preventDefault()
    console.log(email, password);
    if ( email && password ) {
      // alert("all field are filled !")
      loginUserHandler()
  
    } else {
      alert("all field are requird !...")
    }
  }
  return (
    <div className='sign-login-page'>
      <div className='container-fluid'>
        <div className='row'>
          
          <div className='col-md-6'>
            <div className=' form-box'>
              <form onSubmit={formHandler}>
                <h2>Login</h2>
                <div className='form-field'>
                  <MdOutlineMail />
                  <input type="email" value={email} placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='form-field'>
                  <AiTwotoneLock />
                  <input type="password" value={password} placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button>Login</button>
              </form>
            </div>
          </div>
          <div className='col-md-6 '>
            <div className='text-and-image-box-login'>
              <div className='text-box'>
                <h3>One of us ?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae quas magnam!</p>
                <Link to="/register">Sign Up</Link>
              </div>
              <img className='img-fluid d-none d-md-block' src={signupLogin2} />
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default LoginUser;