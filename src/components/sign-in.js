import {React, useState} from 'react'
import { Link } from 'react-router-dom'
export default function Signin(){

    const [sign, setSign]=useState({"email":"" , "password":""})

    function handleSignin(event){
        setSign(event.target.value)
    }
  return (
    <div className="login-page">
    <div className="login-container">
<form >
    <input  className="login-textbox" type="text" placeholder='email' value={sign.email} onChange={handleSignin}></input>
    <br/>
    <input className="login-textbox" type="password" placeholder='password' value={sign.password} onChange={handleSignin}></input>
</form>

    </div>
    <br/>

    <div className="login-prompt">
    <p className="login-text" >don't have an account?</p>
<Link className="signup" to="/signup">signup</Link>

</div>
    </div>
  )
}


