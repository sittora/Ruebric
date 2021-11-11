import React from 'react'
import logo from '../Ruebric_logo1.png' 


function Header() {

  return (
    <div className="header-container">
       <img src={logo} alt={"logo"}/>
       <h2>My plans</h2> 
       <h2>My profile</h2> 
    </div>
)
}

export default Header