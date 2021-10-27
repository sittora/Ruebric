import React, {useState, useEffect} from 'react';
import PostForm from './components/PostForm';
import PostHandle from './components/PostHandle';
import CreateProfile from './components/CreateProfile';
import ProfileDetails from './components/ProfileDetails';
function AuthenticatedApp({setCurrentUser, currentUser, setToggleUpdateProfile}){
  const [userPost, setUserPost] = useState()
  const [togglePostSubmit, setTogglePostSubmit]= useState(false)
  const [toggleCreateProfile, setToggleCreateProfile] = useState(false)
  const [hideShow, setHideShow] = useState(false)
  
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
                                                                              />)
     

return <div className="displayLoginUserData">
        <div className="profileBtnContainer">
            <h4>You are now log in as {currentUser.user_name}</h4>
            <button onClick={handleCreateProfile}>{currentUser.profile === null ? "Create Your Profile" : "Update Your Profile"}</button>
            <button onClick={handleLogout}>Logout</button>
            {toggleCreateProfile === false ? currentUser.profile === null ? null : <ProfileDetails currentUser={currentUser} /> : <CreateProfile currentUser={currentUser} setToggleUpdateProfile={setToggleUpdateProfile}/>}
        </div>
        <div className="postsContainer">
         
          <PostForm currentUser={currentUser} setTogglePostSubmit={setTogglePostSubmit} />
          
          {displayPost}
        </div>
    </div>
}


export default AuthenticatedApp;