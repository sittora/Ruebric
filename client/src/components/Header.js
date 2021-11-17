import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Ruebric_logo1.png' 


function Header({loggedIn, setCurrentUser}) {
  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => {
      if (res.ok) {
        setCurrentUser(null)
      
      }
    })
  }

  return (
    <div className="header-container">
       <img src={logo} alt={"logo"}/>
       {/* <h2>My plans</h2>  */}
       <Link  to={{pathname: `/plans`}}>My Plans</Link>
       {loggedIn === false ? null : <button className="logout-button" onClick={handleLogout}>Logout</button>}
       <h2>My profile</h2> 
    </div>
)
}

export default Header