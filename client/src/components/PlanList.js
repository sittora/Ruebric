import React,{ useState, useEffect} from 'react'
import PlanForm from './PlanForm';
import PlanHandle from './PlanHandle';
import Popup from "./Popup";

function PlanList({currentUser}){
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