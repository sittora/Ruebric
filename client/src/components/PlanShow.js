import React,{ useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import ActivitySearch from './ActivitySearch'
import UserActivity from './UserActivity'

function PlanShow({id, currentUser, setTogglePostSubmit, currentSearchUser, togglePostSubmit}){
    const [plan, setPlan] = React.useState(null);
    const other_id = 15; // todo: get this from url
    // const [togglePostSubmit, setTogglePostSubmit]= useState(false)

    React.useEffect(() => {
        fetch(`/plans/${other_id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPlan(data);
        });
    }, [togglePostSubmit]);

    if (!plan) return null;

    const {date, start_time, end_time, location, plan_id, activities} = plan

    const displayPlanActivities = activities === undefined ? null : activities.map(activity => <UserActivity 
        key={activity.id} activity={activity}  
        currentUser={currentUser}
        currentPlan={plan}
        setPlan={setPlan}
        currentSearchUser={currentSearchUser}
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
                {currentUser.user_name === currentSearchUser.user_name || currentSearchUser.length === 0? <button onClick={handleDeletePlan}>Delete Plan</button> : null}

                <div className="plan-activities-container">
                    {displayPlanActivities}
                </div>
            </div>
            <div className="activity-container">
                <ActivitySearch currentUser={currentUser} currentPlan={plan} togglePostSubmit={togglePostSubmit}/>
            </div>
        </div>
    )
}


export default PlanShow