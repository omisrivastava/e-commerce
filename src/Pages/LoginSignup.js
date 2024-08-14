import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div  className='Loginsignup'>
      <div className='Loginsignup-container'>
        <h1>Signup</h1>
        <div className='Loginsignup-fields'>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email-Address'/>
          <input type='password' placeholder='password'></input>
        </div>
        <button>Continue</button>
        <p className='Loginsignup-login'>Already have an account?<span>Login Here</span></p>
        <div className='Loginsignup-agree'>
          <input type="checkbox" name='' id=''></input>
          <p>By continuing,i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
