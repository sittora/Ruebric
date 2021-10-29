import React, {useState, useEffect} from 'react';
import PostForm from './components/PostForm';
import PostHandle from './components/PostHandle';
import CreateProfile from './components/CreateProfile';
import ProfileDetails from './components/ProfileDetails';
import SeachUser from './components/SeachUser'
import UserSearchHandle from './components/UserSearchHandle';
import DetailsUserSearch from './components/DetailsUserSearch';
function AuthenticatedApp({setCurrentUser, currentUser, setToggleUpdateProfile}){
  const [userPost, setUserPost] = useState()
  const [togglePostSubmit, setTogglePostSubmit]= useState(false)
  const [toggleCreateProfile, setToggleCreateProfile] = useState(false)
  const [searchUser, setSearchUser] = useState([])
  const [toggleSeach, setToggleSeach]= useState(true)
  const [currentSearchUser, setCurrentSearchUser] = useState([])
  const [toggleUserDetail, setToggleUserDetail] = useState(false)
  const [hideShow, setHideShow] = useState(false)
  console.log(currentUser)
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

useEffect(() =>{
  fetch(`/posts`)
  .then(r=>r.json())
  .then(postsData => setUserPost(postsData))
},[togglePostSubmit])


function handleCreateProfile(){
  setToggleCreateProfile(toggleCreateProfile => !toggleCreateProfile)
}

// console.log(userPost)
const displayPost = userPost === undefined || userPost.status === 404 ? null : userPost.map(post => <PostHandle 
                                                                              key={post.id} post={post}  
                                                                              currentUser={currentUser}
                                                                              setTogglePostSubmit={setTogglePostSubmit}
                                                                              currentSearchUser={currentSearchUser}
                                                                              />)
     
const displayUser = searchUser === null ? 'No Matching User' : searchUser.map(user => <UserSearchHandle key={user.id} user={user} setCurrentSearchUser={setCurrentSearchUser} setToggleUserDetail={setToggleUserDetail} />)
return <div className="displayLoginUserData">
        <div className="Search-Bar-Box">
        <SeachUser setSearchUser={setSearchUser} setToggleSeach={setToggleSeach} setToggleUserDetail={setToggleUserDetail} />
        <button onClick={() => {
          setCurrentSearchUser([])
          setToggleSeach(false)}}> Profile</button>
        </div>
        {toggleSeach === true ? null : <div className="profileBtnContainer">
            <h4>You are now logged in as {currentUser.user_name}</h4>
            <div className="buttons-container">
            <button className="update-your-profile-button" onClick={handleCreateProfile}>{currentUser.profile === null ? "Create Your Profile" : "Update Your Profile"}</button>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
            {toggleCreateProfile === false ? currentUser.profile === null ? null : <ProfileDetails currentUser={currentUser} /> : <CreateProfile currentUser={currentUser} setToggleUpdateProfile={setToggleUpdateProfile}/>}
            </div>
        </div>}

        {toggleSeach === true ? (toggleUserDetail === false ? displayUser : <DetailsUserSearch currentSearchUser={currentSearchUser} currentUser={currentUser} setTogglePostSubmit={setTogglePostSubmit}/>) :
        <div className="postsContainer">
         
          <PostForm currentUser={currentUser} setTogglePostSubmit={setTogglePostSubmit} />
          
          {displayPost}
        </div>}
    </div>
}


export default AuthenticatedApp;