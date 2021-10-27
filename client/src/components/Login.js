import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'

function Login({ setCurrentUser }) {
   
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/login', {
        method: 'POST',
            headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
        .then(res => {
        if (res.ok) {
            res.json().then(user => {
            setCurrentUser(user)
            
            })
        } else {
            res.json().then(errors => {
            console.error(errors)
            })
        }
        })
    }
return (
    <div className="login">
        <Redirect to="/" />
    <form className="w-2/3 bg-white p-8 max-w-md space-y-4" onSubmit={handleSubmit}>
        <h1 className="login-text">Log In</h1>
        <p>
            <label 
            className="block text-lg font-semibold"
            htmlFor="username"
            >
            Username
            </label>
            <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="username-box"
            />
        </p>
        <p>
        <label 
            className="block text-lg font-semibold"
            htmlFor="password"
        >
            Password
        </label>
        <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-box"
        />
        </p>
        <p><button className="login-button" type="submit">Log In</button></p>
        <p className="or-text">-- or --</p>
        <p className="text-center"><Link className="signup-button" to="/signup">Sign Up</Link></p>
    </form>
    </div>
)
}

export default Login