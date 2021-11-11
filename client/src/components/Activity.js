import React,{ useState, useEffect} from 'react'
import ActivityForm from './ActivityForm'
import {Link} from 'react-router-dom'
import Popup from "./Popup";

function Activity({activity, currentUser, currentPlan, setToggleActivitySubmit, currentSearchUser}){
    const {date, start_time, end_time, location, id} = activity;
    // const [activityMessage, setActivityMessage] = useState('');

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    function handleDeleteActivity(){
        fetch(`/activities/${id}`,{
            method: 'DELETE'
        }).then(() => {
            setToggleActivitySubmit(toggleActivitySubmit => !toggleActivitySubmit)
        });
    }

    return (
        <div className="each-activity-container">
            <div className="header-activity" >
            <h3>Business Name: {activity.name}</h3>
            {/* <p>Open Now: {activity.opening_hours.open_now}</p> */}
            <p>Rating: {activity.rating}</p>
            <p>Address: {activity.formatted_address}</p>
                {/* <p className="text-activity-container">Location: {location}</p>
                <p className="text-activity-container">Start Time: {start_time}</p>
                <p className="text-activity-container">End Time: {end_time}</p> */}
                {/* todo: update handleDelete to handleEdit below >>> */}
                {/* <Link  to={{pathname: `/activities/${id}`}}>More Details</Link> */}
                <button className="create-button" onClick={togglePopup}>Add To Plan</button>
                {isOpen && <Popup
                    content={<>
                    <h1>Create Activity</h1> 
                    <ActivityForm activity={activity} currentUser={currentUser} currentPlan={currentPlan} setToggleActivitySubmit={setToggleActivitySubmit} handleClose={togglePopup}/>
                    </>}
                    handleClose={togglePopup}
                />}
                {/* {currentUser.user_name === currentSearchUser.user_name || currentSearchUser.length === 0? <button className="delete-button" onClick={handleDeleteActivity}>Delete</button> : null} */}
            </div>
            {/* {image_url === "" ? null : <img src={image_url} alt={currentUser.user_name} className="imageContainer"></img>} */}
        </div>
    )
}


export default Activity