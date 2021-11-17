import React, {useState, useEffect} from 'react';
import CreateProfile from './CreateProfile';
import UserSearchHandle from './UserSearchHandle';

function ProfileDetails({currentUser, setToggleUpdateProfile}){
    const [toggleCreateProfile, setToggleCreateProfile] = useState(false)
    const [currentSearchUser, setCurrentSearchUser] = useState([])
    const {name, location, preferences, profile_url} = currentUser.profile ? currentUser.profile : {name: '', location: '', preferences: '', profile_url: ''};

    function handleCreateProfile(){
        setToggleCreateProfile(toggleCreateProfile => !toggleCreateProfile)
    }

    return <div className="profile-detail">     
        <div >
                <h4>You are now logged in as {currentUser.user_name}</h4>
            <div className="buttons-container">
                <button className="update-your-profile-button" onClick={handleCreateProfile}>{currentUser.profile === null ? "Create Your Profile" : "Update Your Profile"}</button>                   
            </div>
                {toggleCreateProfile === false ? currentUser.profile === null ? <h1>no user profile found</h1> : <h1>interesting</h1> : <CreateProfile currentUser={currentUser} setToggleUpdateProfile={setToggleUpdateProfile} setToggleCreateProfile={setToggleCreateProfile} />}
        </div>

        <img className="profile-image" src={profile_url ==="" ? "https://st2.depositphotos.com/5682790/10456/v/600/depositphotos_104564156-stock-illustration-male-user-icon.jpg}" : profile_url} alt={name} />
        <div className="mark"></div>
        <h4>Name: {name}</h4>
        <p>Location: {location}</p>
        <p>Preferences: {preferences}</p>
    </div>
}


export default ProfileDetails