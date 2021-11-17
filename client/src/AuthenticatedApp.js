import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom'

import PlanList from './components/PlanList';
import PlanShow from './components/PlanShow';
import CreateProfile from './components/CreateProfile';
import ProfileDetails from './components/ProfileDetails';
import SeachUser from './components/SeachUser'
import UserSearchHandle from './components/UserSearchHandle';
import DetailsUserSearch from './components/DetailsUserSearch';


function AuthenticatedApp({setCurrentUser, currentUser, setToggleUpdateProfile}){
  const [togglePostSubmit, setTogglePostSubmit]= useState(false)
  const [toggleCreateProfile, setToggleCreateProfile] = useState(false)
  const [searchUser, setSearchUser] = useState([])
  const [toggleSeach, setToggleSeach]= useState(false)
  const [currentSearchUser, setCurrentSearchUser] = useState([])

  const [toggleUserDetail, setToggleUserDetail] = useState(false)
  //const [hideShow, setHideShow] = useState(false)

  function handleCreateProfile(){
    setToggleCreateProfile(toggleCreateProfile => !toggleCreateProfile)
  }

 

  const displayUser = searchUser.length === 0 ? <h1>No Matching User </h1>: searchUser.map(user => <UserSearchHandle key={user.id} user={user} setCurrentSearchUser={setCurrentSearchUser} setToggleUserDetail={setToggleUserDetail} togglePostSubmit={togglePostSubmit} />)

  return ( 

    <div className="displayLoginUserData">
        
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
        
        <Switch>
            <Route exact path="/">
                <ProfileDetails currentUser={currentUser} />
            </Route>
            <Route exact path="/plans">
              <PlanList currentUser={currentUser} />
            </Route>
            <Route exact path="/plans/:p_id">
              <PlanShow currentUser={currentUser} setTogglePostSubmit={setTogglePostSubmit} currentSearchUser={currentSearchUser} />
            </Route>
            {/* <Route path={`${match.url}/:id`}>
              <PlanShow currentUser={currentUser} togglePostSubmit={setTogglePostSubmit} currentSearchUser={currentSearchUser} />
            </Route> */}
            {/* <Route path="/plans/:id" component={PlanShow} currentUser={currentUser} /> */}
            {/* <Route exact path="/plans/:id" render={(props) => {
                props['currentUser'] = currentUser;
                props['togglePostSubmit'] = setTogglePostSubmit;
                props['currentSearchUser'] = currentSearchUser;
                <PlanShow {...props} />
              } 
            } /> */}
            <Redirect to="/" />
        </Switch>
    </div>
  )
}


export default AuthenticatedApp;