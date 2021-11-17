import React,{ useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import ActivitySearch from './ActivitySearch'
import UserActivity from './UserActivity'

function PlanShow({id, currentUser, setTogglePostSubmit, currentSearchUser, togglePostSubmit}){
    const [plan, setPlan] = React.useState(null);
    // const other_id = 44; // todo: get this from url
    const [toggleActivitySubmit, setToggleActivitySubmit]= useState(false);
    // const { p_id } = useParams();

    // console.log(p_id)

    React.useEffect(() => {
        // fetch(`/plans/${p_id}`)
        fetch(`/plans/2`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPlan(data);
        });
    }, [togglePostSubmit, toggleActivitySubmit]);

    if (!plan) return null;

    const {date, start_time, end_time, location, plan_id, activities} = plan

    const displayPlanActivities = activities === undefined ? null : activities.map(activity => <UserActivity 
        key={activity.id} activity={activity}  
        currentUser={currentUser}
        currentPlan={plan}
        setPlan={setPlan}
        currentSearchUser={currentSearchUser}
        setToggleActivitySubmit={setToggleActivitySubmit}
        />)

    function handleDeletePlan(){
        fetch(`/plans/${plan_id}`,{
            method: 'DELETE'
        })
    
        setTogglePostSubmit(!togglePostSubmit)
    }

    return (
        <div className="main-container">
            <div className="header-plan" >
                <h1>Plan</h1>
                <h3>Date: {date}</h3>
                <p className="text-plan-container">Location: {location}</p>
                <p className="text-plan-container">Start Time: {start_time}</p>
                <p className="text-plan-container">End Time: {end_time}</p>
                {/* <button className="edit-button" onClick={handleDeletePlan}>Edit</button> */}
                {/* {currentUser.user_name === currentSearchUser.user_name || currentSearchUser.length === 0? <button className ="delete-plan-button" onClick={handleDeletePlan}>Delete Plan</button> : null} */}

                <div className="plan-activities-container">
                    {displayPlanActivities}
                </div>
            </div>
            <div className="activity-container">
                <ActivitySearch currentUser={currentUser} currentPlan={plan} setToggleActivitySubmit={setToggleActivitySubmit}/>
            </div>
        </div>
    )
}


export default PlanShow