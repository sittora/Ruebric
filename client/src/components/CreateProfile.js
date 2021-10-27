import React, { useState }from 'react';

function CreateProfile({currentUser, setToggleUpdateProfile}){
    const [pictureURL, setPictureURL] = useState("https://st2.depositphotos.com/5682790/10456/v/600/depositphotos_104564156-stock-illustration-male-user-icon.jpg")
    const [formData, setFormData] = useState({
        nick_name: currentUser.profile === null ? "" : currentUser.profile.nick_name,
        name: currentUser.profile=== null ? "" : currentUser.profile.name,
        birthday: currentUser.profile === null ? "" : currentUser.profile.birthday,
        location: currentUser.profile === null ? "" : currentUser.profile.location,
        bio: currentUser.profile === null ? "" : currentUser.profile.bio,
        occupation: currentUser.profile === null ? "" : currentUser.profile.occupation,
        user_id: currentUser.id,
        email: currentUser.profile === null ? "" : currentUser.profile.email,
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
        // setPictureURL("https://i.imgur.com/CBtjmX0.png")
        // setFormData({
        //     nick_name: "",
        //     name: "",
        //     birthday: "",
        //     location: "",
        //     bio: "",
        //     occupation: "",
        //     user_id: currentUser.id,
        //     email: "",
        //     profile_url: ""
        // })
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
            <div className="formDetails">
                <h3 id="submitHeader">{currentUser.profile === null ? "Create Your Profile" : "Update Your Profile" }</h3>
                <img className="profileImage"src={currentUser.profile === null ? pictureURL : (currentUser.profile.profile_url === "" ? pictureURL: currentUser.profile.profile_url ) } alt="profilePicture" />
            
            
                <div className="input-container"> 
                    <label className="nameForm">Your Nickname</label>
                    <input type="text"  name="nick_name" value={formData.nick_name} onChange={handleChange}></input>
                </div>
                <div className="input-container"> 
                    <label >Full Name: </label>
                    <input type="text"  name="name" value={formData.name} onChange={handleChange}></input>
                </div> 
            
                <div className="input-container"> 
                    <label id="urlForm">Profile Picture: </label>
                    <input type="text"  name="profile_url" value={formData.profile_url} onChange={handleChange}></input>
                </div>
                <div className="input-container"> 
                    <label >Age: </label>
                    <input type="number"  name="birthday" value={formData.birthday} onChange={handleChange}></input>
                </div>
                <div className="input-container"> 
                    <label>Email: </label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}></input>
                </div>
                <div className="input-container"> 
                    <label >Location: </label>
                    <input type="text"  name="location" value={formData.location} onChange={handleChange}></input>
                </div>
                <div className="input-container"> 
                    <label >Occupation: </label>
                    <input type="text" name="occupation" value={formData.occupation} onChange={handleChange}></input>
                </div>
                <div className="input-container"> 
                    <label>Bio: </label>
                    <textarea type="text" name="bio" value={formData.bio} onChange={handleChange}></textarea>
                </div>
            
                <div className="input-container">
                    <input type="submit" value={currentUser.profile === null ? "Create Your Profile" : "Update Your Profile" } />
                </div>
            </div>
        </form>
        )
    }



export default CreateProfile;