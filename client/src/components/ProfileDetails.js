import React from 'react'


function ProfileDetails({currentUser}){
    
    const {name, location, preferences, profile_url} = currentUser.profile
    return <div className="profile-detail">
        <img className="profile-image" src={profile_url ==="" ? "https://st2.depositphotos.com/5682790/10456/v/600/depositphotos_104564156-stock-illustration-male-user-icon.jpg}" : profile_url} alt={name} />
        <div className="mark"></div>
        <h4>Name: {name}</h4>
        <p>Location: {location}</p>
        <p>Preferences: {preferences}</p>
    </div>
}


export default ProfileDetails