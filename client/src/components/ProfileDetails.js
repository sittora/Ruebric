import React from 'react'


function ProfileDetails({currentUser}){
    
    const {name, bio, birthday, email, location, nick_name, occupation, profile_url} = currentUser.profile
    return <div className="profile-detail">
        <img className="profile-image" src={profile_url ==="" ? "https://st2.depositphotos.com/5682790/10456/v/600/depositphotos_104564156-stock-illustration-male-user-icon.jpg}" : profile_url} alt={name} />
        <div className="mark"></div>
        <h4>Name: {name}</h4>
        <p>Age: {birthday}</p>
        <p>Email: {email}</p>
        <p>Location: {location}</p>
        <p>Nickname: {nick_name}</p>
        <p>Occupation: {occupation}</p>
        <p>Bio: {bio}</p>
    </div>
}


export default ProfileDetails