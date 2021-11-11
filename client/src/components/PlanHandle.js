import React,{ useState, useEffect} from 'react'
import ActivityForm from './ActivityForm'
import {Link} from 'react-router-dom'

function PlanHandle({plan, currentUser, setTogglePostSubmit, currentSearchUser}){
    const {date, start_time, end_time, location, id} = plan

    // useEffect(()=>{
    //     fetch(`/plans/${id}`,{
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({})
    //     })
    // },[togglePostSubmit])

    function handleDeletePlan(){
        fetch(`/plans/${id}`,{
            method: 'DELETE'
        });
        setTogglePostSubmit(togglePostSubmit => !togglePostSubmit)
    }

    return (
        <div className="each-plan-container">
        <div className="header-plan" >
            <h3>Date: {date}</h3>
            <p className="text-plan-container">Location: {location}</p>
            <p className="text-plan-container">Start Time: {start_time}</p>
            <p className="text-plan-container">End Time: {end_time}</p>
            {/* todo: update handleDelete to handleEdit below >>> */}
            <Link  to={{pathname: `/plans/${id}`}}>More Details</Link>
            <button className="edit-button" onClick={handleDeletePlan}>Edit</button>
            {currentUser.user_name === currentSearchUser.user_name || currentSearchUser.length === 0? <button onClick={handleDeletePlan}>Delete</button> : null}
            </div>
            {/* {image_url === "" ? null : <img src={image_url} alt={currentUser.user_name} className="imageContainer"></img>} */}
        </div>
    )
}


export default PlanHandle