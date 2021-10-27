import React, { useState }from 'react';

function CreateProfile({currentUser}){
    const [pictureURL, setPictureURL] = useState("")
    const [formData, setFormData] = useState({
        nick_name: "",
        name: "",
        birthday: "",
        location: "",
        bio: "",
        occupation: "",
        user_id: currentUser.id,
        email: "",
        profile_url: ""
    })
    function handleSubmit(e){
        e.preventDefault();
        fetch('/profiles',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        setPictureURL("https://i.imgur.com/CBtjmX0.png")
        setFormData({
            nick_name: "",
            name: "",
            birthday: "",
            location: "",
            bio: "",
            occupation: "",
            user_id: currentUser.id,
            email: "",
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
        <form onSubmit={handleSubmit} >
            <div className="formDetails">
                <h1 id="submitHeader">Update Your Profile</h1>
                <img className="profileImage"src={pictureURL === "" ? "https://st2.depositphotos.com/5682790/10456/v/600/depositphotos_104564156-stock-illustration-male-user-icon.jpg" : pictureURL } alt="profilePicture" />
            
            
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
                    <label >Date of Birth: </label>
                    <input type="text"  name="birthday" value={formData.birthday} onChange={handleChange}></input>
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
                    <input type="submit" value="Update Profile" />
                </div>
            </div>
        </form>
        )
    }



export default CreateProfile;