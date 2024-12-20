import {React, useState} from 'react'

export default function Login(){
const [user, setUser]=useState({"Firstname":"", "Lastname":"","email":"", "Password":"","phone number":""})

function fillIn(event){
    setUser(event.target.value)
}

return (

<div className='form'>
<form className="form-2">
    <h1 className="title-login">Create an account</h1>
    <input className="text-box" type="text"  placeholder="First name" onChange={fillIn} value={user.Firstname}></input>
    <br/>
    <input className="text-box" type="text"  placeholder="Last name" onChange={fillIn} value={user.Lastname}></input>
    <br/>
    <input className="text-box" type="text"  placeholder='Email' onChange={fillIn} value={user.email}></input>
    <br/>
    <input className="text-box" type="text"  placeholder='phone number' onChange={fillIn} value={user.email}></input>
<br/>
<input className="text-box" type="password"  placeholder='Password' onChange={fillIn} value={user.Password}></input>
    <br/>
    <button className="submit-button" >SIGN UP</button>
</form>

</div>

)




}