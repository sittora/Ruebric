import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup({ setCurrentUser }) {
  
    const [user_name, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/signup', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user_name,
        password,
        password_confirmation: passwordConfirmation
    })
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
        {/* <h3 className="you-signedup"> You're Signed up</h3> */}
    <form className="w-2/3 bg-white p-8 max-w-md space-y-4" onSubmit={handleSubmit}>
        <h1 className="signup-text">Sign Up</h1>
    <p>
        <label
            className="block text-lg font-semibold"
            htmlFor="username"
        >
            Username
        </label>
            <input
                type="text"
                name="user_name"
                value={user_name}
                onChange={(e) => setUsername(e.target.value)}
                className="username-signup-box"
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
                className="password-signup-box"
        />
        </p>
        <p>
        <label 
            htmlFor="password_confirmation"
            className="password-confirmation-text"
        >
            Password Confirmation
        </label>
            <input
                type="password"
                name="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className="password-signup-confirmation-box"
        />
        </p>
        <p><button className="signup-button-two" type="submit">Sign Up</button></p>
        <p className="or-text-two">~  or ~</p>
        <p className="text-center"><Link className="login-link" to="/login">Log In</Link></p>
    </form>
    </div>
)
}

export default Signup