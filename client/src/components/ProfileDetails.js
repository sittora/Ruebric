import React from 'react'


function ProfileDetails({currentUser}){
    console.log(currentUser.profile)
    const {name, bio, birthday, email, location, nick_name, occupation, profile_url} = currentUser.profile
    return <div className="profileDetailContainer">
        <img className="profileImage" src={profile_url} alt={name} />
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