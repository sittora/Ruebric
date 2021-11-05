import React from "react";
import PlanHandle from "./PlanHandle"

import ProfileDetails from "./ProfileDetails";
function DetailsUserSearch({currentSearchUser, currentUser, setTogglePostSubmit}){

const {plans, user_name} = currentSearchUser;


const displayPlan = plans === undefined || plans.length === 0 ? `${user_name} does not have any plan yet` : plans.map(plan => <PlanHandle key={plan.id} plan={plan} currentUser={currentUser} setTogglePostSubmit={setTogglePostSubmit} currentSearchUser={currentSearchUser}/>)

    return <div className="SearchUserDetails">
        <span className="profile-detail-container">
        <h3> You're visiting {user_name}</h3>
        {currentSearchUser.length === 0 || currentSearchUser.profile === null ? null :<ProfileDetails currentUser={currentSearchUser} />}
        </span>
        <div className="SearchPlanContainer">
            {displayPlan}
        </div>
    </div>
}

export default DetailsUserSearch;