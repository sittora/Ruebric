import React, { useState }from 'react';

function PlanForm({currentUser, setTogglePostSubmit, handleClose}){
    const [planMessage, setPlanMessage]= useState({
        date: "",
        start_time: 0,
        end_time: 0,
        location: "",
        user_id: currentUser.id
        })

function handleSubmitPost(e){
    e.preventDefault()
    
    fetch('/plans',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(planMessage)
    })
    setTogglePostSubmit(togglePostSubmit => !togglePostSubmit)
    handleClose()
   setPlanMessage({
        date: "",
        start_time: 0,
        end_time: 0,
        location: "",
        user_id: currentUser.id
    })
   }



function handleOnchange(e){
    const key = e.target.name
    setPlanMessage({...planMessage, [key]: e.target.value}) 
}
    //   console.log(planMessage)

    return <div className="submit-plan-container">
        <form className="authenticated-form" onSubmit={handleSubmitPost}>
            <div className="input-container"> 
                <label>Date: </label>
                <input type="text" name="date" value={planMessage.date} onChange={handleOnchange}></input>
                <label>Start Time: </label>
                <input type="text" name="start_time" value={planMessage.start_time} onChange={handleOnchange}></input>
                <label>End Time: </label>
                <input type="text" name="end_time" value={planMessage.end_time} onChange={handleOnchange}></input>
                <label>Location: </label>
                <input type="text" name="location" value={planMessage.location} onChange={handleOnchange}></input>
            </div>
            <div className="input-container">
                <input type="submit" className="plan-button" value="Create" />
            </div>
        </form>
    </div>
}


export default PlanForm;