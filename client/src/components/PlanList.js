import React,{ useState, useEffect} from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import PlanForm from './PlanForm';
import PlanHandle from './PlanHandle';
import PlanShow from './PlanShow';
import Popup from "./Popup";

function PlanList({currentUser}){
  // const match= useRouteMatch();
  const [userPlan, setUserPlan] = useState()
    const [togglePostSubmit, setTogglePostSubmit]= useState(false)
    const [toggleCreateProfile, setToggleCreateProfile] = useState(false)
    const [searchUser, setSearchUser] = useState([])
    const [toggleSeach, setToggleSeach]= useState(false)
    const [currentSearchUser, setCurrentSearchUser] = useState([])
    const [toggleUserDetail, setToggleUserDetail] = useState(false)

    useEffect(() => {
        fetch(`/plans`)
        .then(r=>r.json())
        .then(plansData => { setUserPlan(plansData)})
        },[togglePostSubmit]
    )

    console.log(userPlan);

    const displayPlan = userPlan === undefined || userPlan.status === 404 ? null : userPlan.map(plan => <PlanHandle 
        key={plan.id} plan={plan}  
        currentUser={currentUser}
        setTogglePostSubmit={setTogglePostSubmit}
        currentSearchUser={currentSearchUser}
    />);

    const planLength = displayPlan && displayPlan.length > 0;

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }


    // useEffect(()=>{
    //     fetch(`/plans/${id}`,{
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({})
    //     })
    // },[togglePostSubmit])

    return (
        // toggleSearch === true ? (toggleUserDetail === false ? <div className="show-user-search-results">{displayUser}</div> : <DetailsUserSearch currentSearchUser={currentSearchUser} currentUser={currentUser} setTogglePostSubmit={setTogglePostSubmit}/>) :
        
        <div className="plansContainer">    
            {/* <Route path={`${match.url}/:id`}>
              <PlanShow currentUser={currentUser} togglePostSubmit={setTogglePostSubmit} currentSearchUser={currentSearchUser} />
            </Route> */}

          {!planLength ? <p>You don't have any plans! Create one below</p> : null}
          <button onClick={togglePopup}>Create</button>
          
          {isOpen && <Popup
            content={<>
              <h1>Create Plan</h1> 
              <PlanForm currentUser={currentUser} setTogglePostSubmit={setTogglePostSubmit} handleClose={togglePopup} togglePostSubmit={togglePostSubmit}/>
            </>}
            handleClose={togglePopup}
          />}
        
          <div className="all-plans-Container">
            {displayPlan}
          </div>

          
        </div>

        
    )
}


export default PlanList