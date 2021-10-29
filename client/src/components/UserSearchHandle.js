import React,{ useState} from 'react';

function UserSearchHandle({user, setToggleUserDetail, setCurrentSearchUser, toggleUserDetail}){



const pictureURL ="https://st2.depositphotos.com/5682790/10456/v/600/depositphotos_104564156-stock-illustration-male-user-icon.jpg"
const profilePicture = user.profile === null? pictureURL : user.profile.profile_url
    
function handleOnClickSearchUser(){

    fetch(`/searchUser/${user.id}`)
    .then(res => res.json())
    .then(userData => setCurrentSearchUser(userData))
    setToggleUserDetail(true)
}

    
    
    return <div className="UserSearch">
        <div className="UserName-Image">
            
            <img onClick={handleOnClickSearchUser} className="imageSearchUser" src={profilePicture} alt={user.user_name}/>
            {user.user_name}
            <div className="FollowOrUnFollowButton">
                <button >Follow Or Unfollow</button>
            </div>
        </div> 
    </div>
}


export default UserSearchHandle