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
        <h3> You're Signup</h3>
    <form className="w-2/3 bg-white p-8 max-w-md space-y-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-center font-bold mb-2">Sign Up</h1>
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
                className="w-full p-2 border"
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
                className="w-full p-2 border"
        />
        </p>
        <p>
        <label 
            htmlFor="password_confirmation"
            className="block text-lg font-semibold"
        >
            Password Confirmation
        </label>
            <input
                type="password"
                name="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className="w-full p-2 border"
        />
        </p>
        <p><button className="w-full bg-green-500 py-2 mt-4" type="submit">Sign Up</button></p>
        <p className="text-center">-- or --</p>
        <p className="text-center"><Link className="py-4 px-6" to="/login">Log In</Link></p>
    </form>
    </div>
)
}

export default Signup