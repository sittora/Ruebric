import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import UnauthenticatedApp from './UnauthenticatedApp'
import AuthenticatedApp from './AuthenticatedApp'
import Header from './components/Header'
import WelcomePage from './components/WelcomePage'

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [toggleUpdateProfile, setToggleUpdateProfile] = useState(false)
  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [toggleUpdateProfile])
  
  if(!authChecked) { return <div></div>}
  return (
    
    <Router>
    {currentUser ? (

        [
          <Header loggedIn={true} setCurrentUser={setCurrentUser}/>,
          <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            setToggleUpdateProfile={setToggleUpdateProfile}
          />
        ]
      ) : (
        [
          <Header loggedIn={true}/>,
          <WelcomePage />, 
          <UnauthenticatedApp
            setCurrentUser={setCurrentUser}
          />
          
        ]
      )
    }
  </Router>
)
}


export default App;
