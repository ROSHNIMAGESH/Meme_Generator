import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  var login = async (event) => {
    event.preventDefault()
    var req = await axios.post("http://localhost:3002/login", {
      email,
      password
    })
    console.log(req.data)
    var isLoginSuccessful = req.data.isloggedIn
    var message = req.data.message
    alert(message)
    if(isLoginSuccessful)
    {
      navigate('/')
    }
    else{
      console.log(message)
    }
    console.log(isLoginSuccessful)
  }

  return (
    <div>
      <form>
        <br />
        <input type="text" placeholder='email' value={email} onChange={(e) => setemail(e.target.value)} required/>
        <br /><br />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <br /><br />
        <button type="reset">Reset</button>
        <br /><br />
        <button type="submit" onClick={login}>Login</button>
        <br /><br />
      </form>
    </div>
  )
}

export default Login