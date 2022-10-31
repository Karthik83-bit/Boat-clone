import React from 'react'
import { useState } from 'react'
import {Link, unstable_HistoryRouter }from 'react-router-dom'
import '../Styles/login.css'
import fb from '../images/fblogo.png'
import google from '../images/googlelogo.png'
import {useNavigate}  from 'react-router-dom'
import { auth } from '../config/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useStateValue } from './StateProvider'
// import { useStateValue } from './StateProvider'

export default function Login() {
  const navigate=useNavigate();
 const [state,dispatch] =useStateValue()
  const [formData, setFormData] = useState({})
  const handleSubmit=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,formData.email,formData.password).then((cred)=>{console.log(cred)
      dispatch({
        type:"setUser",
        payload:{id:cred.user.uid,
        name:cred.user.name}
      })
    navigate("/");}).catch((err)=>console.log(err));
   
    
  }
  const inputHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  console.log(formData)
  return (

    <div className='login-wrap'>
             <p className='form-name'>LOGIN</p>
             <p>Please enter your email and passord:</p>
            <div className='auth-opt'>
              <div className='fb-img'>
                <img src={fb} />
              </div>
              <div className='ggl-img'>
                <img src={google} />
              </div>
            </div>
        <form className='login-form' onSubmit={handleSubmit}>
   
            <div className='name-wrap'>
            <input className='mail' type='mail' name='email' onChange={inputHandler} required autoComplete='off'/> <label htmlFor='username' className='nm-lbl'>Username</label>
            
            </div>
            <div className='pwd-wrap'>
            <input className='password' type='password' name='password' onChange={inputHandler} required/><label className='pwd-lbl' htmlFor='password'>Password</label><Link className='label-frg' to='' style={{color:'whitesmoke'}}>ForgotPassword</Link>
            </div>
            
            <button className='submit-btn' onClick={handleSubmit}><p>LOGIN</p></button>
            <p>New Customer? <Link className='link' to="">Create an account</Link></p>
        </form>
    </div>
  )
}
