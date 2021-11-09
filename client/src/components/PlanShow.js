import React,{ useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import ActivityForm from './ActivityForm'

function PlanShow({id, currentUser, setTogglePostSubmit, currentSearchUser, togglePostSubmit}){
    const [plan, setPlan] = React.useState(null);

    React.useEffect(() => {
    fetch(`/plans/${id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setPlan(data);
        });
    }, [id]);

    if (!plan) return null;

    // useEffect(()=>{
    //     fetch(`/plans/${id}`,{
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({})
    //     })
    // },[togglePostSubmit])

    const {date, start_time, end_time, location, plan_id} = plan

    function handleDeletePlan(){
        fetch(`/plans/${plan_id}`,{
            method: 'DELETE'
        })
    
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
            <button className="edit-button" onClick={handleDeletePlan}>Edit</button>
            {currentUser.user_name === currentSearchUser.user_name || currentSearchUser.length === 0? <button className="delete-button" onClick={handleDeletePlan}>Delete</button> : null}
            </div>
            {/* {image_url === "" ? null : <img src={image_url} alt={currentUser.user_name} className="imageContainer"></img>} */}
        </div>
    )
}


export default PlanShow