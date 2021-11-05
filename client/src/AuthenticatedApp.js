import React, {useState, useEffect} from 'react';
import PlanForm from './components/PlanForm';
import PlanHandle from './components/PlanHandle';
import CreateProfile from './components/CreateProfile';
import ProfileDetails from './components/ProfileDetails';
import SeachUser from './components/SeachUser'
import UserSearchHandle from './components/UserSearchHandle';
import DetailsUserSearch from './components/DetailsUserSearch';
import Popup from "./components/Popup";


function AuthenticatedApp({setCurrentUser, currentUser, setToggleUpdateProfile}){
  const [userPlan, setUserPlan] = useState()
  const [togglePostSubmit, setTogglePostSubmit]= useState(false)
  const [toggleCreateProfile, setToggleCreateProfile] = useState(false)
  const [searchUser, setSearchUser] = useState([])
  const [toggleSeach, setToggleSeach]= useState(false)
  const [currentSearchUser, setCurrentSearchUser] = useState([])
  const [toggleUserDetail, setToggleUserDetail] = useState(false)
  //const [hideShow, setHideShow] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
  
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
  fetch(`/plans`)
  .then(r=>r.json())
  .then(plansData => setUserPlan(plansData))
},[togglePostSubmit])


function handleCreateProfile(){
  setToggleCreateProfile(toggleCreateProfile => !toggleCreateProfile)
}

// console.log(userPlan)
const displayPlan = userPlan === undefined || userPlan.status === 404 ? null : userPlan.map(plan => <PlanHandle 
                                                                              key={plan.id} plan={plan}  
                                                                              currentUser={currentUser}
                                                                              setTogglePostSubmit={setTogglePostSubmit}
                                                                              currentSearchUser={currentSearchUser}
                                                                              togglePostSubmit={togglePostSubmit}
                                                                              />)

const displayUser = searchUser.length === 0 ? <h1>No Matching User </h1>: searchUser.map(user => <UserSearchHandle key={user.id} user={user} setCurrentSearchUser={setCurrentSearchUser} setToggleUserDetail={setToggleUserDetail} togglePostSubmit={togglePostSubmit} />)

return <div className="displayLoginUserData">
        
        {/* search bar */}
        {/* <div className="Search-Bar-Box">
            <SeachUser setSearchUser={setSearchUser} setToggleSeach={setToggleSeach} setToggleUserDetail={setToggleUserDetail} />
        </div> */}

        {/* display user details */}
        {/* {toggleSeach === true ?  <button onClick={() => {
                          setCurrentSearchUser([])
                          setToggleSeach(false)}} className="your-profile-button"> Your Profile</button> : 
        
            <div className="profile-detail-container">
                
                      <h4>You are now logged in as {currentUser.user_name}</h4>
                  <div className="buttons-container">
                      <button className="update-your-profile-button" onClick={handleCreateProfile}>{currentUser.profile === null ? "Create Your Profile" : "Update Your Profile"}</button>
                     
                      <button className="logout-button" onClick={handleLogout}>Logout</button>
                      
                  </div>
                      {toggleCreateProfile === false ? currentUser.profile === null ? null : <ProfileDetails currentUser={currentUser} /> : <CreateProfile currentUser={currentUser} setToggleUpdateProfile={setToggleUpdateProfile}/>}
           
            </div>} */}
        
        {toggleSeach === true ? (toggleUserDetail === false ? <div className="show-user-search-results">{displayUser}</div> : <DetailsUserSearch currentSearchUser={currentSearchUser} currentUser={currentUser} setTogglePostSubmit={setTogglePostSubmit}/>) :
        
        
        <div className="plansContainer">
          {/* <PlanForm currentUser={currentUser} setTogglePostSubmit={setTogglePostSubmit} /> */}
          {/* Create will toggle popup with create form */}
          <button onClick={togglePopup}>Create</button>
          {isOpen && <Popup
            content={<>
              <h1>Create Plan</h1> 
              <PlanForm currentUser={currentUser} setTogglePostSubmit={setTogglePostSubmit} handleClose={togglePopup}/>
            </>}
            handleClose={togglePopup}
          />}
          
          <div className="all-plans-Container">
            {displayPlan}
          </div>
        </div>}
    </div>
}


export default AuthenticatedApp;