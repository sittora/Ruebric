import React, { useState }from 'react';

function CreateProfile({currentUser, setToggleUpdateProfile, setToggleCreateProfile}){
    const [pictureURL, setPictureURL] = useState("https://st2.depositphotos.com/5682790/10456/v/600/depositphotos_104564156-stock-illustration-male-user-icon.jpg")
    const [formData, setFormData] = useState({
        name: currentUser.profile=== null ? "" : currentUser.profile.name,
        location: currentUser.profile === null ? "" : currentUser.profile.location,
        preferences: currentUser.profile === null ? "" : currentUser.profile.preferences,
        user_id: currentUser.id,
        profile_url: currentUser.profile === null ? "" : currentUser.profile.profile_url
    })

    function handleCreate(e){
        e.preventDefault();
        fetch(currentUser.profile === null ? '/profiles' :`/profiles/${currentUser.profile.id}`,{
            method: currentUser.profile === null ? 'POST' :'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        setToggleUpdateProfile(toggleUpdateProfile => !toggleUpdateProfile)
        setToggleCreateProfile(toggleCreateProfile => !toggleCreateProfile)
        setPictureURL("https://i.imgur.com/CBtjmX0.png")
        setFormData({
            name: "",
            location: "",
            preferences: "",
            user_id: currentUser.id,
            profile_url: ""
        })
    }
    function handleChange(event){
        
        const key = event.target.name
        if (key === "profile_url" ) {
        setPictureURL(()=> event.target.value) 
        }
        setFormData({...formData, [key]: event.target.value})
    }
        return (
            
        <form onSubmit={handleCreate} >
            <div class="profile-detail">
                <h3 id="submitHeader">{currentUser.profile === null ? "Create Your Profile" : "Update Your Profile" }</h3>
                <img className="profileImage"src={currentUser.profile === null ? pictureURL : (currentUser.profile.profile_url === "" ? pictureURL: currentUser.profile.profile_url ) } alt="profilePicture" />
            
                <div className="input-container"> 
                    <label >Full Name: </label>
                    <input type="text" className="name-input-box" name="name" value={formData.name} onChange={handleChange}></input>
                </div> 
            
                <div className="input-container"> 
                    <label id="urlForm">Profile Picture: </label>
                    <input type="text" className="profile-picture-input-box" name="profile_url" value={formData.profile_url} onChange={handleChange}></input>
                </div>
                <div className="input-container"> 
                    <label >Location: </label>
                    <input type="text" className="location-input-box" name="location" value={formData.location} onChange={handleChange}></input>
                </div>
                <div className="input-container"> 
                    <label>Preferences: </label>
                    <textarea type="text" className="bio-input-box" name="preferences" value={formData.preferences} onChange={handleChange}></textarea>
                </div>
            
                <div className="input-container">
                    <input type="submit" className="update-profile-button" value={currentUser.profile === null ? "Create" : "Update" } />
                </div>
            </div>
        </form>
      
        )
    }



export default CreateProfile;