import React,{ useState, useEffect} from 'react'
import ActivityForm from './ActivityForm'
import {Link} from 'react-router-dom'
import Popup from "./Popup";

function UserActivity({activity, currentUser, currentPlan, setPlan, currentSearchUser, togglePostSubmit}){
    const {date, start_time, end_time, location, id} = activity;

    function handleDeleteActivity(){
        fetch(`/activities/${id}`,{
            method: 'DELETE'
        })
    
        setPlan(true);
    }

    console.log(`currentPlan.user_id: ${currentPlan.user_id}`)
    console.log(`currentUser.id: ${currentUser.id}`)
    console.log(`equal? ${currentPlan.user_id == currentUser.id}`)

    return (
        <div className="each-activity-container">
            <div className="header-activity" >
                <h3>Business Name: {activity.name}</h3>
                <p>Address: {activity.address}</p>
                <p>Start Time: {activity.start_time}</p>
                <p>End Time: {activity.end_time}</p>
                {currentPlan.user_id == currentUser.id ? <button onClick={handleDeleteActivity}>Delete Activity</button> : null}
            </div>
        </div>
    )
}


export default UserActivity