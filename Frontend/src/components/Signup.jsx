import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [firstname, setFName] = useState('')
  const [lastname, setLName] = useState('')
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  var signup = async (event) => {
    event.preventDefault()
    var req = await axios.post("http://localhost:3002/signup", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    })
    console.log(req)
    navigate('/login')
  }
  return (
    <div>
      <form onSubmit={signup}>
        <br />
        <input type="text" placeholder='firstname' value={firstname} onChange={(e) => setFName(e.target.value)} required/>
        <br /><br />
        <input type="text" placeholder='lastname' value={lastname} onChange={(e) => setLName(e.target.value)} required/>
        <br /><br />
        <input type="text" placeholder='email' value={email} onChange={(e) => setemail(e.target.value)} required/>
        <br /><br />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <br /><br />
        <button type="reset">Reset</button>
        <br /><br />
        <button type="submit">Signup</button>
        <br /><br />
      </form>
    </div>
  )
}

export default Signup